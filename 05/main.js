/* let objeto = {
    nombre: "Quique",
    edad: 27,
    direccion: {
        calle: "Poniente 152",
        numero: 2,
        callesAdyacentes: ["Poniente 148","Calzada Vallejo","Poniente 146"]
    },
    bandasFavoritas:["Maroon 5, ","The Killers, ","U2."],
    feliz: true
}
console.log(objeto.direccion.callesAdyacentes[1]) */

//Crear un objeto sobre ustedes con nombre, a qué se dedica, dirección, si han tenido mascotas y sus nombres, lenguajes de programación que conozcan.

let objeto = {
    nombre: "Quique",
    profesión: "Marketeer",
    direccion: {
        calle: "Poniente 152",
        numeroExterior: 2,
        acceso: "A",
        numeroInterior: 501,
        colonia: "Unidad Lindavista Vallejo",
        delegacion: "Gustavo A. Madero",
        estado: "CDMX",
    },
    mascotas: {
        Mishira: "15 años",
        Misha: "11 años",
        Manchas: "5 años",
    },
    lenguajesDeProgramacion: ["JavaScript", "Ruby", "Python", "Php", "C++","Perl"],
}
console.log(objeto.mascotas.Mishira)