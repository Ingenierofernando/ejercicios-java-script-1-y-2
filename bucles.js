//problema 1
//  let numtabla = prompt("Por favor ingresar el número de la tabla que desea ver");

//  for (let i = 0; i <= 10; i++) {
//      console.log(numtabla + " X " + i + " = " + numtabla*i);
//  }

//problema 2
//  let numacumulado = prompt("ingrese un número");

//  while (numacumulado != 0) {
//      console.log(numacumulado);
//      numacumulado = 0;
//      numacumulado = prompt("ingrese un número");
//  }
//  console.log("El bucle ha finalizado");


//problema 3
// Generar un número aleatorio en el rango de 1 a 100
// const numsecreto = Math.floor(Math.random() * 100) + 1;
// alert(numsecreto)
// console.log(numsecreto);
// let numadivinado = false;
// alert("Bienvenido al juego de adivinar el número entre 1 al 100")
// console.log("Bienvenido al juego de adivinar el número entre 1 al 100");

// for (let intentos = 1; numadivinado === false; intentos++) {
    
//   const intento = parseInt(prompt("Ingresa un número"));
  
  
//   if (intento === numsecreto) {
//     numadivinado = true;
//     alert("Felicidades, adivinaste el número en " + intentos + " intentos")
//     console.log(
//       "Felicidades, adivinaste el número en " + intentos + " intentos"
//     );
//   } else if (intento < numsecreto) {
//     alert("El número es mayor. Intenta nuevamente")
//     console.log("El número es mayor. Intenta nuevamente");
//   } else {
//     alert("El número es menor. Intenta nuevamente")
//     console.log("El número es menor. Intenta nuevamente");
//   }
// }

//problema 4
// let numero = parseInt(prompt("Ingrese un número para verificar si es primo:"));

// if (numero < 2) {
//     console.log(`${numero} no es un número primo.`);
// } else {
//     let esPrimo = true;

//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             esPrimo = false;
//             break;
//         }
//     }

//     let mensaje = esPrimo ? "es un número primo." : "no es un número primo.";
//     console.log(`${numero} ${mensaje}`);
// }


// problema 5

// let numero = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));

// console.log(`Los divisores de ${numero} son:`);

// for (let i = 1; i <= numero; i++) {
//     if (numero % i === 0) {
//         console.log(i);
//     }
// }


// problema 6

// Definir un array con 10 elementos
// let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Recorrer el array y mostrar cada elemento por consola
// console.log("Elementos del array:");

// for (let i = 0; i < miArray.length; i++) {
//     console.log(miArray[i]);
// }

// problema 7

// Definir un array con 10 números
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Mostrar el doble de cada elemento por consola
// console.log("El doble de cada elemento:");

// for (let i = 0; i < numeros.length; i++) {
//     let doble = numeros[i] * 2;
//     console.log(doble);
// }

// problema 8

// Definir un array con objetos que representan a personas en un grupo familiar
// let familia = [
//     { nombre: "Juan", edad: 35, relacion: "Padre", ciudad: "Ciudad Madrid" },
//     { nombre: "María", edad: 30, relacion: "Madre", ciudad: "Ciudad Barcelona" },
//     { nombre: "Pedro", edad: 10, relacion: "Hijo", ciudad: "Ciudad Cataluña" },
//     { nombre: "Ana", edad: 8, relacion: "Hija", ciudad: "Ciudad Cali" },
//     { nombre: "Abuela", edad: 65, relacion: "Abuela", ciudad: "Ciudad Mexico" }
// ];

// // Mostrar un mensaje de presentación por cada persona en la familia
// console.log("Mensajes de presentación:");

// for (let i = 0; i < familia.length; i++) {
//     let persona = familia[i];
//     console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.relacion} y vivo en ${persona.ciudad}.`);
// }

// problema 9

// Definir un array con 10 números
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Mostrar solo los números impares por consola
// console.log("Números impares:");

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) {
//         console.log(numeros[i]);
//     }
// }

// problema 10

// let sumaPares = 0;
// let sumaImpares = 0;

// while (true) {
//     let numero = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));

//     if (numero === 0) {
//         break; // Salir del bucle si el usuario ingresa 0
//     }

//     if (numero % 2 === 0) {
//         // Sumar al total de pares si el número es par
//         sumaPares += numero;
//     } else {
//         // Sumar al total de impares si el número es impar
//         sumaImpares += numero;
//     }
// }

// console.log(`La suma de los números pares es: ${sumaPares}`);
// console.log(`La suma de los números impares es: ${sumaImpares}`);

// problema 11

// Definir un array con 10 números
// let numeros = [45, 67, 23, 98, 12, 56, 34, 89, 72, 5];

// // Encontrar el número más grande
// let numeroMasGrande = numeros[0]; // Suponemos que el primer número es el más grande

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > numeroMasGrande) {
//         numeroMasGrande = numeros[i];
//     }
// }

// // Imprimir el número más grande por pantalla
// console.log(`El número más grande es: ${numeroMasGrande}`);

// problema 12 

// Definir un array con 10 números
// let numeros = [45, 67, 23, 98, 12, 56, 34, 89, 72, 5];

// // Encontrar el número más grande
// let numeroMasChico = numeros[0]; // Suponemos que el primer número es el más grande

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] < numeroMasChico) {
//         numeroMasChico = numeros[i];
//     }
// }

// // Imprimir el número más chico por pantalla
// console.log(`El número más chico es: ${numeroMasChico}`);

// problema 13

// Solicitar los nombres de los jugadores
// let jugador1 = prompt("Ingrese el nombre del jugador 1:");
// let jugador2 = prompt("Ingrese el nombre del jugador 2:");

// // Bucle del juego
// while (true) {
//     // Solicitar la mano de cada jugador
//     let manoJugador1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`);
//     let manoJugador2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`);

//     // Verificar las manos para determinar el ganador
//     if (manoJugador1 === manoJugador2) {
//         console.log("Empate. ¡Jugamos de nuevo!");
//     } else {
//         // Determinar el ganador
//         let ganador = determinarGanador(manoJugador1, manoJugador2);

//         // Mostrar el nombre del ganador y salir del bucle
//         console.log(`¡${ganador} gana!`);
//         break;
//     }
// }

// // Función para determinar el ganador
// function determinarGanador(mano1, mano2) {
//     if (
//         (mano1 === "piedra" && mano2 === "tijeras") ||
//         (mano1 === "papel" && mano2 === "piedra") ||
//         (mano1 === "tijeras" && mano2 === "papel")
//     ) {
//         return jugador1;
//     } else {
//         return jugador2;
//     }
// }

// problema 14


// Bucle para imprimir cada línea del triángulo
// for (let i = 1; i <= 5; i++) {
//     let linea = '';
    
//     // Agregar asteriscos a la línea
//     for (let j = 1; j <= i; j++) {
//         linea += '*';
//     }
    
//     // Imprimir la línea por consola
//     console.log(linea);
// }

// problema 15

// Bucle para imprimir cada línea del triángulo invertido
// for (let i = 5; i >= 1; i--) {
//     let linea = '';
    
//     // Agregar asteriscos a la línea
//     for (let j = 1; j <= i; j++) {
//         linea += '*';
//     }
    
//     // Imprimir la línea por consola
//     console.log(linea);
// }

