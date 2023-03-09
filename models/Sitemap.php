<?php

include_once __DIR__ . "/../config/Database.php";
include_once __DIR__ . "/Category.php";
include_once __DIR__ . "/Image.php";
include_once __DIR__ . "/../utils/HTTPStatus.php";

class Sitemap {
  public function generate(){
    //Site url
    $url = "https://astrophoto-amateur.com/";

    //Images variable
    $image_priority = 0.7;
    $image_freq = "weekly";
    
    //Category variables
    $categorie_priority = 0.8;
    $categorie_freq = "daily";
    
    //Instanciate & connect to the db
    $database = new Database();
    $db = $database->connect();

    $image_data = new Image($db);
    $categorie_data = new Category($db);
    
    //Static base of the xml file
    $string = '<?xml version="1.0" encoding="UTF-8"?>
              
  <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="
          http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
      <loc>https://astrophoto-amateur.com/</loc>
      <lastmod>2020-08-15T21:30:46+00:00</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0000</priority>
    </url>
    <url>
      <loc>https://astrophoto-amateur.com/materiel</loc>
      <lastmod>2020-08-15T21:30:46+00:00</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7000</priority>
    </url>
    <url>
      <loc>https://astrophoto-amateur.com/informations</loc>
      <lastmod>2020-08-15T21:30:46+00:00</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7000</priority>
    </url>
    <url>
      <loc>https://astrophoto-amateur.com/calculs</loc>
      <lastmod>2020-08-15T21:30:46+00:00</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8000</priority>
    </url>
        ';

    //Get all categories
    $categories = $categorie_data->read();

    //Iterate through categories and add them to the xml string
    while($row = $categories->fetch()){
      extract($row);

      $message = '
    <url>
      <loc>' . $url . $nom . '</loc>
      <changefreq>' . $categorie_freq . '</changefreq>
      <priority>' . $categorie_priority . '</priority>
    </url>';
      
      $string .= $message;
    }

    //Get all images
    $images = $image_data->read();

    //Iterate through images and add them to the xml string
    while($row = $images->fetch()){
      extract($row);

      $message = '
    <url>
      <loc>' . $url . $categorie . '/' . $id . '</loc>
      <changefreq>' . $image_freq . '</changefreq>
      <priority>' . $image_priority . '</priority>
    </url>';

      $string .= $message;
    }

    $string .= '
  </urlset>';

    if(!file_put_contents(__DIR__ . "/../sitemap.xml", $string)){
      return false;
    }else{
      return true;
    }
  }
}