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
  altura: 1.80
}
//persona[0].altura -- ['altura']
var personas = [bryan, juan, henry]

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura} mts`);
}
