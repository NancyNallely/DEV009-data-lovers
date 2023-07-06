
import ghibli from "./data/ghibli/ghibli.js";

const selectMovie = document.querySelectorAll('button');
const peopleElement = document.querySelector('#people');

if (selectMovie !== null & peopleElement !== null) {
  selectMovie.forEach(button =>{
    button.addEventListener('click', (event) =>{
      const selectMovieValue = event.target.value;

      let movieTitle ="";
      let movieCharacters = [];
      let numberCharacters = "";

      switch (selectMovieValue) {
      case "0":
        movieTitle = (ghibli.films[0].title);
        movieCharacters = ghibli.films[0].people;
        numberCharacters = ghibli.films[0].people.length;
        break;
      case "1":
        movieTitle = (ghibli.films[1].title);
        movieCharacters = ghibli.films[1].people;
        numberCharacters = ghibli.films[1].people.length;
        break;
      case "2":
        movieTitle = (ghibli.films[2].title);
        movieCharacters = ghibli.films[2].people;
        numberCharacters = ghibli.films[2].people.length;
        break;
      case "3":
        movieTitle = (ghibli.films[3].title);
        movieCharacters = ghibli.films[3].people;
        numberCharacters = ghibli.films[3].people.length;
        break;
      case "4":
        movieTitle = (ghibli.films[4].title);
        movieCharacters = ghibli.films[4].people;
        numberCharacters = ghibli.films[4].people.length;
        break;
      case "5":
        movieTitle = (ghibli.films[5].title);
        movieCharacters = ghibli.films[5].people;
        numberCharacters = ghibli.films[5].people.length;
        break;
      default:
        movieTitle = "";
        movieCharacters = [];
      }     
      const charactersList = createCharactersList(movieCharacters);   
      const html = movieTitle ? "<h2>" + movieTitle + "<br> This movie has " + numberCharacters + " characters</br></h2>" + charactersList :"Selecciona una pelicula ";
      peopleElement.innerHTML = html;
    });
  });
}
function createCharactersList(characters) {
  if (characters.length === 0) {
    return "<p>No se encontraron personajes para esta película.</p>";
  }

  let charactersListHTML = '<div class="name-image">';
  characters.forEach(function(character) {
    charactersListHTML += '<div class="contenedor"' +
                '<h3>' + character.name + ' (' + character.gender + ') </h3>' +
              '<ul>' +'<img src=' + character.img + '/>' +
                  '<li>Age: ' + character.age + '</li>' +
                  '<li>Hair Color: ' + character.hair_color + '</li>' +
                  '<li>Specie: ' + character.specie + '</li>' +
              '</ul>'+'</div>';
  });
  charactersListHTML += '</div>';
        
  return charactersListHTML;
}
