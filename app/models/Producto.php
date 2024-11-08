<?php
require_once "Conexion.php";

class Producto extends Conexion
{
  private $pdo;

  public function __CONSTRUCT()
  {
    $this->pdo = parent::getConexion();
  }

  public function RegistrarProducto($params = [])
  {
    $cmd = "INSERT INTO tb_Productos (nombre, tipo, precio) VALUES (?,?,?)";

    $stmt = $this->pdo->prepare($cmd);

    $resultado =  $stmt->execute(array(
      $params["nombre"],
      $params["tipo"],
      $params["precio"]
    ));

    return $resultado;
  }

  public function ListarProductos()
  {
    $cmd = "SELECT * FROM tb_Productos";

    $stmt = $this->pdo->prepare($cmd);

    $stmt->execute();

    $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $resultado;
  }
}


// $producto = new Producto();

// echo json_encode($producto->ListarProductos());
