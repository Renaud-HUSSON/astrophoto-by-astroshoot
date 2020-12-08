<?php

class Logs {
  //DB fileds
  private $table = 'logs';
  private $conn;

  //Logs fields
  public $id;
  public $ip;
  public $username;
  public $success;

  public function __construct($db){
    $this->conn = $db;
  }

  public function read(){
    $query = 'SELECT * FROM ' . $this->table . ' ORDER BY id DESC LIMIT 0, 100';

    return $this->conn->query($query);
  }

  public function create(){
    $query = 'INSERT INTO ' . $this->table . ' (ip, username, success) VALUES (:ip, :username, :success)';

    $stmt = $this->conn->prepare($query);
    
    if($stmt->execute(array(
      'ip' => $this->ip,
      'username' => $this->username,
      'success' => $this->success
    ))){
      return true;
    }else{
      return false;
    }
  }
}