<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from the form
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $adults = $_POST['adults'];
    $minors = $_POST['minors'];

    // Format the data
    $data = "Name: $username, Email: $email, Phone: $phone, Adults: $adults, Minors: $minors\n";

    // Save to a file (ensure the server has write permissions)
    file_put_contents('log.txt', $data, FILE_APPEND);

    echo "Information saved successfully!";
}
?>