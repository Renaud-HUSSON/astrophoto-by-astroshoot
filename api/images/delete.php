<?php 

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../models/Image.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate an Image
$image = new Image($db);

//Verify params integrity & assign them to image object if valid
$image->id = validate_param($_GET['id']);
$image->categorie = validate_param($_GET['categorie']);

//Fetch image src from db
$delete_query = 'SELECT src FROM images WHERE id=' . $image->id;

//Fetch the path of the image
if($image_data = $db->query($delete_query)){
  $image_delete = $image_data->fetch();

  //Verify the result isn't empty
  if($image_delete){
    $path = $image_delete['src'];
    $thumbnail_path = preg_replace("/(.*)([.](png|jpg|jpeg))/", "$1-thumbnail$2", $path);
    //Try to delete both image and thumbnail
    if(!(unlink($image_delete['src']) && unlink($thumbnail_path))){
      HTTPStatus(500);
      echo json_encode(array('error' => 'L\'image n\'a pas pu être supprimée'));
      die();
    }
  }
}

if($image->delete()){
  echo json_encode(array('success' => 'L\'image a bien été supprimée'));
}else{
  echo json_encode(array('error' => 'Une erreur est survenue'));
  HTTPStatus(500);
}

