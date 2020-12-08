<?php

include_once(__DIR__ . "/../../utils/variables.php");
header('Access-Control-Allow-Origin: ' . URL);
header('Access-Control-Allow-Method: POST');

include_once '../../config/Database.php';
include_once '../../models/User.php';
include_once '../../models/Logs.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate a User
$user = new User($db);

$user->username = validate_param($_POST['username']);

$result = $user->login();

$log = new Logs($db);

$log->ip = $_SERVER['REMOTE_ADDR'];
$log->username = $user->username;

if($result->rowCount() == 1){
  $data = $result->fetch();
  if(password_verify(strip_tags($_POST['password']), $data['password'])){
    $log->success = 'true';
    $log->create();
    echo json_encode(array(
      'success' => 'Vous êtes connecté'
    ));
    die();
  }
}

$log->success = 'false';
$log->create();

HTTPStatus(401);
echo json_encode(array(
  'error' => 'Le nom d\'utilisateur et le mot de passe ne correspondent pas'
));
