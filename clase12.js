var bryan = {
  nombre: 'Bryan',
  apellido: 'Saigua',
  edad: 18,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drones: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

const MAYORIA_DE_EDAD = 18


/*const esMayorDeEdad =  function(persona) { //funcion anonima
  return persona.edad >= MAYORIA_DE_EDAD
}*///igual

const esMayorDeEdad =  ({ edad }) =>  edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
  if( esMayorDeEdad(persona)){
  console.log(`${persona.nombre} es mayor de edad: ${persona.edad}`);
} else {
  console.log(` ${persona.nombre} No es mayor de edad: ${persona.edad}` );
}
}

function permitirAcceso(persona){
  if(!esMayorDeEdad(persona))
  console.log('ACCESO DENEGADO');
}
