<?php 

include_once(__DIR__ . "/../../utils/variables.php");

//Headers
header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

//Includes
include_once '../../config/Database.php';
include_once '../../models/Logs.php';
include_once '../../utils/HTTPStatus.php';
include_once '../../utils/validate_param.php';

//Instanciate db && connect
$database = new Database();
$db = $database->connect();

//Instanciate a new log
$log = new Logs($db);

$data = $log->read();

$log_array = array();
$log_array['data'] = array();

if($data->rowCount() != 0){
  while($row = $data->fetch()){
    extract($row);

    $log_item = array(
      'id' => $id,
      'ip' => $ip,
      'username' => $username
    );
    
    array_push($log_array['data'], $log_item);
  }
  echo json_encode($log_array);
}else{
  HTTPStatus(404);
  echo json_encode(array(
    'error' => 'Aucun log trouvé'
  ));
}

