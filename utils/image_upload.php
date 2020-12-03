<?php

//File extension or empty files are already checked with javascript
function image_upload($file, $image_type, $image){
  $repertory_path = '../../images/' . $image_type . '/';
  $file_name = basename($file['name']);

  //Target directory & name for the uploaded image
  $target_file_path = $repertory_path . $file_name; 

  //Try to move the temporary file to the image folder
  if(move_uploaded_file($file['tmp_name'], $target_file_path)){
    $image->src = $target_file_path;
    return true;
  }else{
    return false;
  }

}

function image_resize($image_path){
  $source = $image_path;
  $thumbnail_path = preg_replace('/^(.*)([.](png|jpg|jpeg))$/', '$1-thumbnail$2', $source);
  $size = getimagesize($image_path);
  $width = $size[0];
  $height = $size[1];
  $ratio = $width / $height;
  $new_width = 500;
  $new_height = $new_width / $ratio;

  //Create image from the path given
  switch ($size['mime']) {
    case 'image/jpeg':
      $image = imagecreatefromjpeg($source);
      break;
    case 'image/gif':
      $image = imagecreatefromgif($source);
      break;
    case 'image/png':
      $image = imagecreatefrompng($source);
      break;
  }

  //Create an image with the thumbnail size
  $thumbnail = imagecreatetruecolor($new_width, $new_height);

  //Create the thumbnail of the source image
  if(imagecopyresampled($thumbnail, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height)){
    switch($size['mime'])
	    {
        case 'image/jpeg':
          if(imagejpeg($thumbnail, $thumbnail_path, 100)){
            return true;
          }
          return false;
        case 'image/gif':
          if(imagegif($thumbnail, $thumbnail_path)){
            return true;
          }
          return false;
        case 'image/png':
          if(imagepng($thumbnail, $thumbnail_path)){
            return true;
          }
          return false;
	    }
    die();
  }else{
    return false;
  }
}