
// importamos el objeto 'data', que contiene las funciones
import data from '../src/data.js';

describe('data', () => {
  describe('data.OrdenaPeliculasAz', () => {
    it('debería ordenar las peliculas de la A-Z', () => {
      const actual = [
        { title: "My Neighbor Totoro" },
        { title: "Castle in the Sky" },
        { title: "Princess Mononoke" },
      ];
      const expected = [
        { title: "Castle in the Sky" },
        { title: "My Neighbor Totoro" },
        { title: "Princess Mononoke" },
      ];
      expect(data.OrdenaPeliculasAz(actual, '1', 0)).toEqual(expected);
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasZa', () => {
    it('debería ordenar las peliculas de la Z-A', () => {
      const actual = [
        { title: "My Neighbor Totoro" },
        { title: "Castle in the Sky" },
        { title: "Princess Mononoke" },
      ];
      const expected = [
        { title: "Princess Mononoke" },
        { title: "My Neighbor Totoro" },
        { title: "Castle in the Sky" },
      ];
      expect(data.OrdenaPeliculasZa(actual, '2', 0)).toEqual(expected);
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasAñoReciente', () => {
    it('debería ordenar las peliculas por año del mas reciente al mas viejo', () => {
      const actual = [
        { release_date: "2008" },
        { release_date: "2013" },
        { release_date: "2002" },
      ];
      const expected = [
        { release_date: "2013" },
        { release_date: "2008" },
        { release_date: "2002" },

      ];
      expect(data.OrdenaPeliculasAñoReciente(actual, '3', 0)).toEqual(expected);
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasAñoViejo', () => {
    it('debería ordenar las peliculas por año del mas viejo al mas reciente', () => {
      const actual = [
        { release_date: "2008" },
        { release_date: "2013" },
        { release_date: "2002" },
      ];
      const expected = [
        { release_date: "2002" },
        { release_date: "2008" },
        { release_date: "2013" },

      ];
      expect(data.OrdenaPeliculasAñoViejo(actual, '4', 0)).toEqual(expected);
    });
  });
});


describe('data', () => {
  describe('data.OrdenaPeliculasScoreAlto', () => {
    it('debería ordenar las peliculas por Score del mas alto al bajo', () => {
      const actual = [
        { rt_score: "78" },
        { rt_score: "100" },
        { rt_score: "75" },
      ];
      const expected = [
        { rt_score: "100" },
        { rt_score: "78" },
        { rt_score: "75" },
      ];
      expect(data.OrdenaPeliculasScoreAlto(actual, '5', 0)).toEqual(expected);
    });
  });
});


describe('data', () => {
  describe('data.OrdenaPeliculasScoreBajo', () => {
    it('debería ordenar las peliculas por Score del mas bajo al alto', () => {
      const actual = [
        { rt_score: "78" },
        { rt_score: "100" },
        { rt_score: "75" },
      ];
      const expected = [
        { rt_score: "75" },
        { rt_score: "78" },
        { rt_score: "100" },


      ];
      expect(data.OrdenaPeliculasScoreBajo(actual, '6', 0)).toEqual(expected);
    });
  });
});