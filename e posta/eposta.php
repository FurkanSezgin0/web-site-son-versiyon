<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini al
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // E-posta ayarları
    $to = "furkansezgin69@.com"; 
    $subject = "Yeni Mesaj - $name";
    $headers = "From: $email" . "\r\n" . 
               "Reply-To: $email" . "\r\n" . 
               "X-Mailer: PHP/" . phpversion();

    // Mesaj içeriği
    $body = "Gönderen: $name\n";
    $body .= "E-posta: $email\n\n";
    $body .= "Mesaj:\n$message";

    // E-posta gönder
    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajınız başarıyla gönderildi!";
    } else {
        echo "Mesaj gönderme sırasında bir hata oluştu.";
    }
}
?>
