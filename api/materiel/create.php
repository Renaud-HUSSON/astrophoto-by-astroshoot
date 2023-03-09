<?php

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Materiel.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate materiel
$materiel = new Materiel($db);

//Verify params
if(sizeof($_POST) != 2){
  HTTPStatus(400);
  echo json_encode(array(
    'error' => '2 parameters are required'
  ));
  die();
}

//Assign materiel properties if params are valid
$materiel->label = validate_param($_POST['label']);
$materiel->href = validate_param($_POST['href']);

//Try to create the materiel
if($materiel->create()){
  echo json_encode(array(
    'success' => 'Le matériel a bien été ajouté !'
  ));
}else{
  HTTPStatus(500);
  echo json_encode(array(
    'error' => 'Une erreur est survenue'
  ));
}