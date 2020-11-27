<?php 

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
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

//Verify params integrity
$category->id = strip_tags(isset($_POST['id']) ? $_POST['id'] : '');
$category->titre = strip_tags(isset($_POST['titre']) ? $_POST['titre'] : '');
$category->nom = strip_tags(isset($_POST['nom']) ? $_POST['nom'] : '');
$category->image = strip_tags(isset($_POST['image']) ? $_POST['image'] : '');
$oldname = $_POST['oldname'];

//Try to update the category
if($category->update($oldname)){
  echo json_encode(array('success' => 'La catégorie a bien été mise à jour !'));
}else{
  echo json_encode(array('error' => 'Une erreur est survenue'));
  HTTPStatus(500);
}