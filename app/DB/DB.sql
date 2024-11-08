CREATE DATABASE Productos;

USE Productos;

CREATE TABLE tb_Productos (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(120),
    tipo VARCHAR(50),
    precio DECIMAL(7, 2),
    fecharegistro DATETIME NULL DEFAULT NOW()
) ENGINE = INNODB;

INSERT INTO tb_Productos (nombre, tipo, precio) VALUES 
("Producto A","Utencilio",12.25),
("Producto C","Utencilio",15.25),
("Producto B","Utencilio",13.25);

SELECT * FROM tb_Productos;