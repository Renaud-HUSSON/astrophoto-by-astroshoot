<?php

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Access-Control-Allow-Method: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Materiel.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate materiel
$materiel = new Materiel($db);

//Assign materiel properties if params are valid
$materiel->id = isset($_POST['id']) ? $_POST['id'] : '';
$materiel->label = isset($_POST['label']) ? $_POST['label'] : '';
$materiel->href = isset($_POST['href']) ? $_POST['href'] : '';

//Try to update the materiel
if($materiel->update()){
  echo json_encode(array(
    'success' => 'Le matériel a bien mis à jour !'
  ));
}else{
  HTTPStatus(500);
  echo json_encode(array(
    'error' => 'Une erreur est survenue'
  ));
}