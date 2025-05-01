<?php
// Set header to allow CORS and accept JSON input
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

// Get raw POST body and decode JSON
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
$requiredFields = ['name', 'email', 'service', 'message', 'from', 'to', 'currency', 'completionDate'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

if (!empty($missingFields)) {
    http_response_code(400);
    echo json_encode(["message" => "Missing required fields: " . implode(', ', $missingFields)]);
    exit;
}

// Email content
$to = "marko@benis.studio";  // Change to your email
$subject = "New Project Wizard Submission from " . htmlspecialchars($data['name']);
$headers = "From: " . htmlspecialchars($data['email']) . "\r\n";
$headers .= "Reply-To: " . htmlspecialchars($data['email']) . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

$body = <<<EOD
Name or Company Name: {$data['name']}
Email: {$data['email']}
Service: {$data['service']}
Message: {$data['message']}
Budget From: {$data['from']}
Budget To: {$data['to']}
Currency: {$data['currency']}
Completion Date: {$data['completionDate']}
EOD;

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Failed to send email"]);
}
?>
