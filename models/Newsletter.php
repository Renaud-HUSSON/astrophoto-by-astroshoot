<?php

class Newsletter {
  //DB fields
  private $table = 'newsletter';
  private $conn;

  //Newsletter fields
  public $id;
  public $email;

  public function __construct($db){
    $this->conn = $db;
  }

  public function read(){
    $query = 'SELECT * FROM ' . $this->table;

    return $this->conn->query($query);
  }

  public function create(){
    $query = 'INSERT INTO ' . $this->table . ' (email) VALUES (:email)';

    $stmt = $this->conn->prepare($query);

    if($stmt->execute(array(
      'email' => $this->email
    ))){
      return true;
    }else{
      return false;
    }
  }

  public function delete(){
    $query = 'DELETE FROM ' . $this->table . ' WHERE id=:id';

    $stmt = $this->conn->prepare($query);

    if($stmt->execute(array(
      'id' => $this->id
    ))){
      return true;
    }else{
      return false;
    }
  }
}