var bryan = {
  nombre: 'bryan',
  apellido: 'saigua',
  altura: 1.56,
  libros: 100
}

var juan = {
  nombre: 'juan',
  apellido: 'iza',
  altura: 1.60,
  libros: 105
}

var henry = {
  nombre: 'Henry',
  apellido: 'porras',
  altura: 1.81,
  libros: 130
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

/*var acum = 0

for (var i = 0; i < personas.length; i++) {
  acum = acum + personas[i].libros
}*/

const reducer = (acum,{ libros }) => acum + libros

var totalDeLibros = personas.reduce(reducer, 0)
console.log(`En total todos tiene ${totalDeLibros} libros `);
