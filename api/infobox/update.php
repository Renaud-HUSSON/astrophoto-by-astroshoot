<?php 

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
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

$infobox->id = isset($_POST['id']) ? $_POST['id'] : '';
$infobox->type = isset($_POST['type']) ? $_POST['type'] : '';
$infobox->nom = isset($_POST['nom']) ? $_POST['nom'] : '';
$infobox->right_ascension = isset($_POST['right_ascension']) ? $_POST['right_ascension'] : '';
$infobox->declinaison = isset($_POST['declinaison']) ? $_POST['declinaison'] : '';
$infobox->distance = isset($_POST['distance']) ? $_POST['distance'] : '';
$infobox->magnitude = isset($_POST['magnitude']) ? $_POST['magnitude'] : '';
$infobox->dimensions_apparentes = isset($_POST['dimensions_apparentes']) ? $_POST['dimensions_apparentes'] : '';
$infobox->constellation = isset($_POST['constellation']) ? $_POST['constellation'] : '';
$infobox->taille = isset($_POST['taille']) ? $_POST['taille'] : '';
$infobox->designations = isset($_POST['designations']) ? $_POST['designations'] : '';

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


