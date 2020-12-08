<?php

include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

include_once __DIR__ . '/../../models/CarouselImage.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate CarouselImage
$carousel_image = new CarouselImage($db);

//Get CarouselImage's id
$carousel_image->id = validate_param(isset($_GET['id']) ? $_GET['id'] : '');

$result = $carousel_image->read_single();

$carousel_array = array();
$carousel_array['data'] = array();

if($result->rowCount() != 0){
  $row = $result->fetch();
  
  extract($row);

  array_push($carousel_array['data'], array(
    'id' => $id,
    'image' => $image,
    'src' => $src,
    'titre' => $titre 
  ));

  echo json_encode($carousel_array);
}else{
  HTTPStatus(404);
  echo json_encode(array(
    'error' => 'No images found'
  ));
}