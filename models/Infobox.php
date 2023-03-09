<?php

class Infobox {
  //DB properties
  private $conn;
  private $table = 'infobox';

  //Infobox properties
  public $id;
  public $type;
  public $nom;
  public $right_ascension;
  public $declinaison;
  public $distance;
  public $magnitude;
  public $dimensions_apparentes;
  public $constellation;
  public $taille;
  public $designations;

  public function __construct($db){
    $this->conn = $db;
  }

  public function read(){
    $query = 'SELECT * FROM ' . $this->table;

    $data = $this->conn->query($query);

    return $data;
  }

  public function read_single(){
    $query = 'SELECT * FROM ' . $this->table . ' WHERE nom="' . $this->nom . '"';

    $data = $this->conn->query($query);

    return $data;
  }

  public function create(){
    $query = 'INSERT INTO ' . $this->table . ' 
              (type, nom, right_ascension, declinaison, distance, magnitude, dimensions_apparentes, constellation, taille, designations) 
              VALUES(:type, :nom, :right_ascension, :declinaison, :distance, :magnitude, :dimensions_apparentes, :constellation, :taille, :designations)';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'type' => $this->type,
      'nom' => $this->nom,
      'right_ascension' => $this->right_ascension,
      'declinaison' => $this->declinaison,
      'distance' => $this->distance,
      'magnitude' => $this->magnitude,
      'dimensions_apparentes' => $this->dimensions_apparentes,
      'constellation' => $this->constellation,
      'taille' => $this->taille,
      'designations' => $this->designations
    ))){
      return true;
    }else{
      return false;
    }
  }

  public function update(){
    $query = 'UPDATE ' . $this->table . ' SET type=:type, nom=:nom, right_ascension=:right_ascension, declinaison=:declinaison, distance=:distance, magnitude=:magnitude, dimensions_apparentes=:dimensions_apparentes, constellation=:constellation, taille=:taille, designations=:designations WHERE id=:id';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'id' => $this->id,
      'type' => $this->type,
      'nom' => $this->nom,
      'right_ascension' => $this->right_ascension,
      'declinaison' => $this->declinaison,
      'distance' => $this->distance,
      'magnitude' => $this->magnitude,
      'dimensions_apparentes' => $this->dimensions_apparentes,
      'constellation' => $this->constellation,
      'taille' => $this->taille,
      'designations' => $this->designations
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