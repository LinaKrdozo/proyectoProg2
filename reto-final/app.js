// Función principal
async function ejecutarSolicitud() {
    const metodo = document.getElementById("metodo").value;
    const url = document.getElementById("url").value.trim();
    const bodyTexto = document.getElementById("body").value;

    if (!url) {
      mostrarError("Debe ingresar una URL.");
      return;
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      mostrarError("La URL debe comenzar con http:// o https://");
      return;
    }
  
    const opciones = {
      method: metodo,
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    if (metodo === "POST" || metodo === "PUT") {
      if (!bodyTexto) {
        mostrarError("Este método requiere un Body en formato JSON.");
        return;
      }
      try {
        opciones.body = JSON.stringify(JSON.parse(bodyTexto));
      } catch {
        mostrarError("El contenido enviado no es JSON válido.");
        return;
      }
    }
  
    const inicio = performance.now();
    try {
      const response = await fetch(url, opciones);
      const fin = performance.now();
      const tiempo = (fin - inicio).toFixed(2);
  
      if (!response.ok) {
        mostrarError(`Error HTTP ${response.status}`);
        return;
      }
  
      let resultado;
      try {
        resultado = await response.json();
      } catch {
        resultado = "La respuesta no contiene JSON.";
      }
  
      mostrarResultado(`${response.status} ${response.statusText}`, tiempo, resultado);
    } catch {
      mostrarError("No fue posible conectarse con el servidor.");
    }
  }
  
  document.getElementById("metodo").addEventListener("change", function () {
    const metodo = this.value;
    const bodyArea = document.getElementById("body");
    const urlField = document.getElementById("url");
    const mensajeBody = document.getElementById("mensaje-body");
  
    bodyArea.value = "";

    if (metodo === "GET" || metodo === "DELETE") {
      bodyArea.disabled = true;
    } else {
      bodyArea.disabled = false;
    }
  
    urlField.value = "";
  
    document.getElementById("status").textContent = "--";
    document.getElementById("time").textContent = "-- ms";
    document.getElementById("output").textContent = "{}";
    document.getElementById("error").textContent = "";
  });
  
  function mostrarResultado(status, tiempo, resultado) {
    document.getElementById("status").textContent = status;
    document.getElementById("time").textContent = `${tiempo} ms`;
    document.getElementById("output").textContent =
      typeof resultado === "string" ? resultado : JSON.stringify(resultado, null, 2);
    document.getElementById("error").textContent = "";
  }
  
  function mostrarError(mensaje) {
    document.getElementById("status").textContent = "--";
    document.getElementById("time").textContent = "-- ms";
    document.getElementById("output").textContent = "{}";
    document.getElementById("error").textContent = mensaje;
  }
  