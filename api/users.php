<?php
// Admin users. POST JSON { action: list | add | remove | password }
require __DIR__ . '/_lib.php';
ooc_require_post();
$me = ooc_require_login();
ooc_require_csrf();

$body = ooc_body();
$action = (string) ($body['action'] ?? 'list');
$users = ooc_users();
$list = function ($users) { $out = []; foreach ($users as $n => $u) $out[] = ['username' => $n, 'created' => $u['created'] ?? '']; return $out; };

if ($action === 'list') ooc_json(['ok' => true, 'users' => $list($users), 'me' => $me]);

if ($action === 'add') {
  $name = strtolower(ooc_clean((string) ($body['username'] ?? ''), 40));
  $pass = (string) ($body['password'] ?? '');
  if (!preg_match('/^[a-z0-9._-]{3,40}$/', $name)) ooc_fail('Username: 3 to 40 letters, numbers, dots or dashes.');
  if (isset($users[$name])) ooc_fail('That username already exists.');
  if (strlen($pass) < 10) ooc_fail('Password must be at least 10 characters.');
  $users[$name] = ['hash' => password_hash($pass, PASSWORD_DEFAULT), 'created' => date('c'), 'by' => $me];
  ooc_save_users($users);
  ooc_json(['ok' => true, 'users' => $list($users), 'me' => $me]);
}

if ($action === 'remove') {
  $name = strtolower((string) ($body['username'] ?? ''));
  if ($name === $me) ooc_fail('You cannot remove your own account.');
  if (!isset($users[$name])) ooc_fail('User not found.');
  unset($users[$name]);
  ooc_save_users($users);
  ooc_json(['ok' => true, 'users' => $list($users), 'me' => $me]);
}

if ($action === 'password') {
  $cur = (string) ($body['current'] ?? '');
  $new = (string) ($body['password'] ?? '');
  if (!password_verify($cur, $users[$me]['hash'] ?? '')) ooc_fail('Current password is incorrect.');
  if (strlen($new) < 10) ooc_fail('New password must be at least 10 characters.');
  $users[$me]['hash'] = password_hash($new, PASSWORD_DEFAULT);
  ooc_save_users($users);
  ooc_json(['ok' => true]);
}

ooc_fail('Unknown action.');
