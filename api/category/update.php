<?php 

//Headers
header('Access-Control-Allow-Origin: localhost:3000');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../models/Category.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate a new Category
$category = new Category($db);

//Get data
$data = json_decode(file_get_contents('php://input'));

//Verify params integrity
$category->id = validate_param($data->id);
$category->titre = validate_param($data->titre);
$category->nom = validate_param($data->nom);

//Try to update the category
if($category->update()){
  echo json_encode(array('success' => 'La catégorie a bien été mise à jour !'));
}else{
  echo json_encode(array('error' => 'Une erreur est survenur'));
  HTTPStatus(500);
}