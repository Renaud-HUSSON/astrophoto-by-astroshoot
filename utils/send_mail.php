<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';

function send_mail($message, $destinataires, $subject){
  // Instantiation and passing `true` enables exceptions
  $mail = new PHPMailer(true);
  
  try {
      //Server settings
      // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     
      $mail->isSMTP();                                            
      $mail->Host       = EMAILHOST;                    
      $mail->SMTPAuth   = true;                                   
      $mail->Username   = EMAIL;                     
      $mail->Password   = EMAILPASSWORD;                              
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
      $mail->Port       = 465;     
      $mail->SMTPSecure = 'ssl';
      $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
      );                              
  
      //Recipients
      $mail->setFrom(EMAIL, 'Astrophoto by Astroshoot');
      
      for($i = 0; $i<sizeof($destinataires); $i++){
        $mail->addAddress($destinataires[$i]);               
      }
  
      // Content
      $mail->isHTML(true);
      $mail->CharSet = "UTF-8"; 
      $mail->Subject = $subject;
      $mail->Body    = nl2br($message);
      $mail->AltBody = nl2br($message);
  
      if($mail->send()){
        echo json_encode(array(
          'success' => 'Le mail a bien été envoyé'
        ));
      }else{
        echo json_encode(array(
          'error' => 'Erreur lors de l\'envoie du mail'
        ));
      }
  } catch (Exception $e) {
      echo json_encode(array(
        'error' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo
      ));
  }
}