<?php 

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Image.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate & Connnect DB
$database = new Database();
$db = $database->connect();

//Instantiate Image Object
$image = new Image($db);

//Verify GET params
if(sizeof($_GET) != 1){
  HTTPStatus(400);
  echo json_encode(array('error' => 'The API requires no parameter'));
  die();
}
$image->categorie = validate_param($_GET['category']);

//Fetch images
$result = $image->read();
$num = $result->rowCount();

$images_arr = array();
$images_arr['data'] = array();

//Check if there is any image
if($num > 0){
  //Loop through rows
  while($row = $result->fetch()){
    extract($row);

    $image_item = array(
      'id' => $id,
      'src' => $src,
      'categorie' => $categorie,
      'titre' => $titre,
      'details' => $details,
      'description' => $infobox
    );

    array_push($images_arr['data'], $image_item);
  }

  echo json_encode($images_arr);
}else{
  HTTPStatus(404);
  echo json_encode(array('error' => 'No images found'));
}

