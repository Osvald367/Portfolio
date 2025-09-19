<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; // adapte le chemin si nécessaire

$mail = new PHPMailer(true);

try {
    // ⚙️ Config SMTP
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'osvaldadoko36@gmail.com'; // ton Gmail
    $mail->Password   = 'oibg wnrg thnl huae';     // ton mot de passe d’application
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // 📧 Expéditeur et destinataire
    $mail->setFrom('osvaldadoko36@gmail.com', 'Formulaire Portfolio');
    $mail->addAddress('osvaldadoko36@gmail.com'); // tu reçois les messages ici
    $mail->addReplyTo($_POST['email'], $_POST['name']); // pour pouvoir répondre au client

    // 📝 Contenu du mail
    $mail->isHTML(true);
    $mail->Subject = htmlspecialchars($_POST['subject']);
    $mail->Body    = nl2br(htmlspecialchars($_POST['message']));
    $mail->AltBody = htmlspecialchars($_POST['message']);

    $mail->send();
    echo 'OK'; // important : BootstrapMade attend "OK"
} catch (Exception $e) {
    echo "Erreur : {$mail->ErrorInfo}";
}
