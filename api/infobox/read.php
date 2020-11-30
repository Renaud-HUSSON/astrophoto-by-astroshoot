<?php

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Infobox.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate an Infobox
$infobox = new Infobox($db);

//Verify the API is called without any parameter
if(sizeof($_GET) != 0){
  HTTPStatus(400);
  echo json_encode(array('error' => 'The API requires no parameter'));
  die();
}

//Get infoboxes & number of row from the database
$data = $infobox->read();
$num = $data->rowCount();

$infobox_array = array();
$infobox_array['data'] = array();

//Test if it's not empty
if($num > 0){
  while($row = $data->fetch()){
    extract($row);

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
  }

  echo json_encode($infobox_array);
}else{
  echo json_encode(array(
    'error' => 'Infobox table is empty'
  ));
  HTTPStatus(404);
}
