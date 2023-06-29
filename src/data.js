const data = {

  paginaPrincipal() {
    location.href = "index.html";// Se agrega a la funcion principal la localizacion para direccionar 
  },

  mostrarPeliculas(peliculas) {
    const carSeccion = document.querySelector(".cards");// Se usa querySelector para encontrar la primera coincidencia de cards
    let cards = "";
    let colorFondo = 1;
    peliculas.forEach(pelicula => {// Se recorre el array que contien las peliculas pormedio de forEach
      let card = '<article class="card">';// declara la variable card y se le asigna una etiqueta article como texto
      card += '<picture class="imagen">';// a la variable card se le concatena etiqueta picture
      card += '<img class="category__' + colorFondo++ + '" src="' + pelicula.poster + '" alt="" />';
      card += '</picture>';
      card += '<div class="card-content">';
      card += '<p class="category category__' + colorFondo + '">' + pelicula.title + '</p><br><br>';
      card += '<p>' + pelicula.description + '</p>';
      card += '</div><!-- .card-content -->';
      card += '<footer>';
      card += '<div class="post-meta">';
      card += '<span class="timestamp"><i></i>Score: ' + pelicula.rt_score + '</span>';
      card += '<span class="comments"><i></i>Año: ' + pelicula.release_date + '</span>';
      card += '<span class="comments"><i>></i>Productor: ' + pelicula.producer + '</span>';
      card += '<span class="comments"><i></i>Director: ' + pelicula.director + '</span>';
      card += '</div>';
      card += '</footer>';
      card += '</article>';
      //console.log("esto hace el forEach en card: "+card);
      cards += card;
    });
    carSeccion.innerHTML = cards;
  },


  OrdenaPeliculasAz(arrayPeliculas) {
    const peliculasOrdenadas = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return a.title.localeCompare(b.title);// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo

    });
    return peliculasOrdenadas;
  },

  OrdenaPeliculasZa(arrayPeliculas) {
    const peliculasOrdenadasZa = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return b.title.localeCompare(a.title);// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo

    });
    return peliculasOrdenadasZa;
  },

  OrdenaPeliculasAñoReciente(arrayPeliculas) {
    const peliculasOrdenadasAñoReciente = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return b.release_date - a.release_date;// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo
    });
    return peliculasOrdenadasAñoReciente;
  },

  OrdenaPeliculasAñoViejo(arrayPeliculas) {
    const peliculasOrdenadasAñoViejo = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return a.release_date - b.release_date;// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo
    });
    return peliculasOrdenadasAñoViejo;
  },

  OrdenaPeliculasScoreAlto(arrayPeliculas) {
    const peliculasOrdenadasScoreAlto = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return b.rt_score - a.rt_score;// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo

    });
    return peliculasOrdenadasScoreAlto;
  },

  OrdenaPeliculasScoreBajo(arrayPeliculas) {
    const peliculasOrdenadasScoreBajo = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return a.rt_score - b.rt_score;// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo

    });
    return peliculasOrdenadasScoreBajo;
  },


  OrdenaPeliculasProductor(arrayPeliculas, nombreProductor) {
    const resultadoProductor = arrayPeliculas.filter(pelicula => pelicula.producer === nombreProductor);
    if (nombreProductor === "Producers") {
      return arrayPeliculas;
    } else {
      return resultadoProductor;
    }
  },

  OrdenaPeliculasDirector(arrayPeliculas, nombreDirector) {
    const resultadoDirector = arrayPeliculas.filter(pelicula => pelicula.director === nombreDirector);
    if (nombreDirector === "Directors") {
      return arrayPeliculas;
    } else {
      return resultadoDirector;
    }
  },

}
export default data;



