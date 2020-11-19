<?php

//Headers
header('Access-Control-Allow-Origin: localhost:3000');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Infobox.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instanciate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate an infobox
$infobox = new Infobox($db);

//Verify that the API is called with one parameter
if(sizeof($_GET) != 1){
  HTTPStatus(400);
  echo json_encode(array(
    'error' => 'The API requires one parameter'
  ));
  die();
}

//Verify that the parameter is 'id' and assign infobox id
$infobox->id = validate_param($_GET['id']);

if($infobox->delete()){
  echo json_encode(array(
    'success' => 'L\'infobox a bien été supprimée !'
  ));
}else{
  HTTPStatus(500);
  echo json_encode(array(
    'error' => 'Une erreur est survenue'
  ));
}
