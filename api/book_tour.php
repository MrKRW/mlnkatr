<?php
/**
 * Stub handler for the Booking Request form.
 * Front-end posts JSON to this endpoint via fetch(); wire up booking/CRM logic here.
 * Expected POST fields: name, email, tour, date, travelers, notes
 */
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
if (empty($data['name']) || empty($data['email']) || empty($data['tour'])) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Missing required fields.']);
    exit;
}
// TODO: create booking record, send confirmation email, notify sales team
echo json_encode(['success' => true, 'message' => 'Booking request received.']);
