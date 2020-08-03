var nombre = {
  nombre: 'Bryan',  //clave --- valor
  apellido: 'Saigua',
  edad: 22
}

var nombre1 = {
  nombre: 'Dario',  //clave --- valor
  apellido: 'Susnisky',
  edad: 23
}

/*function imprimirNombreEnMayusculas(persona){
  //var nombre =persona.nombre.toUpperCase()
  //console.log(nombre)
  console.log(persona.nombre.toUpperCase())
}*/

function imprimirNombreEnMayusculas({ nombre }){
  //var nombre =persona.nombre.toUpperCase()
  //console.log(nombre)
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(nombre)
imprimirNombreEnMayusculas(nombre1)
//imprimirNombreEnMayusculas({ nombre: 'pepito'})
imprimirNombreEnMayusculas({ apellido: 'gomez'})
