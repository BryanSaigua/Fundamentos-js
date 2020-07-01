var nombre = 'Bryan', apellido = "Saigua"

var nombreEnMaysculas = nombre.toUpperCase()//mayusculas
var apellidoEnMinusculas = apellido.toLowerCase()//minusculas

var primeraLetraDelNombre = nombre.charAt(0)//posicion
var cantidadLetrasNombre = nombre.length//tama;o

//var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`//muestre la varibales

//var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1,2)//letras en las posiciones
