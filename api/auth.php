<?php
// Admin login. POST JSON { action: me | setup | login | logout }
require __DIR__ . '/_lib.php';
ooc_session();
header('X-Frame-Options: DENY');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$body = $method === 'POST' ? ooc_body() : [];
$action = (string) ($body['action'] ?? ($_GET['action'] ?? 'me'));
$users = ooc_users();

if ($action === 'me') {
  ooc_json(['ok' => true, 'user' => $_SESSION['user'] ?? null, 'csrf' => $_SESSION['csrf'], 'needsSetup' => count($users) === 0]);
}

ooc_require_post();
ooc_require_csrf();

if ($action === 'setup') {
  // Only works while no admin exists. Creates the first account.
  if (count($users) > 0) ooc_fail('Setup is already complete.', 403);
  $name = strtolower(ooc_clean((string) ($body['username'] ?? ''), 40));
  $pass = (string) ($body['password'] ?? '');
  if (!preg_match('/^[a-z0-9._-]{3,40}$/', $name)) ooc_fail('Username: 3 to 40 letters, numbers, dots or dashes.');
  if (strlen($pass) < 10) ooc_fail('Password must be at least 10 characters.');
  ooc_save_users([$name => ['hash' => password_hash($pass, PASSWORD_DEFAULT), 'created' => date('c')]]);
  session_regenerate_id(true);
  $_SESSION['user'] = $name; $_SESSION['seen'] = time();
  ooc_json(['ok' => true, 'user' => $name, 'csrf' => $_SESSION['csrf']]);
}

if ($action === 'login') {
  ooc_rate_limit('login', 8, 900); // 8 tries per 15 minutes per IP
  $name = strtolower(ooc_clean((string) ($body['username'] ?? ''), 40));
  $pass = (string) ($body['password'] ?? '');
  $hash = $users[$name]['hash'] ?? '$2y$10$invalidinvalidinvalidinvalidinvalidinvalidinvalidinv';
  if (!password_verify($pass, $hash) || !isset($users[$name])) {
    usleep(400000);
    ooc_fail('Incorrect username or password.', 401);
  }
  if (password_needs_rehash($hash, PASSWORD_DEFAULT)) {
    $users[$name]['hash'] = password_hash($pass, PASSWORD_DEFAULT);
    ooc_save_users($users);
  }
  session_regenerate_id(true);
  $_SESSION['user'] = $name; $_SESSION['seen'] = time();
  ooc_json(['ok' => true, 'user' => $name, 'csrf' => $_SESSION['csrf']]);
}

if ($action === 'logout') {
  $_SESSION = [];
  session_destroy();
  ooc_json(['ok' => true]);
}

ooc_fail('Unknown action.');
