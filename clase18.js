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
var personasBajas = personas.filter(esBaja)
//var personasAltas = personas.filter(function (persona) { return persona.altura > 1.8})

console.log(personasAltas);
console.log(personasBajas);
