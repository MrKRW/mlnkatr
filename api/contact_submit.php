<?php
/**
 * Stub handler for the Contact Us form.
 * Front-end posts JSON to this endpoint via fetch(); wire up mail/DB logic here.
 * Expected POST fields: name, email, phone, tour, message
 */
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Missing required fields.']);
    exit;
}
// TODO: send email / save to database / push to CRM
echo json_encode(['success' => true, 'message' => 'Message received.']);
