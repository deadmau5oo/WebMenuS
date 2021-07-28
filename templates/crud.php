<?php

require "conexion.php";
    
$datos = json_decode(file_get_contents("php://input"));
$request = $datos->request;

if($request == 1){
  $sql = "SELECT * FROM tipos";
  $query = $conexion->query($sql);
  $datos = array();
  while($resultado = $query->fetch_assoc()) {
    $datos[] = $resultado;
  }
  echo json_encode($datos);
  exit;
}

if($request == 2){
  $sql = "SELECT * FROM productos";
  $query = $conexion->query($sql);
  $datos = array();
  while($resultado = $query->fetch_assoc()) {
    $datos[] = $resultado;
  }
  echo json_encode($datos);
  exit;
}

// CREATE: Insertar registro en la base de datos
if($request[1] == 2) {

  $email = $usuario->email;
  $pass1 = $usuario->pass1;
  $names = $usuario->names;
  $country = $usuario->country;
  $contact_number = $usuario->contact_number;

  $email = str_replace($delete, "", $email);
  $pass1 = str_replace($delete, "", $pass1);
  $names = str_replace($delete, "", $names);
  $country = str_replace($delete, "", $country);
  $contact_number = str_replace($delete, "", $contact_number);

  $sql = "INSERT INTO `usuario`(`email`, `password`, `name`, `country`, `contact_number`) 
  VALUES ('$email','$pass1','$names','$country','$contact_number')";

  if (mysqli_query($conexion, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
  }
  mysqli_close($conexion);
}

// READ: Leer los registros de la base de datos
if($request == 3){
  $sql = "SELECT * FROM publicacion";
  $query = $conexion->query($sql);
    
  $datos = array();
  while($resultado = $query->fetch_assoc()) {
    $datos[] = $resultado;
  }
    
  echo json_encode($datos);
  exit;
}

if($request[1] == 4){
  $user_id = $usuario->user_id;
  $email = $usuario->email;
  $pass1 = $usuario->pass1;
  $name = $usuario->name;
  $country = $usuario->country;
  $contact_number = $usuario->contact_number;
  $resume = $usuario->resume;
  $skills = $usuario->skills;
  $points = $usuario->points;
  $links = $usuario->links;

  $resume = str_replace($replace, " ", $resume);
  $resume = str_replace($delete, " ", $resume);

  $sql = "UPDATE `usuario` SET 
  `email`='".$email."',
  `password`='".$pass1."',
  `name`= '".$name."',
  `country`= '".$country."',
  `contact_number`= '".$contact_number."',
  `links`= '".$links."',
  `resume`= '".$resume."',
  `skills`= '".$skills."',
  `points`= '".$points."' 
  WHERE usuario_id = '$user_id'";
  
  if (mysqli_query($conexion, $sql)) {
    echo "Profile edit successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
  }
  mysqli_close($conexion);
  exit;
}
  
if($request[1] == 5){
  $title = $usuario->title;
  $description = $usuario->description;
  $country = $usuario->country;
  $category = $usuario->category;
  $usuario_id = $publication->usuario_id;
  $ofert = $usuario->ofert;
  $priority = $usuario->priority;
  
  $title = str_replace($delete, "", $title);
  $description = str_replace($delete, "", $description);
  $country = str_replace($delete, "", $country);
  $category = str_replace($delete, "", $category);
  $ofert = str_replace($delete, "", $ofert);
  $usuario_id = intval($usuario_id);

  $sql = "INSERT INTO `publicacion`
  (`title`, `description`, `country`, `category`, 
  `usuario_id`, `priority`, `ofert`) 
  VALUES ('$title','$description','$country','$category','$usuario_id','$priority','$ofert')";

  if (mysqli_query($conexion, $sql)) {
    echo "New publication created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
  }
  mysqli_close($conexion);
}

if($request[1] == 6){
  $sql = "SELECT * FROM publicacion WHERE usuario_id = '$publication' ";
  $query = $conexion->query($sql);
    
  $datos = array();
  while($resultado = $query->fetch_assoc()) {
    $datos[] = $resultado;
  }
    
  echo json_encode($datos);
  exit;
}

if($request[1] == 7){
  $publication = str_replace($delete, "", $publication);

  $sql = "SELECT * FROM publicacion WHERE title LIKE '%$publication%' || description LIKE '%$publication%' || category LIKE '%$publication%'";
  $query = $conexion->query($sql);
  $datos = array();
  while($resultado = $query->fetch_assoc()) {
    $datos[] = $resultado;
  }
    
  echo json_encode($datos);
  exit;
}

if($request[1] == 8) {
  $user_id = $publication->user_id;
  $publication_id = $publication->publication_id;

  $user_id = intval($user_id);
  $publication_id = intval($publication_id);

  $sql = "INSERT INTO `solicitud`(`publicacion_id`, `usuario_id`) 
  VALUES ('$publication_id','$user_id')";

  $sql2 = "SELECT * FROM solicitud WHERE publicacion_id = '$publication_id' && usuario_id = '$user_id'";

  $query = $conexion->query($sql2);
  $datos = array();
  while($resultado = $query->fetch_assoc()) {
    $datos[] = $resultado;
  }

  if(json_encode($datos[0]) != "null"){
    echo "You already apply to this";
    return 0;
    exit;
  }
  if (mysqli_query($conexion, $sql)) {
    echo "Apply Successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
  }
  mysqli_close($conexion);
}

if($request[1] == 9){
  $publication = intval($publication);
  
  $sql = "SELECT * FROM solicitud WHERE publicacion_id = '$publication'";
  $query = $conexion->query($sql);
  $datos = array();
  while($resultado = $query->fetch_assoc()) {
    $datos[] = $resultado;
  }
    
  echo json_encode($datos);
  exit;
}

if($request[1] == 10){
  $publication = intval($publication);
  
  $sql = "SELECT * FROM usuario WHERE usuario_id = '$publication'";
  $query = $conexion->query($sql);
  $datos = array();
  while($resultado = $query->fetch_assoc()) {
    $datos[] = $resultado;
  }
    
  echo json_encode($datos);
  exit;
}