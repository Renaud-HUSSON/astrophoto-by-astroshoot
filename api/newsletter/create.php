<?php

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Newsletter.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate newsletter
$newsletter = new Newsletter($db);

//Assign newsletter propertie if param is valid
$newsletter->email = validate_param($_POST['email']);

//Try to create the newsletter
if($newsletter->create()){
  echo json_encode(array(
    'success' => 'Vous êtes maintenant inscris à notre newsletter !'
  ));
}else{
  HTTPStatus(500);
  echo json_encode(array(
    'error' => 'L\'ajout de l\'adresse email à la newsletter a échoué'
  ));
}