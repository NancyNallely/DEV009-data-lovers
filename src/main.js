import data from './data.js';
import peliculas from './data/ghibli/ghibli.js';// Se importa la data de studio ghibli


const botonVolverPrincipal = document.getElementById("principal");// Se declara la variable botonVolverPrincipal, y se llama al elemento del DOM por su Id.
if (botonVolverPrincipal !== null) {
  botonVolverPrincipal.addEventListener("click", data.paginaPrincipal);// Se crea un evento al dar click se dirige a la funcion pagina principal
  window.addEventListener("load", data.mostrarPeliculas(peliculas.films));// Se agrega el evento escucha para que cuando se cargue la pagina films se muestren las cards
}


const selectElement = document.querySelector('#ordenaPor');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector
if (selectElement !== null) {
  selectElement.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor del elemento
    let peliculasOrdenadas;
    switch (opcionSeleccionada) {
    case "0":
      peliculasOrdenadas = peliculas.films;
      break;
    case "1":
      peliculasOrdenadas = data.OrdenaPeliculasAz(peliculas.films);
      break;
    case "2":
      peliculasOrdenadas = data.OrdenaPeliculasZa(peliculas.films);
      break;
    case "3":
      peliculasOrdenadas = data.OrdenaPeliculasAñoReciente(peliculas.films);
      break;
    case "4":
      peliculasOrdenadas = data.OrdenaPeliculasAñoViejo(peliculas.films);
      break;
    case "5":
      peliculasOrdenadas = data.OrdenaPeliculasScoreAlto(peliculas.films);
      break;
    case "6":
      peliculasOrdenadas = data.OrdenaPeliculasScoreBajo(peliculas.films);
      break;
    }
    data.mostrarPeliculas(peliculasOrdenadas);
  });
}

const selectProductor = document.querySelector('#Producers');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector
if (selectProductor !== null) {
  selectProductor.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor del elemento
    const peliculasProductor = data.OrdenaPeliculasProductor(peliculas.films, opcionSeleccionada);
    data.mostrarPeliculas(peliculasProductor);
  });
}


const selectDirector = document.querySelector('#Directors');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector
if (selectDirector !== null) {
  selectDirector.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor del elemento
    const peliculasDirector = data.OrdenaPeliculasDirector(peliculas.films, opcionSeleccionada);
    data.mostrarPeliculas(peliculasDirector);
  });
}

