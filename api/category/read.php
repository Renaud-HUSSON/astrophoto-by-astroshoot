<?php

//Headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

//Includes
include_once '../../config/Database.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../models/Category.php';

//Error if there is params
if(!empty($_GET)){
  HTTPStatus(400);
  echo json_encode(array('message' => 'No parameters required'));
  die();
}

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate a category
$category = new Category($db);

//Fetch category
$result = $category->read();
$num = $result->rowCount();

$categories = array();
$categories['data'] = array();

//Check if response is empty
if($num > 0){
  while($row = $result->fetch()){
    extract($row);
    
    $category_item = array(
      'id' => $id,
      'titre' => $titre,
      'nom' => $nom,
      'number' => $number
    );

    array_push($categories['data'], $category_item);
  }

  echo json_encode($categories);
}else{
  HTTPStatus(404);
  echo json_encode(array('message' => 'No categories found'));
}


