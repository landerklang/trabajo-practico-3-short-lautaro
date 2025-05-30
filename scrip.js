const urlDragonBall = "https://dragonball-api.com/api/characters";
const contenedorpadre = document.getElementById("contenedor-data");
const btnBuscar = document.getElementById("bttn");
const buscador = document.getElementById("buscador");

const cargarDatos = async (url) => {
    try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new error("Error en la API");
    }

    const data = await response.json();

    return data;
    } catch (error) {
    console.log(error);
    }
};
const data = cargarDatos(urlDragonBall);
console.log(data)


const inicio = async () => {
  const data = await cargarDatos(urlDragonBall);
  const dataPersonajes = data.items;

  console.log(dataPersonajes);

  dataPersonajes.forEach((personaje) => {
    // console.log(personaje);
    contenedorpadre.innerHTML += `
          <div class="col-3 pb-2 d-flex justify-content-center" data-id=${personaje.id}>
            <div class="card">
              <img
                class="card-img-top"
                src=${personaje.image}
              />
              <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">${personaje.race} - ${personaje.gender}</p>
                <button class="btn btn-success btn-ver-detalles">Ver más</button>
              </div>
            </div>
          </div>
      `;
  });
};
inicio();

btnBuscar.addEventListener("click", async () => {
    inicio();
});



contenedorpadre.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-ver-detalles")) {
    // accediendo al padre mas cercano
    const cardPadre = e.target.closest(".col-3");
    const id = cardPadre.dataset.id;

    verDetalles(id);
  }
});
