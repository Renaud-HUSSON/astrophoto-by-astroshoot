<?php 

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Image.php';
include_once __DIR__ . '/../../utils/validate_param.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';

//Instanciate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate an image
$image = new Image($db);

//Verify GET params
$image->id = validate_param($_GET['id']);

//Fetch images
$result = $image->read_single();
$num = $result->rowCount();

$image_arr = array();
$image_arr['data'] = array();

if($num == 1){
  $result_image = $result->fetch();

  extract($result_image);

  $image_item = array(
    'id' => $id,
    'src' => $src,
    'categorie' => $categorie,
    'titre' => $titre,
    'details' => $details,
    'description' => $description,
    'infobox' => $infobox
  );

  array_push($image_arr['data'], $image_item);
  echo json_encode($image_arr);
}else{
  HTTPStatus(404);
  echo json_encode(array('error' => 'Image not found'));
}


