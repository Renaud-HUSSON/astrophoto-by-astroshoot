<?php

include_once(__DIR__ . '/../../utils/variables.php');

header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Newsletter.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate newsletter
$newsletter = new Newsletter($db);

//Get newsletter data
$result = $newsletter->read();
$num = $result->rowCount();

$newsletter_arr = array();
$newsletter_arr['data'] = array();

//Verify it is not empty
if($num>0){
  while($row = $result->fetch()){
    extract($row);

    $newsletter_item = array(
      'id' => $id,
      'email' => $email
    );

    array_push($newsletter_arr['data'], $newsletter_item);
  }
  echo json_encode($newsletter_arr);
}else{
  HTTPStatus(404);
  echo json_encode(array(
    'message' => 'Aucune adresse dans la newsletter n\'a été trouvée'
  ));
}
