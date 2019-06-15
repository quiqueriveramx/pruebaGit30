/* let titulo = document.getElementById('titulo')
console.log("titutlo") */
/* let parrafo = document.getElementById('perrito')
let button = document.getElementById('button') */
/* let input = document.getElementById('input') */
/* let mostrar = document.getElementById('mostrar')
let imprimir = document.getElementById('imprimir')
let poner = document.getElementById('poner') */


/* titulo.innerHTML = "titulo cambiado" */

/* 

parrafo.innerHTML = "ahora soy gato" */

/*  */

/* const cambio = ()=>{
    titulo.innerHTML = "titulo cambiado"
}
button.addEventListener('click',cambio) */

//funcion anónima-
/* button.addEventListener('click',()=>{
    console.log("si funciona")
})

const inputM = ()=>{
    let texto = input.value

    mostrar.innerHTML = texto
}
button.addEventListener('click', inputM) */

//preguntar al usuario su nombre, libro fav y si prefiere la pizza con piña o no.
//mosntrarlo en 3 etiquetas diferentes con un nuevo boton.

/* const mostrarN = ()=>{
    let texto = mostrar.value
    mostrar.innerHTML = texto
}
button1.addEventListener('click', mostrarN) */

let inputname = document.getElementById('inputname')
let inputbook = document.getElementById('inputbook')
let inputpizza = document.getElementById('inputpizza')

//mostrar

let mostrarN = document.getElementById('mostrarn')
let mostrarB = document.getElementById('mostrarb')
let mostrarP = document.getElementById('mostrarp')

// boton

let boton = document.getElementById('button')

const mostrarAll = ()=>{
    let textName = inputname.value
    let textBook = inputbook.value
    let textPizza = inputpizza.value

    mostrarN.innerHTML = textName
    mostrarB.innerHTML = textBook
    mostrarP.innerHTML = textPizza
}

boton.addEventListener('click', mostrarAll)

//