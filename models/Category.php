<?php 

class Category {
  //DB
  private $conn;
  private $table = 'categories';

  //Category properties
  public $id;
  public $titre;
  public $nom;
  public $number;

  public function __construct($db) {
    $this->conn = $db;
  }

  public function read() {
    $query = 'SELECT * FROM ' . $this->table;

    $result = $this->conn->query($query);

    return $result;
  }

  public function create(){
    $query = 'INSERT INTO ' . $this->table . '(titre, nom) VALUES(:titre, :nom)';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'titre' => $this->titre,
      'nom' => $this->nom
    ))){
      return true;
    }else{
      return false;
    }
  }

  public function update(){
    $query = 'UPDATE ' . $this->table . ' SET titre=:titre, nom=:nom WHERE id=:id';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'id' => $this->id,
      'titre' => $this->titre,
      'nom' => $this->nom
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