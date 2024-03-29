<?php 

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Category.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';
include_once __DIR__ . '/../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate a new Category
$category = new Category($db);

//Verify params integrity
$category->id = validate_param($_GET['id']);

$get_delete_query = 'SELECT * FROM categories WHERE id=' . $category->id;
$result = $db->query($get_delete_query);

if($result->rowCount() != 0){
  $data = $result->fetch();
  $deleted = $data['nom'];
}else{
  echo json_encode(array('error' => 'ah merde'));
}

if($category->delete()){
  rmdir('../../images/' . $deleted);
  echo json_encode(array('success' => 'La catégorie a bien été supprimée'));
}else{
  HTTPStatus(500);
  echo json_encode(array('error' => 'Une erreur est survenue'));
}