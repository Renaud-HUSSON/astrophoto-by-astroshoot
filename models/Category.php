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
  public $image;

  public function __construct($db) {
    $this->conn = $db;
  }

  public function read() {
    $query = 'SELECT * FROM ' . $this->table;

    return $this->conn->query($query);

  }

  public function read_image() {
    $query = 'SELECT categories.*, images.src FROM ' . $this->table . ' INNER JOIN images ON ' . $this->table . '.image = images.id';

    return $this->conn->query($query);

  }

  public function read_single() {
    $query = 'SELECT ' . $this->table . '.*, images.titre as titre_image, images.src 
              FROM ' . $this->table . ', images 
              WHERE ' . $this->table . '.id= ' . $this->id . ' AND images.id = ' . $this->table . '.image';

    return $this->conn->query($query);
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
    $query = 'UPDATE ' . $this->table . ' SET titre=:titre, nom=:nom, image=:image WHERE id=:id';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'id' => $this->id,
      'titre' => $this->titre,
      'nom' => $this->nom,
      'image' => $this->image
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