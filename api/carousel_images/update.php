<?php

include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Access-Control-Allow-Method: PUT');
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

//Get CarouselImage's field
$carousel_image->id = validate_param(isset($_POST['id']) ? $_POST['id'] : '');
$carousel_image->image = validate_param(isset($_POST['image']) ? $_POST['image'] : '');

if($carousel_image->update()){
  echo json_encode(array(
    'success' => 'L\'image a bien été modifiée'
  ));
}else{
  HTTPStatus(500);
  echo json_encode(array(
    'error' => 'L\'image n\'a pas pu être mise à jour'
  ));
}