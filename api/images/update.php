<?php 

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Access-Control-Allow-Method: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../models/Image.php';
include_once __DIR__ . '/../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate an Image
$image = new Image($db);

$image->id = isset($_POST['id']) ? $_POST['id'] : '';
$image->src = isset($_POST['src']) ? $_POST['src'] : '';
$image->categorie = isset($_POST['categorie']) ? $_POST['categorie'] : '';
$image->titre = isset($_POST['titre']) ? $_POST['titre'] : '';
$image->details = isset($_POST['details']) ? $_POST['details'] : '';
$image->description = isset($_POST['description']) ? $_POST['description'] : '';
$image->infobox = isset($_POST['infobox']) ? $_POST['infobox'] : '';

//Try to update the image
if($image->update()){
  echo json_encode(array('success' => 'L\'image a bien été mise à jour !'));
}else{
  echo json_encode(array('error' => 'Une erreur est survenue'));
  HTTPStatus(500);
}