//funcion map devuelve un array en el cual modifica los elemenstos que le pasemos.

var bryan = {
  nombre: 'bryan',
  apellido: 'saigua',
  altura: 1.56
}

var juan = {
  nombre: 'juan',
  apellido: 'iza',
  altura: 1.60
}

var henry = {
  nombre: 'Henry',
  apellido: 'porras',
  altura: 1.81
}

const esAlta = ( { altura }) => altura > 1.8
const esBaja = ( { altura }) => altura < 1.8

var personas = [bryan, juan, henry]
var personasAltas = personas.filter(esAlta)

//persona.altura = persona.altura * 100
const pasarAlturaCms = persona => ({
  ...persona,
  altura:  persona.altura * 100
  })
  /*return {
    ...persona,
    altura: persona.altura * 100
}*/

var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms);
