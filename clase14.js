var bryan = {
  nombre: 'bryan',
  apellido: 'saigua',
  edad: 22,
  peso: 75
}

console.log(`Al inicio del año ${bryan.nombre} pesa ${bryan.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = bryan.peso - 3
var dias = 0

while (bryan.peso > META) {
  //debugger
  if (comeMucho()){
    aumentarPeso(bryan)
  }
  if(realizaDeporte()){
    adelgazar(bryan)
  }
  dias += 1
}

/*for (var i = 1; i <= DIAS_DEL_ANO ; i++) {
  var random = Math.random()

  if(random < 0.25){
      aumentarPeso(bryan)
  }else if(random < 0.5){
      adelgazar(bryan)
  }
}*/

console.log(`Pasaron ${dias} dias hasta que aldelgazo 3kg`)
