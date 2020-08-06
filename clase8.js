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

function imprimirNombreEnMayusculas(persona){
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(nombre)
imprimirNombreEnMayusculas(nombre1)

function cumpleanos(persona){
  return  {
    ...persona,
    edad: persona.edad + 1
  }
  //persona.edad = persona.edad + 1
}
