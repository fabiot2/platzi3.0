//Arrays

// const miArray = ["David", "Juan", "Kevin"];

// console.log(miArray);


//Array Elegir elemento

// const miArray = ["David", "Juan", "Kevin"];

// var nombre = miArray[1];

// console.log(nombre);



//Array.push Agregar elementos Final

// const miArray = ["David", "Juan", "Kevin"];

// miArray.push(`Carlos`);

// console.log(miArray);



//Array.unshift Agregar elementos Inicio

// const miArray = ["David", "Juan", "Kevin"];

// miArray.unshift(`Carlos`);

// console.log(miArray);



//Array.pop Quitar elementos final

// const miArray = ["David", "Juan", "Kevin"];

// let final = miArray.pop();

// console.log(miArray);
// console.log(final);


//Array.unshift Quitar elemento inicio

// const miArray = ["David", "Juan", "Kevin"];

// let inicio = miArray.shift();

// console.log(miArray);
// console.log(inicio);


//Recomendada aprender

// const nombres = ["David", "Juan", "Kevin"];

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }

//Moderno y limpio

// const nombres = ["David", "Juan", "Kevin"];

// nombres.forEach(function(nombre) {
//     console.log(nombre);
// });


//Arrow Function + Corta
// nombres.forEach (nombres => {
//     console.log(nombres);
// })

//Forma Clara
// for (const nombre of nombres) {
//     console.log(nombre);
// }

//segun es la mas nueva


//Crear Objetos

// const persona = {
//     nombre: `David`,
//     edad: `24`,
//     comidaFavorita:`Hamburguesas`,
// }

// persona. deporteF = `Tenis`;
// console.log(persona.deporteF);

//Editar Propiedad

// const persona = {
//     nombre: `David`,
//     edad: `24`,
//     comidaFavorita:`Hamburguesas`,
// }

// persona.edad = 31;
// console.log(persona.edad);


// Agregar una propiedad

// const persona = {
//     nombre: `David`,
//     edad: `24`,
//     comidaFavorita:`Hamburguesas`,
// }

// persona. deporteF = `Tenis`;
// console.log(persona.deporteF);



// Borrar una propiedad
// const persona = {
//     nombre: `David`,
//     edad: `24`,
//     comidaFavorita:`Hamburguesas`,
// }

// delete persona.comidaFavorita;
// console.log(persona);


// Recorrer/iterar un Objeto
// const persona = {
//     nombre: `David`,
//     edad: `24`,
//     comidaFavorita:`Hamburguesas`,
// }

// for (let key in persona) {
//     console.log(key,persona[key]);
// }

// // Imprime: 
// // nombre David
// // edad 24
// // comidaFavorita Hamburguesas


// Combinar Objetos con Array

// const arrayDeObjetos = [
// {
//     nombre: `Miguel`,
//     edad: `21`,
//     comidaFavorita:`Pizza`,
// },
// {
//     nombre: `Angel`,
//     edad: `23`,
//     comidaFavorita:`Sushi`,
// },
// {
//     nombre: `Steven`,
//     edad: `29`,
//     comidaFavorita:`Shawarma`,
// },
// {
//     nombre: `David`,
//     edad: `32`,
//     comidaFavorita:`Hamburguesa`,
// },
// ];

// for (let i = 0; i < arrayDeObjetos.length; i++) {
//     console.log(`Comida Favorita: ` + arrayDeObjetos[i].comidaFavorita);
//     console.log(`Nombre: ` + arrayDeObjetos[i].nombre);
//     console.log(`Edad: ` + arrayDeObjetos[i].edad);
//     console.log(`=============================`);

// }


// Objeto con Array

// const objetoConArray = {
//     nombre: `Objeto con Array`,
//     arr: [`abeja`, `banana`, `camion`, `dado`],
// };

// objetoConArray.arr.forEach(elemento => {
//     console.log(elemento + ` jajaja`);
// })

// for (let i = 0; i < objetoConArray.arr.length; i++) {
//     console.log(objetoConArray.arr[i] + `jajaja2`);
// }