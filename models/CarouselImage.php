<?php

class CarouselImage {
  private $conn;
  private $table = 'carousel';

  public $id;
  public $image;

  public function __construct($db){
    $this->conn = $db;
  }

  public function read() {
    $query = 'SELECT ' . $this->table . '.*, images.titre as titre, images.src as src FROM ' . $this->table . ', images
              WHERE ' . $this->table . '.image=images.id ORDER BY id ASC';

    return $this->conn->query($query);
  }

  public function read_single() {
    $query = 'SELECT ' . $this->table . '.*, images.titre as titre, images.src as src FROM ' . $this->table . ', images
              WHERE ' . $this->table . '.image=images.id AND ' . $this->table . '.id=' . $this->id;

    $result = $this->conn->query($query);

    if($result->rowCount() == 0){
      $query = 'SELECT * FROM ' . $this->table . ' WHERE id=' . $this->id;

      $result = $this->conn->query($query);
    }

    return $result;
  }

  public function create() {
    $query = 'INSERT INTO ' . $this->table . ' (image) VALUES(:image)';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'image' => $this->image
    ))){
      return true;
    }else{
      return false;
    }
  }

  public function update() {
    $query = 'UPDATE ' . $this->table . ' SET image=:image WHERE id=:id';

    $req = $this->conn->prepare($query);

    if($req->execute(array(
      'image' => $this->image,
      'id' => $this->id
    ))){
      return true;
    }else{
      return false;
    }
  }

  public function delete() {
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