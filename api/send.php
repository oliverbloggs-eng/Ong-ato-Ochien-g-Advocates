<?php
// Website forms → email to info@oocadvocates.africa.
// POST JSON { kind: contact | enquiry, name, phone, email, message, matter?, property?, website (honeypot) }
require __DIR__ . '/_lib.php';
ooc_require_post();
header('X-Frame-Options: DENY');

$b = ooc_body();

// Bots fill the hidden "website" field; pretend success and drop it.
if (!empty($b['website'])) ooc_json(['ok' => true]);

ooc_rate_limit('send', 5, 3600); // 5 messages per hour per visitor

$kind     = in_array($b['kind'] ?? '', ['contact', 'enquiry'], true) ? $b['kind'] : 'contact';
$name     = ooc_clean((string) ($b['name'] ?? ''), 120);
$phone    = ooc_clean((string) ($b['phone'] ?? ''), 40);
$email    = ooc_clean((string) ($b['email'] ?? ''), 160);
$message  = ooc_clean((string) ($b['message'] ?? ''), 5000);
$matter   = ooc_clean((string) ($b['matter'] ?? ''), 120);
$property = ooc_clean((string) ($b['property'] ?? ''), 200);

if ($name === '' || $phone === '') ooc_fail('Please add your name and phone number.');
if (!preg_match('/^[0-9+()\s.-]{7,20}$/', $phone)) ooc_fail('Please check the phone number.');
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) ooc_fail('Please check the email address.');

$line = function ($s) { return str_replace(["\r", "\n"], ' ', $s); }; // no header injection
$subject = $kind === 'enquiry'
  ? 'Property enquiry: ' . ($property !== '' ? $property : 'listing')
  : 'Website enquiry' . ($matter !== '' ? ': ' . $matter : '');

$text  = ($kind === 'enquiry' ? "New property enquiry from the website\n\n" : "New enquiry from the website contact form\n\n");
if ($property !== '') $text .= "Property: $property\n";
if ($matter !== '')   $text .= "Matter type: $matter\n";
$text .= "Name: $name\nPhone: $phone\n";
if ($email !== '')    $text .= "Email: $email\n";
$text .= "\nMessage:\n" . ($message !== '' ? $message : '(none)') . "\n\n";
$text .= "Sent " . date('j M Y, H:i') . " from " . ooc_client_ip() . "\n";

$headers = [
  'From: OOC Website <' . OOC_MAIL_FROM . '>',
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: OOC-Website',
];
if ($email !== '') $headers[] = 'Reply-To: ' . $line($name) . ' <' . $line($email) . '>';

$ok = @mail(OOC_MAIL_TO, '=?UTF-8?B?' . base64_encode($line($subject)) . '?=', $text, implode("\r\n", $headers), '-f' . OOC_MAIL_FROM);
if (!$ok) ooc_fail('Your message could not be sent. Please call +254 716 063629 or email info@oocadvocates.africa.', 500);

ooc_json(['ok' => true]);
