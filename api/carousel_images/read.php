<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

include_once '../../models/CarouselImage.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../config/Database.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate CarouselImage
$carousel_image = new CarouselImage($db);

$result = $carousel_image->read();

$carousel_array = array();
$carousel_array['data'] = array();

if($result->rowCount() != 0){
  while($row = $result->fetch()){
    extract($row);

    $carousel_item = array(
      'id' => $id,
      'image' => $image,
      'src' => $src,
      'titre' => $titre 
    );

    array_push($carousel_array['data'], $carousel_item);
  }
  
  echo json_encode($carousel_array);
}else{
  HTTPStatus(404);
  echo json_encode(array(
    'error' => 'No images found'
  ));
}