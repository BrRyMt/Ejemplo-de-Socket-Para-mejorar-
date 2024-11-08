window.document.addEventListener("DOMContentLoaded", () => {
  const Nombreproducto = document.querySelector("#nombreProducto");
  const Tipoproducto = document.querySelector("#tipoProducto");
  const Precioproducto = document.querySelector("#precioProducto");

  const FormularioP = document.querySelector("#form-producto");
  let ws;
  let myNickName = "";

  joinChat();

  FormularioP.addEventListener("submit", async (event) => {
    event.preventDefault();
    await registrarProducto();
    sendMessaje(event)
  })

  async function registrarProducto() {
    const datos = {
      Operacion: "RegistrarProductos",
      nombre: Nombreproducto.value,
      tipo: Tipoproducto.value,
      precio: Precioproducto.value
    }

    try {
      const respuesta = await fetch(`../socketproductos/app/controllers/Producto.controllers.php`, {
        method:
          'POST',
        headers: {
          'Content-Type': 'application/json' // Agregar el encabezado
        },
        body: JSON.stringify(datos)
      });

      const data = await respuesta.json();

      if (data.Registrado) {
        alert("Registrado Correctamente");
        FormularioP.reset();
      }

    } catch (error) {
      console.error(error)
    }

  }

  function joinChat() {
    myNickName = "usuario";

    ws = new WebSocket("ws://localhost:8080");

    ws.onclose = () => {
      console.error("Server Desconectado");
    };

    ws.onerror = (error) => {
      console.error(error.message);
    };
  }

  function sendMessaje(event) {
    if (event) {
      ws.send(JSON.stringify({
        type: 'message',
        message: true
      }));
    }
  }

});