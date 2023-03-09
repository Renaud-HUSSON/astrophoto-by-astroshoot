<?php

include_once(__DIR__ . "/../../utils/variables.php");

header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Newsletter.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../utils/validate_param.php';
include_once __DIR__ . '/../../utils/send_mail.php';

//Instanciate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate a newsletter to get all emails
$newsletter = new Newsletter($db);

if(sizeof($_POST) != 2){
  HTTPStatus(400);
  echo json_encode(array(
    'error' => '2 parameters are required'
  ));
  die();
}

$message = validate_param($_POST['message']);
$subject = validate_param($_POST['subject']);

$result = $newsletter->read();
$destinataires = array();

if($result->rowCOunt() != 0){
  while($row = $result->fetch()){
    extract($row);
    
    array_push($destinataires, $email);
  }

  send_mail($message, $destinataires, $subject);
}else{
  HTTPStatus(404);
  echo json_encode(array(
    'error' => 'Aucune adresse dans la newsletter n\'a été trouvée'
  ));
}
