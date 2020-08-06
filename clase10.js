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

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)

  if(persona.ingeniero){
    console.log('Ingeniero')
  } else{
    console.log('No Ingeniero')
  }

  if(persona.cocinero){
    console.log('cocinero')
  }

  if(persona.cantante){
    console.log('cantante')
  }

  if(persona.dj){
    console.log('Dj')
  }

  if(persona.guitarrista){
    console.log('guitarrista')
  }

  if(persona.drones){
    console.log('Piloto drones')
  }

}

function imprimirSiEsMayorDeEdad(persona){
  if(persona.edad >= 18){
  console.log(`${persona.nombre} es mayor de edad: ${persona.edad}`);
} else {
  console.log(` ${persona.nombre} No es mayor de edad: ${persona.edad}` );
}
}
imprimirProfesiones(bryan)
imprimirSiEsMayorDeEdad(bryan)
