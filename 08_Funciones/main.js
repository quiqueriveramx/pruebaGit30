/* function sum (){
    console.log(4 + 6)
}

function res(){
    console.log(10-5)
}

sum()
res() */

/* function sum (a,b){
    return a + b 
}

sum(10,50)

console.log(sum(10,50))
console.log(sum(1,5))
console.log(sum(2,5)) */

//funcion que reciba 4 parámetros, que los reste y mostrarlo en consola

/* function res(a,b,c,d){
    return a - b - c - d
}

res(15,20,13,40)

console.log(res(15,20,13,40)) */

/* function sum(a,b,){
    return a + b 
}

function res(c,d,){
    return c - d 
}

console.log(sum(1,res(4,3))) */

/* const sum = (a,b) =>{
    return a+b
}
console.log(sum(5,5)) */

//Arrow function que multplique 3 numeros y otra que divida 2 numeros

/* const multplique = (a,b,c) =>{
    return a * b * c
}
console.log (multplique(5,5,5))

const divida = (f,g) =>{
    return f / g
}
console.log(divida(5,5)) */

//funcion que calcula el area de un cuadrado y otra el area de un rectangulo.

/* const cuadrado = (a) =>{
    return a * a
}
console.log (cuadrado(5))

const rectangulo = (b,c) =>{
    return b * c
}
console.log (rectangulo(2,3)) */

/* const frase = (a,b,c,d,f,g) =>{
    return a + " " + b + " " + c + " " + d + " " + f
}
console.log (frase("cinta","blanca","es","cool",":)")) */

//factorial=es el resultado de la multiplicacion de sus antecesores 1x2x3x4x5x6x7x8x9x10

const fact = (x) => {
    let resultado = 1
    for (let i = 1; i <= x; i++){ 
        resultado = resultado * i
    }
        console.log(resultado)
    }
fact(10);