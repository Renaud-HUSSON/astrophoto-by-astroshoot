<?php

include_once __DIR__ . '/../../utils/variables.php';

header('Access-Control-Allow-Origin: ' . URL);
header('Content-Type: application/json');

include_once __DIR__ . '/../../models/Sitemap.php';

$sitemap = new Sitemap();

if($sitemap->generate()){
  echo json_encode(array(
    'success' => 'Le sitemap a bien été généré'
  ));
}else{
  echo json_encode(array(
    'error' => 'Une erreur est survenue lors de la génération du sitemap'
  ));
  HTTPStatus(500);
}