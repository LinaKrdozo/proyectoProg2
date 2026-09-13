/*fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(typeof data[0].id)
        console.log(typeof data[0].address)
 })
    .catch(error => {
    console.error("Error:", error);
 });

*/

/*
async function cargarUsuarios() {

    try {
    
    const response = await fetch(url); 
    const data = await response.json(); 
    console.log(data);
    } catch (error) { 
        console.error("Error:", error);
    }
}

cargarUsuarios();
*/   
const url = "https://jsonplaceholder.typicode.com/users";
const boton = document.getElementById("btnCargar");
const contenedor = document.getElementById("usuarios");
const btnBuscar = document.getElementById("btnBuscar");

boton.addEventListener("click", cargarUsuarios);

btnBuscar.addEventListener("click", buscarUsuario);

async function cargarUsuarios() {
  try {
    const response = await fetch(url);
    const usuarios = await response.json();

    contenedor.innerHTML = "";

    usuarios.forEach(usuario => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h2>${usuario.name}</h2>
        <p><strong>Usuario:</strong> ${usuario.username}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Teléfono:</strong> ${usuario.phone}</p>
      `;
      contenedor.appendChild(div);
    });
    
  } catch (error) {
    contenedor.innerHTML = "<p>Se presentó un error al consultar la API.</p>";
    console.error(error);
  }
}

async function buscarUsuario() {
    const id = document.getElementById("idUsuario").value;
    const resultado = document.getElementById("resultado");
  
    if (!id) {
      resultado.innerHTML = "<p>Ingrese un ID.</p>";
      return;
    }
  
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      console.log(response.status);
      console.log(response.statusText);
  
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
  
      const usuario = await response.json();
  
      resultado.innerHTML = `
        <h2>${usuario.name}</h2>
        <p>${usuario.email}</p>
        <p>${usuario.phone}</p>
      `;
    } catch (error) {
      resultado.innerHTML = `<p>Error: ${error.message}</p>`;
    }

  }
  
  async function crearUsuario() {
    const nuevoUsuario = {
      name: "Carlos Pérez",
      username: "carlosp",
      email: "carlos@example.com"
    };
  
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nuevoUsuario)
        
        }
      );
  
      console.log("Código HTTP:", response.status);
      console.log("Estado:", response.statusText);
  
      // Validar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Respuesta del servidor:", data);
  
      console.log("Usuario creado con ID:", data.id);
      console.log("Nombre registrado:", data.name);
  
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
    }
  }
    
  crearUsuario();
  