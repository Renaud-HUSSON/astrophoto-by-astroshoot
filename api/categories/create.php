<?php

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Category.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate a new Category
$category = new Category($db);

//Check if params are valid
$category->titre = validate_param($_POST['titre']);
$category->nom = validate_param($_POST['nom']);

if($category->create()){
  echo json_encode(array('success' => 'La catégorie a bien été ajoutée'));
}else{
  echo json_encode(array('error' => 'Une erreur est survenue'));
}