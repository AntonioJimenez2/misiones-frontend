//mision 2

// constantes
const contenedor = document.querySelector(".contenedor__imagen");
const parrafo = document.querySelector(".parrafo__principal");
const boton = document.querySelector(".boton__cambiar");
const imagenMostrada = document.querySelector(".imagen__principal");
const imagen1 =
  "https://th.bing.com/th/id/OIG1.N32c6nbbMpMe7XlIU3IG?dpr=2.8&pid=ImgDetMain.jpg";
const imagen2 =
  "https://th.bing.com/th/id/OIG1.4PHLW2OYQe4mM4j9dUJ_?dpr=2.8&pid=ImgDetMain.jpg";

//cambiar propiedades de la imagen y parrafo
boton.addEventListener("click", () => {
  if (imagenMostrada.src == imagen1) {
    imagenMostrada.src = imagen2;
    imagenMostrada.style.width = "300px";
    imagenMostrada.style.height = "300px";
    parrafo.innerText = `"Aprendí a manipular elementos del DOM usando JavaScript."`;
    parrafo.style.color = "blue";
    contenedor.style.backgroundColor = "blue";
  } else {
    imagenMostrada.src = imagen1;
    imagenMostrada.style.width = "250px";
    imagenMostrada.style.height = "250px";
    parrafo.innerHTML = `Front-end es aquello que el usuario ve y con lo que interactúa.`;
    parrafo.style.color = "black";
    contenedor.style.backgroundColor = "#ffffff";
  }
});

//mision 3
//https://api.github.com/users/octocat
//obtener los datos de la api github
const contenedorApi = document.querySelector(".contenedor__api");
const botonDatosApi = document.querySelector(".boton__datos__api");

async function obtenerInfoUsusrioGithub() {
  try {
    const respuesta = await fetch("https://api.github.com/users/octocat");
    if (!respuesta.ok) {
      throw new Error("Error al conectar con el servidor");
    }
    const datos = await respuesta.json();
    //console.log(datos);
    return datos;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
}

//mostrar los datos
async function mostrarDatos() {
  const usuarioGithub = await obtenerInfoUsusrioGithub();
  if (usuarioGithub) {
    //console.log(usuarioGithub)
    console.log(usuarioGithub.name);
    contenedorApi.innerHTML = `<p>ID: ${usuarioGithub.id}</p><p>Nombre: ${usuarioGithub.name}</p><p>Url Github: ${usuarioGithub.html_url}</p><p>Compañia: ${usuarioGithub.company}</p><p>Localización: ${usuarioGithub.location}</p><p>Seguidores: ${usuarioGithub.followers}</p>`;
  }
}

botonDatosApi.addEventListener("click", () => mostrarDatos());
