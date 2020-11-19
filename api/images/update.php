<?php 

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../models/Image.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate an Image
$image = new Image($db);

//Verify params integrity & assign them to image object if valid
$updates = json_decode(file_get_contents("php://input"));

$image->id = validate_param($updates->id);
$image->src = validate_param($updates->src);
$image->categorie = validate_param($updates->categorie);
$image->titre = validate_param($updates->titre);
$image->details = validate_param($updates->details);
$image->description = validate_param($updates->description);
$image->infobox = validate_param($updates->infobox);

//Try to update the image
if($image->update()){
  echo json_encode(array('success' => 'L\'image a bien été mise à jour !'));
}else{
  echo json_encode(array('error' => 'Une erreur est survenue'));
  HTTPStatus(500);
}