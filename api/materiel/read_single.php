<?php 

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Materiel.php';
include_once '../../utils/validate_param.php';
include_once '../../utils/HTTPStatus.php';

//Instanciate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate a materiel
$categorie = new Materiel($db);

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
    'label' => $label,
    'href' => $href
  );

  array_push($categorie_arr['data'], $categorie_item);
  echo json_encode($categorie_arr);
}else{
  HTTPStatus(404);
  echo json_encode(array('error' => 'Category not found'));
}


