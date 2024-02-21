<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['textarea'];
    
    $to = "test@test.test";
    $subject = "Новое сообщение с вашего сайта";
    $body = "Имя: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body)) {
        echo "Ваше сообщение успешно отправлено.";
    } else {
        echo "При отправке сообщения произошла ошибка.";
    }
}
?>