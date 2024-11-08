window.document.addEventListener("DOMContentLoaded", async () => {
  const TablaProductos = document.querySelector("#TablaProductos tbody");
  let ws;
  let myNickName = "";
  const cargardatos = async () => {
    try {
      const response = await fetch('../socketproductos/app/controllers/Producto.controllers.php?Operacion=ObtenerProductos');
      const productos = await response.json();
      TablaProductos.innerHTML = ''
      productos.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.tipo}</td>
        <td>${producto.precio}</td>
      `;
        TablaProductos.appendChild(fila);
      });
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  }

  function joinChat() {

    myNickName = "usuario";

    ws = new WebSocket("ws://localhost:8080");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "message") {
          if (data.message) {
            cargardatos();
          }
        }
      }
      catch (e) {
        console.log(event.data);
      }
    };

    ws.onclose = () => {
      console.error("Server Desconectado");
    };

    ws.onerror = (error) => {
      console.error(error.message);
    };
  }

  cargardatos();
  joinChat();
});