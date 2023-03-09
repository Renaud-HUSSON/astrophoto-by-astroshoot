<?php 

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Newsletter.php';
include_once __DIR__ . '/../../utils/validate_param.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';

//Instanciate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate a newsletter
$newsletter = new Newsletter($db);

//Verify GET params
$newsletter->id = validate_param($_GET['id']);

//Fetch newsletters
$result = $newsletter->read_single();
$num = $result->rowCount();

$newsletter_arr = array();
$newsletter_arr['data'] = array();

if($num == 1){
  $result_newsletter = $result->fetch();
  extract($result_newsletter);

  $newsletter_item = array(
    'id' => $id,
    'email' => $email,
  );

  array_push($newsletter_arr['data'], $newsletter_item);
  echo json_encode($newsletter_arr);
}else{
  HTTPStatus(404);
  echo json_encode(array('error' => 'L\'adresse email n\'est pas inscrite à notre newsletter'));
}


