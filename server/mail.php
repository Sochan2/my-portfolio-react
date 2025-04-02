<?php

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require '../vendor/autoload.php'; // PHPMailerとdotenvのautoload
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

// .env ファイルの読み込み
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

if(isset($_POST["submit"])){
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);
  $project_type = htmlspecialchars($_POST['project_type']);
  $budget = htmlspecialchars($_POST['budget']);
  $deadline = htmlspecialchars($_POST['deadline']);

  $mail = new PHPMailer(true);

  try {
      // Server settings
      $mail->isSMTP();
      $mail->Host       = $_ENV['SMTP_HOST'];
      $mail->SMTPAuth   = true;
      $mail->Username   = $_ENV['SMTP_USERNAME'];
      $mail->Password   = $_ENV['SMTP_PASSWORD'];
      $mail->SMTPSecure = $_ENV['SMTP_ENCRYPTION'];
      $mail->Port       = $_ENV['SMTP_PORT'];

      // Recipients
      $mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
      $mail->addAddress($_ENV['MAIL_TO_ADDRESS'], $_ENV['MAIL_TO_NAME']);

      // Content
      $mail->isHTML(true);
      $mail->Subject = 'This is the contact to Soki';
      $mail->Body    = "<h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> {$name}</p>
          <p><strong>Email:</strong> {$email}</p>
          <p><strong>Subject:</strong> {$subject}</p>
          <p><strong>Message:</strong> {$message}</p>
          <p><strong>Project Type:</strong> {$project_type}</p>
          <p><strong>Budget:</strong> {$budget}</p>
          <p><strong>Deadline:</strong> {$deadline}</p>";

      if ($mail->send()) {
          $_SESSION['status'] = "Thank you for contacting Soki";
          header("Location: {$_SERVER['HTTP_REFERER']}");
          exit();
      } else {
          $_SESSION['status'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
          header('Location: index.html');
          exit();
      }

  } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
} else {
  header('Location: index.html');
  exit();
}
