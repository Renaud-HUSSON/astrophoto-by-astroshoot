<?php

function validate_param ($param){
  if(isset($param) && !empty($param)){
    return htmlspecialchars(strip_tags($param));
  }
  HTTPStatus(400);
  echo json_encode(array('error' => 'Invalid parameter(s)'));
  die();
}