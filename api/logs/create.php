<?php 

//Headers
include_once(__DIR__ . "/../../utils/variables.php");

header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Logs.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instanciate a Logs
$log = new Logs($db);


//Verify there is 10 parmeters
if(sizeof($_POST) != 2){
  HTTPStatus(400);
  echo json_encode(array(
    'error' => 'The API requires 2 parameters'
  ));
  die();
}

$log->ip = isset($_POST['ip']) ? $_POST['ip'] : '';
$log->username = isset($_POST['username']) ? $_POST['username'] : '';

try{
  $log->create();
}catch(Exception $e){
  echo $e;
}


