<?php

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

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

    array_push($materiel_arr['data'], $materiel_item);
  }
  echo json_encode($materiel_arr);
}else{
  HTTPStatus(404);
  echo json_encode(array(
    'message' => 'Aucun matériel trouvé'
  ));
}

