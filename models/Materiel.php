<?php

class Materiel {
  //DB variables
  private $conn;
  private $table = 'materiel';

  //Materiel properties
  public $id;
  public $label;
  public $href;

  public function __construct($db) {
    $this->conn = $db;
  }

  public function read(){
    $query = 'SELECT * FROM ' . $this->table;

    return $this->conn->query($query);
  }

  public function read_single(){
    $query = 'SELECT * FROM ' . $this->table . ' WHERE id=' . $this->id;

    return $this->conn->query($query);
  }

  public function create(){
    $query = 'INSERT INTO ' . $this->table . ' (label, href) VALUES(:label, :href)';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'label' => $this->label,
      'href' => $this->href
    ))){
      return true;
    }else{
      return false;
    }
  }

  public function update(){
    $query = 'UPDATE ' . $this->table . ' SET label=:label, href=:href WHERE id=:id';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'id' => $this->id,
      'label' => $this->label,
      'href' => $this->href
    ))){
      return true;
    }else{
      return false;
    }
  }

  public function delete(){
    $query = 'DELETE FROM ' . $this->table . ' WHERE id=:id';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'id' => $this->id
    ))){
      return true;
    }else{
      return false;
    }
  }
}