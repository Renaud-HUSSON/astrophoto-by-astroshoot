<?php

include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once __DIR__ . '/../../models/CarouselImage.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate CarouselImage
$carousel_image = new CarouselImage($db);

//Get CarouselImage's image
$carousel_image->image = validate_param($_POST['image']);

if($carousel_image->create()){
  echo json_encode(array('success' => 'L\'image a bien été ajoutée au carousel'));
}else{
  HTTPStatus(500);
  echo json_encode(array('error' => 'L\'image n\'a pas pu être ajoutée au carousel'));
}