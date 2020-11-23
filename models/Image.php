<?php

class Image {
  //DB 
  private $conn;
  private $table = 'images';

  //Image properties
  public $id;
  public $src;
  public $categorie;
  public $titre;
  public $details;
  public $description;
  public $infobox;

  public function __construct($db){
    $this->conn = $db;
  }

  public function read(){
    $query = 'SELECT * FROM ' . $this->table . ' ORDER BY id DESC';

    $stmt = $this->conn->query($query);

    return $stmt;
  }

  public function read_category(){
    $query = 'SELECT * FROM ' . $this->table . ' WHERE categorie="' . $this->categorie . '" ORDER BY id DESC';

    $stmt = $this->conn->query($query);

    return $stmt;
  }

  public function read_single(){
    $query = 'SELECT * FROM ' . $this->table . ' WHERE id=' . $this->id;

    $stmt = $this->conn->query($query);

    return $stmt;
  }

  public function create(){
    $query = 'INSERT INTO ' . $this->table . '(src, categorie, titre, details, description, infobox) VALUES (:src, :categorie, :titre, :details, :description, :infobox)';
    $secondary_query = 'UPDATE categories SET number=number+1 WHERE nom="' . $this->categorie . '"';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'src' => $this->src,
      'categorie' => $this->categorie,
      'titre' => $this->titre,
      'details' => $this->details,
      'description' => $this->description,
      'infobox' => $this->infobox
    ))){
      $this->conn->exec($secondary_query);

      return true;
    }else{
      return false;
    }
  }

  public function update(){
    $query = 'UPDATE ' . $this->table . ' SET src=:src, categorie=:categorie, titre=:titre, details=:details, description=:description, infobox=:infobox WHERE id=:id';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'id' => $this->id,
      'src' => $this->src,
      'categorie' => $this->categorie,
      'titre' => $this->titre,
      'details' => $this->details,
      'description' => $this->description,
      'infobox' => $this->infobox
    ))){
      return true;
    }else{
      return false;
    }
  }

  public function delete(){
    $query = 'DELETE FROM ' . $this->table . ' WHERE id=:id';
    $secondary_query = 'UPDATE categories SET number=number-1 WHERE nom="' . $this->categorie . '"';
    
    $req = $this->conn->prepare($query);
    
    if($req->execute(array(
      'id' => $this->id
    ))){
      $this->conn->exec($secondary_query);

      return true;
    }else{
      return false;
    }
  }
}