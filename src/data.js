const data = {
    OrdenaPeliculasAz(arrayPeliculas) {
        let peliculasOrdenadas = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
            return a.title.localeCompare(b.title);// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo

        });
        return peliculasOrdenadas;
    },

    OrdenaPeliculasZa(arrayPeliculas) {
        let peliculasOrdenadasZa = arrayPeliculas.reverse((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
            return a.title.localeCompare(b.title);// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo

        });
        return peliculasOrdenadasZa;
    },

    OrdenaPeliculasAño(arrayPeliculas) {
        let peliculasOrdenadasAño = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
            return b.release_date.localeCompare(a.release_date);// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo

        });
        return peliculasOrdenadasAño;
    },

    OrdenaPeliculasScore(arrayPeliculas) {
        let peliculasOrdenadasScore = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
            return b.rt_score - a.rt_score;// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo

        });
        return peliculasOrdenadasScore;
    },

    OrdenaPeliculasBy(arrayPeliculas) {
        return arrayPeliculas;

    },


    OrdenaPeliculasProductor(arrayPeliculas, nombreProductor) {
        const resultadoProductor = arrayPeliculas.filter(pelicula => pelicula.producer == nombreProductor);
        if (nombreProductor == "Producers") {
            return arrayPeliculas;
        } else {
            return resultadoProductor;
        }
    },

    OrdenaPeliculasDirector(arrayPeliculas, nombreDirector) {
        const resultadoDirector = arrayPeliculas.filter(pelicula => pelicula.director == nombreDirector);
        if (nombreDirector == "Directors") {
            return arrayPeliculas;
        } else {
            return resultadoDirector;
        }
    }
}

export default data;



