<?php

class User {
  //Database
  private $table = 'users';
  private $conn;

  public $id;
  public $username;
  public $salt;
  public $password;

  public function __construct($db) {
    $this->conn = $db;
  }

  public function login(){
    $query = 'SELECT * FROM ' . $this->table . ' WHERE username="' . $this->username . '"';

    return $this->conn->query($query);
  }
}