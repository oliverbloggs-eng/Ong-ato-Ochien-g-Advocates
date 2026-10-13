<?php
// Save listings / blog posts. POST JSON { type: properties | blog, data: {...} }
require __DIR__ . '/_lib.php';
ooc_require_post();
$user = ooc_require_login();
ooc_require_csrf();

$body = ooc_body();
$type = (string) ($body['type'] ?? '');
$data = $body['data'] ?? null;
if (!is_array($data)) ooc_fail('Nothing to save.');

$s = function ($v, $max = 300) { return ooc_clean(is_scalar($v) ? (string) $v : '', $max); };
$photoOk = function ($p) { return $p === '' || preg_match('#^assets/(uploads/)?[A-Za-z0-9._/-]+\.(jpe?g|png|webp)$#', $p); };

if ($type === 'properties') {
  $types = ['Land', 'Residential', 'Apartment', 'Commercial', 'Vehicle'];
  $statuses = ['Draft', 'Published', 'Sold'];
  $items = [];
  foreach (($data['items'] ?? []) as $it) {
    if (!is_array($it)) continue;
    $row = [
      'title'       => $s($it['title'] ?? '', 160),
      'location'    => $s($it['location'] ?? '', 160),
      'type'        => in_array($it['type'] ?? '', $types, true) ? $it['type'] : 'Land',
      'price'       => max(0, (int) ($it['price'] ?? 0)),
      'size'        => $s($it['size'] ?? '', 160),
      'status'      => in_array($it['status'] ?? '', $statuses, true) ? $it['status'] : 'Draft',
      'description' => $s($it['description'] ?? '', 4000),
      'photo'       => $s($it['photo'] ?? '', 200),
      'updated'     => preg_match('/^\d{4}-\d{2}-\d{2}$/', (string) ($it['updated'] ?? '')) ? $it['updated'] : date('Y-m-d'),
    ];
    if ($row['title'] === '' || !$photoOk($row['photo'])) continue;
    $items[] = $row;
  }
  if (count($items) > 500) ooc_fail('Too many listings.');
  ooc_write_json(ooc_content_dir() . '/properties.json', ['items' => $items, 'savedBy' => $user, 'savedAt' => date('c')]);
  ooc_json(['ok' => true, 'count' => count($items)]);
}

if ($type === 'blog') {
  $posts = [];
  foreach (($data['posts'] ?? []) as $p) {
    if (!is_array($p)) continue;
    $notes = [];
    foreach ((array) ($p['notes'] ?? []) as $n) { $n = $s($n, 600); if ($n !== '') $notes[] = $n; }
    $row = [
      'title'   => $s($p['title'] ?? '', 200),
      'date'    => preg_match('/^\d{4}-\d{2}-\d{2}$/', (string) ($p['date'] ?? '')) ? $p['date'] : date('Y-m-d'),
      'author'  => $s($p['author'] ?? 'OOC Advocates', 120),
      'role'    => $s($p['role'] ?? '', 120),
      'excerpt' => $s($p['excerpt'] ?? '', 1200),
      'body'    => $s($p['body'] ?? '', 120000),
      'notes'   => $notes,
    ];
    if ($row['title'] === '') continue;
    $posts[] = $row;
  }
  if (count($posts) > 500) ooc_fail('Too many posts.');
  ooc_write_json(ooc_content_dir() . '/blog.json', ['posts' => $posts, 'savedBy' => $user, 'savedAt' => date('c')]);
  ooc_json(['ok' => true, 'count' => count($posts)]);
}

ooc_fail('Unknown content type.');
