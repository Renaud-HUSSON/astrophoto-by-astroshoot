<?php
class Database {
  //DB params
  private $host = 'localhost';
  private $db_name = 'astroshoot';
  private $username = 'root';
  private $password = '';
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