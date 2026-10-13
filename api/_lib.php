<?php
// Shared helpers for the OOC website API. Not directly reachable (blocked by .htaccess).

declare(strict_types=1);

const OOC_MAIL_TO   = 'info@oocadvocates.africa';
const OOC_MAIL_FROM = 'no-reply@oocadvocates.africa';

function ooc_private_dir(): string {
  // /home/<user>/ooc-private — outside public_html, never served.
  $dir = dirname(__DIR__, 2) . '/ooc-private';
  if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
  return $dir;
}

function ooc_content_dir(): string { return dirname(__DIR__) . '/content'; }

function ooc_json($data, int $code = 200): void {
  http_response_code($code);
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-Control: no-store');
  header('X-Content-Type-Options: nosniff');
  echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  exit;
}

function ooc_fail(string $msg, int $code = 400): void { ooc_json(['ok' => false, 'error' => $msg], $code); }

function ooc_session(): void {
  if (session_status() === PHP_SESSION_ACTIVE) return;
  $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
  session_name('ooc_admin');
  session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'secure' => $secure, 'httponly' => true, 'samesite' => 'Strict']);
  session_start();
  if (empty($_SESSION['csrf'])) { $_SESSION['csrf'] = bin2hex(random_bytes(24)); }
}

function ooc_body(): array {
  $raw = file_get_contents('php://input');
  $d = json_decode($raw ?: '[]', true);
  return is_array($d) ? $d : [];
}

function ooc_require_post(): void {
  if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') ooc_fail('Method not allowed', 405);
}

function ooc_require_csrf(): void {
  $sent = $_SERVER['HTTP_X_CSRF'] ?? '';
  if (!is_string($sent) || !hash_equals($_SESSION['csrf'] ?? '', $sent)) ooc_fail('Session expired. Please reload the page.', 403);
}

function ooc_require_login(): string {
  ooc_session();
  if (empty($_SESSION['user'])) ooc_fail('Please log in.', 401);
  // Idle timeout: 2 hours
  if (time() - ($_SESSION['seen'] ?? 0) > 7200) { session_destroy(); ooc_fail('Please log in again.', 401); }
  $_SESSION['seen'] = time();
  return (string) $_SESSION['user'];
}

// ---- file storage with locking + backups ----

function ooc_read_json(string $path, $default) {
  if (!is_file($path)) return $default;
  $d = json_decode((string) file_get_contents($path), true);
  return $d === null ? $default : $d;
}

function ooc_write_json(string $path, $data, bool $backup = true): void {
  $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  if ($json === false) ooc_fail('Could not encode data.', 500);
  if ($backup && is_file($path)) {
    $bdir = ooc_private_dir() . '/backups';
    if (!is_dir($bdir)) @mkdir($bdir, 0700, true);
    @copy($path, $bdir . '/' . basename($path, '.json') . '-' . date('Ymd-His') . '.json');
    // keep the latest 30 backups per file
    $old = glob($bdir . '/' . basename($path, '.json') . '-*.json') ?: [];
    sort($old);
    while (count($old) > 30) { @unlink(array_shift($old)); }
  }
  $tmp = $path . '.tmp';
  if (file_put_contents($tmp, $json, LOCK_EX) === false || !rename($tmp, $path)) ooc_fail('Could not save. Check folder permissions.', 500);
}

// ---- users ----

function ooc_users_path(): string { return ooc_private_dir() . '/users.json'; }
function ooc_users(): array { $u = ooc_read_json(ooc_users_path(), []); return is_array($u) ? $u : []; }
function ooc_save_users(array $u): void { ooc_write_json(ooc_users_path(), $u, false); @chmod(ooc_users_path(), 0600); }

// ---- rate limiting (per IP, per bucket) ----

function ooc_client_ip(): string { return (string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0'); }

function ooc_rate_limit(string $bucket, int $max, int $windowSeconds): void {
  $dir = ooc_private_dir() . '/rate';
  if (!is_dir($dir)) @mkdir($dir, 0700, true);
  $file = $dir . '/' . $bucket . '-' . hash('sha256', ooc_client_ip()) . '.json';
  $now = time();
  $hits = array_values(array_filter(ooc_read_json($file, []), function ($t) use ($now, $windowSeconds) { return $now - (int) $t < $windowSeconds; }));
  if (count($hits) >= $max) ooc_fail('Too many attempts. Please wait a while and try again.', 429);
  $hits[] = $now;
  file_put_contents($file, json_encode($hits), LOCK_EX);
}

function ooc_clean(string $s, int $max = 2000): string {
  $s = trim(str_replace("\0", '', $s));
  if (function_exists('mb_substr')) return mb_substr($s, 0, $max);
  return substr($s, 0, $max);
}
