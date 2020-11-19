<?php 

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
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


//Verify there is 10 parmeters
if(sizeof($_POST) != 10){
  HTTPStatus(400);
  echo json_encode(array(
    'error' => 'The API requires 10 parameter'
  ));
  die();
}

$infobox->type = validate_param($_POST['type']);
$infobox->nom = validate_param($_POST['nom']);
$infobox->right_ascension = validate_param($_POST['right_ascension']);
$infobox->declinaison = validate_param($_POST['declinaison']);
$infobox->distance = validate_param($_POST['distance']);
$infobox->magnitude = validate_param($_POST['magnitude']);
$infobox->dimensions_apparentes = validate_param($_POST['dimensions_apparentes']);
$infobox->constellation = validate_param($_POST['constellation']);
$infobox->taille = validate_param($_POST['taille']);
$infobox->designations = validate_param($_POST['designations']);

if($infobox->create()){
  echo json_encode(array(
    'success' => 'L\'infobox a bien été ajoutée !'
  ));
}else{
  HTTPStatus(500);
  echo json_encode(array(
    'error' => 'Une erreur est survenue'
  ));
}


