<?php

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Infobox.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate an Infobox
$infobox = new Infobox($db);

//Verify the API is called with only 1 parameter
if(sizeof($_GET) != 1){
  HTTPStatus(400);
  echo json_encode(array(
    'error' => 'The API requires 1 parameter'
  ));
  die();
}

//Verify the API is called with id parameter
$infobox->nom = validate_param($_GET['nom']);

//Get infobox & number of row from the database
$data = $infobox->read_single();
$num = $data->rowCount();

$infobox_array = array();
$infobox_array['data'] = array();

//Check if data isn't empty
if($num == 1){
  $result = $data->fetch();

  extract($result);

  $infobox_item = array(
    'id' => $id,
    'type' => $type,
    'nom' => $nom,
    'right_ascension' => $right_ascension,
    'declinaison' => $declinaison,
    'distance' => $distance,
    'magnitude' => $magnitude,
    'dimensions_apparentes' => $dimensions_apparentes,
    'constellation' => $constellation,
    'taille' => $taille,
    'designations' => $designations
  );

  array_push($infobox_array['data'], $infobox_item);

  echo json_encode($infobox_array);
}else{
  HTTPStatus(404);
  echo json_encode(array(
    'error' => 'Infobox introuvable'
  ));
}