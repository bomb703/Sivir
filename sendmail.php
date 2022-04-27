<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // От кого
    $mail->setFrom('form@sivirehitus.ee');
    // Кому
    $mail->addAddress('bomb.stas@gmail.com');
    // Тема письма
    $mail->Subject = 'Обратная связь';


    $body = '<h1>Встречайте супер письмо!<h1>';

    if(trim(!empty($_POST['cont-name']))){
        $body.='<p><strong>Имя:</storng> '.$POST['cont-name'].'</p>';
    }

    if(trim(!empty($_POST['cont-tel']))){
        $body.='<p><strong>Телефон:</storng> '.$POST['cont-tel'].'</p>';
    }

    if(trim(!empty($_POST['cont-email']))){
        $body.='<p><strong>Телефон:</storng> '.$POST['cont-email'].'</p>';
    }

    if(trim(!empty($_POST['cont-textarea']))){
        $body.='<p><strong>Телефон:</storng> '.$POST['cont-textarea'].'</p>';
    }


    $mail->Body = $body;

    // Отправляет
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

    ?>