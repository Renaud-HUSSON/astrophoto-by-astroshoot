<?php

include_once(__DIR__ . '/../utils/variables.php');

class Database {
  //DB params
  private $host = DBHOST;
  private $db_name = DBNAME;
  private $username = DBUSERNAME;
  private $password = DBPASSWORD;
  private $conn;

  //DB connect
  public function connect() {
    try {
      $this->conn = new PDO('mysql:host=' . $this->host .';dbname=' . $this->db_name . ';charset=utf8', $this->username, $this->password);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e) {
      echo 'Connection Error: ' . $e->getMessage();
    }
    
    return $this->conn;
  }
}