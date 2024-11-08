<?php

require_once "../models/Producto.php";

$producto = new Producto();

if (isset($_GET["Operacion"])) {
  switch ($_GET["Operacion"]) {
    case "ObtenerProductos":
      echo json_encode($producto->ListarProductos());
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $jsonInput = file_get_contents('php://input');
  $data = json_decode($jsonInput, true);

  if (isset($data["Operacion"]) && $data["Operacion"] == "RegistrarProductos") {
    $producto->RegistrarProducto(array(
      "nombre" => $data["nombre"],
      "tipo" => $data["tipo"],
      "precio" => $data["precio"]
    ));

    echo json_encode(["Registrado" => true]);
  }
}
