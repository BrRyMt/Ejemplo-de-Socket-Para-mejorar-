
<?php

class Conexion
{

  private $servidor = "127.0.0.1";
  private $puerto = "3306";
  private $baseDatos = "Productos";
  private $usuario = "root";
  private $clave = "";

  public function getConexion()
  {

    try {

      $pdo = new PDO(
        "mysql:host={$this->servidor};
        port={$this->puerto};
        dbname={$this->baseDatos};
        charset=UTF8",
        $this->usuario,
        $this->clave
      );

      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $pdo;
    } catch (Exception $e) {
      die($e->getMessage());
    }
  }
}
