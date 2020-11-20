<?php

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Materiel.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate materiel
$materiel = new Materiel($db);

//Verify no parameters are passed
if(sizeof($_GET) != 0){
  HTTPStatus(400);
  echo json_encode(array(
    'error' => 'Aucun paramètre n\'est requis'
  ));
  die();
}

//Get materiel data
$result = $materiel->read();
$num = $result->rowCount();

$materiel_arr = array();
$materiel_arr['data'] = array();

//Verify it is not empty
if($num>0){
  while($row = $result->fetch()){
    extract($row);

    $materiel_item = array(
      'id' => $id,
      'label' => $label,
      'href' => $href
    );

    array_push($materiel_arr, $materiel_item);
  }
  echo json_encode($materiel_arr);
}else{
  HTTPStatus(500);
  echo json_encode(array(
    'message' => 'Aucun matériel trouvé'
  ));
}

