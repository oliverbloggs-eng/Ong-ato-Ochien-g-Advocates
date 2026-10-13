<?php
// Photo upload. POST multipart "photo". Re-encodes the image so nothing hidden survives.
require __DIR__ . '/_lib.php';
ooc_require_post();
ooc_require_login();
ooc_require_csrf();

if (empty($_FILES['photo']) || !is_uploaded_file($_FILES['photo']['tmp_name'])) ooc_fail('No photo received.');
if ($_FILES['photo']['size'] > 12 * 1024 * 1024) ooc_fail('Photo is larger than 12 MB.');

$info = @getimagesize($_FILES['photo']['tmp_name']);
if (!$info || !in_array($info[2], [IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_WEBP], true)) ooc_fail('Please upload a JPG, PNG or WebP image.');
if (!function_exists('imagecreatetruecolor')) ooc_fail('Image processing (GD) is not enabled on the server.', 500);

$src = null;
if ($info[2] === IMAGETYPE_JPEG) $src = @imagecreatefromjpeg($_FILES['photo']['tmp_name']);
if ($info[2] === IMAGETYPE_PNG)  $src = @imagecreatefrompng($_FILES['photo']['tmp_name']);
if ($info[2] === IMAGETYPE_WEBP && function_exists('imagecreatefromwebp')) $src = @imagecreatefromwebp($_FILES['photo']['tmp_name']);
if (!$src) ooc_fail('That image could not be read.');

$w = imagesx($src); $h = imagesy($src);
$scale = min(1, 1600 / max($w, $h));
$nw = (int) round($w * $scale); $nh = (int) round($h * $scale);
$dst = imagecreatetruecolor($nw, $nh);
imagefill($dst, 0, 0, imagecolorallocate($dst, 255, 255, 255));
imagecopyresampled($dst, $src, 0, 0, 0, 0, $nw, $nh, $w, $h);

$dir = dirname(__DIR__) . '/assets/uploads';
if (!is_dir($dir)) @mkdir($dir, 0755, true);
$name = date('Ymd') . '-' . bin2hex(random_bytes(6)) . '.jpg';
if (!imagejpeg($dst, $dir . '/' . $name, 82)) ooc_fail('Could not save the photo.', 500);
imagedestroy($src); imagedestroy($dst);

ooc_json(['ok' => true, 'path' => 'assets/uploads/' . $name]);
