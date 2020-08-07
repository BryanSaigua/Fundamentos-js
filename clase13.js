var bryan = {
  nombre: 'bryan',
  apellido: 'saigua',
  edad: 22,
  peso: 75
}

console.log(`Al inicio del año ${bryan.nombre} pesa ${bryan.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_ANO ; i++) {
  var random = Math.random()

  if(random < 0.25){
      aumentarPeso(bryan)
  }else if(random < 0.5){
      adelgazar(bryan)
  }
}

console.log(`Al final del año ${bryan.nombre} pesa ${bryan.peso.toFixed(2)} kg`)
