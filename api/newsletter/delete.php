<?php

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Newsletter.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate newsletter
$newsletter = new Newsletter($db);

//Assign newsletter properties if param is valid
$newsletter->id = isset($_GET['id']) ? strip_tags($_GET['id']) : 'null';
$newsletter->email = isset($_GET['email']) ? strip_tags($_GET['email']) : 'null';

$id_count = $db->query('SELECT * FROM newsletter WHERE id=' . $newsletter->id)->rowCount();
$email_count = $db->query('SELECT * FROM newsletter WHERE email="' . $newsletter->email  . '"')->rowCount();

if($id_count==1 || $email_count==1){
  //Check that the id or the email isn't empty
  if(!empty($newsletter->id) || !empty($newsletter->email)){
    //Try to delete the newsletter
    if($newsletter->delete()){
      echo json_encode(array(
        'success' => 'L\'adresse email a bien été supprimé de notre newsletter !'
      ));
    }else{
      HTTPStatus(500);
      echo json_encode(array(
        'error' => 'Une erreur est survenue'
      ));
    }
  }
}else{
  HTTPStatus(404);
  echo json_encode(array(
    'error' => 'L\'adresse email n\'est pas inscrite à notre newsletter'
  ));
}
