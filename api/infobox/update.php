<?php 

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Infobox.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate an Infobox
$infobox = new Infobox($db);

//Get PUT data
$data = json_decode(file_get_contents('php://input'));

$infobox->id = validate_param($data->id);
$infobox->type = validate_param($data->type);
$infobox->nom = validate_param($data->nom);
$infobox->right_ascension = validate_param($data->right_ascension);
$infobox->declinaison = validate_param($data->declinaison);
$infobox->distance = validate_param($data->distance);
$infobox->magnitude = validate_param($data->magnitude);
$infobox->dimensions_apparentes = validate_param($data->dimensions_apparentes);
$infobox->constellation = validate_param($data->constellation);
$infobox->taille = validate_param($data->taille);
$infobox->designations = validate_param($data->designations);

if($infobox->update()){
  echo json_encode(array(
    'success' => 'L\'infobox a bien été mise à jour !'
  ));
}else{
  HTTPStatus(500);
  echo json_encode(array(
    'error' => 'Une erreur est survenue'
  ));
}


