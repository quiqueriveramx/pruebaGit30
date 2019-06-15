//condicionales- toma de desiciones

/* if (condition) {
    pasos a efectuar  dependiendo la condicion
} else {
    pasos a efectuar en cado de que no se cumpla la condicion
} */

//> < = == === >= <=

/* let nombre = "Billy";
let edad = prompt( nombre + " ingresa tu edad")
let edadLegal = 18;

if (edad < edadLegal) {
    console.log("No puedes entrar, niño")
} else {
    console.log("Puedes pasar dude")
} */

/* let nombre = "Billy";
let edad = prompt(nombre + " ingresa tu edad")

if (edad >= 18){
    console.log("Puedes conducir con licencia")
} else if(edad > 15){
    console.log("Puedes conducir con un permiso")
}else{
    console.log(nombre + " no puedes conducir, peque")
} */

//crear una contraseña y evaluar si escriben la contraseña mostrar en consola "puedes pasar", si erran "contraseña es incorrecta"
// = va a asignar un valor 
// == compara valores sin fijarse en el dato
// === compara valores fijarse que sea el mismo tipo de dato ESTE ES EL QUE HAY QUE USAR

/* let nombre = "Billy";
let contraseña = prompt(nombre + " ingresa la contraseña")
if (contraseña === "123456789") {
    console.log("Eres miembro")
} else if(contraseña = 123456781){
    console.log("Nel ábrete mijo")
} */

//Operadores lógicos
//&&( si se cumple dos condiciones ejecuta éste código ||(se cumple una condición) ! (realiza, un true or false)

// hacer piedra papel o tijera en condiciones. Debe jugarse entre dos personas.

/* let jugador1 = prompt("Ingresa nombre")

let jugador2 = prompt("Ingresa nombre") */

/* var numero;

  numero=prompt('Ingrese valor del numero:','');

  if (numero % 2 === 0)
  {
    console-log('El numero introducido es par');
  }
  else {console.log ('El numero introducido es impar');} */
  var piedra = "piedra"
  var papel = "papel"
  var tijera = "tijera"

  let jugador1 = prompt("Ingresa piedra, papel o tijera")
  let jugador2 = prompt("Ingresa piedra, papel o tijera")

  if (jugador1 === jugador2) {
    console.log("Es un empate");
  } else  if (jugador1 === piedra) {  
    if(jugador2 === papel){
    console.log("Jugador 1 pierdes :(") 
}

if (jugador1 === jugador2) {
    console.log("Es un empate");
  } else  if (jugador1 === papel) {  
    if(jugador2 === tijera){
    console.log("Jugador 2 pierdes :(")
}

if (jugador1 === jugador2) {
    console.log("Es un empate");
  } else  if (jugador1 === tijera) {  
    if(jugador2 === piedra){
    console.log("Jugador 2 pierdes :(")
}

if (jugador1 === jugador2) {
    console.log("Es un empate");
  } else  if (jugador1 === tijera) {  
    if(jugador2 === papel){
    console.log("Jugador 2 pierdes :(")
}