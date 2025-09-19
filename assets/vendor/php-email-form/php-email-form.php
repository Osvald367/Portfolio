<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // SMTP config
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'osvaldadoko36@gmail.com';
    $mail->Password   = 'oibg wnrg thnl huae'; // mot de passe d’application Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
    $mail->Port       = 587;

    // Expéditeur & destinataire
    $mail->setFrom('osvaldadoko36@gmail.com', 'Formulaire Portfolio');
    $mail->addAddress('osvaldadoko36@gmail.com'); // où tu reçois les messages
    $mail->addReplyTo(htmlspecialchars($_POST['email']), htmlspecialchars($_POST['name']));

    // Contenu
    $mail->isHTML(true);
    $mail->Subject = htmlspecialchars($_POST['subject']);
    $mail->Body    = nl2br(htmlspecialchars($_POST['message']));
    $mail->AltBody = htmlspecialchars($_POST['message']);

    $mail->send();
    echo 'OK'; // important : le JS attend "OK"
} catch (Exception $e) {
    echo "Erreur : {$mail->ErrorInfo}";
}
?>
