<?php 

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

//Includes
include_once __DIR__ . '/../../config/Database.php';
include_once __DIR__ . '/../../models/Category.php';
include_once __DIR__ . '/../../utils/validate_param.php';
include_once __DIR__ . '/../../utils/HTTPStatus.php';

//Instanciate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate a category
$categorie = new Category($db);

//Verify GET params
$categorie->id = validate_param($_GET['id']);

//Fetch categories
$result = $categorie->read_single();
$num = $result->rowCount();

$categorie_arr = array();
$categorie_arr['data'] = array();

if($num == 1){
  $result_categorie = $result->fetch();
  extract($result_categorie);

  $categorie_item = array(
    'id' => $id,
    'titre' => $titre,
    'nom' => $nom,
    'number' => $number,
    'image' => isset($image) ? $image : '',
    'titre_image' => isset($titre_image) ? $titre_image : '',
    'src' => isset($src) ? $src : ''
  );

  array_push($categorie_arr['data'], $categorie_item);
  echo json_encode($categorie_arr);
}else{
  HTTPStatus(404);
  echo json_encode(array('error' => 'Category not found'));
}


