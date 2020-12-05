<?php 

//Headers
include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../models/Image.php';
include_once '../../utils/validate_param.php';
include_once '../../utils/image_upload.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate an Image
$image = new Image($db);

//Verify params integrity & assign them to image object if valid
$image->src = '';
$image->categorie = validate_param($_POST['categorie']);
$image->titre = strip_tags($_POST['titre']);
$image->details = strip_tags($_POST['details']);
$image->description = strip_tags($_POST['description']);
$image->infobox = $_POST['infobox'];

//Try to upload the image to the server
if(image_upload($_FILES['image'], $image->categorie, $image)){
  //Try to create a thumbnail of the image
  if(image_resize($image->src)){
    //Deletes ../ from the path
    $image->src = preg_replace('/.\.\//', "", $image->src);
    if($image->create()){
      echo json_encode(array('success' => 'L\'image a bien été ajoutée !'));
    }else{
      echo json_encode(array('error' => 'Une erreur est survenue'));
      HTTPStatus(500);
    }
  }else{
    HTTPStatus(500);
    echo json_encode('La miniature de l\'image n\'a pas été possible');
    die();
  }
}else{
  HTTPStatus(500);
  echo json_encode(array('error' => 'Une erreur est survenue pendant l\'upload de l\'image'));
}
