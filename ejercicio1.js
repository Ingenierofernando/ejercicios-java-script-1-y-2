// let miNombre = "Fernando";
// let miApellido = "Cardona"
// let miEdad = 35;
// let miMascota = "Luna";
// let edadMascota = 2;
// console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);

// let nombreCompleto = "Fernando" + "Cardona"
// let textoPresentacion = "Mi nombre es" + miNombre + "mi apellido es" + miApellido + "tengo " + miEdad + "años de edad" + "no tengo máscota este nombre " + miMascota + "es invetado y la edad de" + edadMascota + "años también.";

// let sumaEdades = miEdad + edadMascota;
// let restaEdades = miEdad - edadMascota;
// let productoEdades = miEdad * edadMascota;
// let divisionEdades = miEdad / edadMascota;

// // Paso 1: Cargar miNombre con prompt

// miNombre = prompt("Por favor, ingrese su primer nombre:");
// // Paso 2: Cargar miApellido con prompt
// miApellido = prompt("Por favor, ingrese su apellido:");
// // Paso 3: Cargar miEdad con prompt
// miEdad = parseInt(prompt("Por favor, ingrese su edad:"));
// // Paso 4: Cargar miMascota con prompt
// miMascota = prompt("Por favor, ingrese el nombre de su mascota:");
// // Paso 5: Cargar edadMascota con prompt
// edadMascota = parseInt(prompt("Por favor, ingrese la edad de su mascota:"));

// // Paso 6: Mostrar todas las variables en la consola
// console.log("miNombre:", miNombre);
// console.log("miApellido:", miApellido);
// console.log("miEdad:", miEdad);
// console.log("miMascota:", miMascota);
// console.log("edadMascota:", edadMascota);

// // Paso 7: Crear nombreCompleto con la concatenación
// nombreCompleto = miNombre + " " + miApellido;

// // Paso 8: Crear textoPresentacion
// textoPresentacion = `Hola, soy ${nombreCompleto}, tengo ${miEdad} años y mi mascota se llama ${miMascota} y tiene ${edadMascota} años.`;

// // Paso 9: Realizar operaciones matemáticas
// sumaEdades = miEdad + edadMascota;
// restaEdades = miEdad - edadMascota;
// productoEdades = miEdad * edadMascota;
// divisionEdades = miEdad / edadMascota;

// // Paso 10: Mostrar resultados en la consola
// console.log("nombreCompleto:", nombreCompleto);
// console.log("textoPresentacion:", textoPresentacion);
// console.log("sumaEdades:", sumaEdades);
// console.log("restaEdades:", restaEdades);
// console.log("productoEdades:", productoEdades);
// console.log("divisionEdades:", divisionEdades);

// let alumno = {
//     Nombre: "juanito", Apellido: "ortiz", grado: 7, colegio: "corazones", edad: 15
// };

// console.table(alumno);
// console.table(alumno.Nombre, alumno.Apellido, alumno.grado, alumno.colegio, alumno.edad);

// let mascota ={
// nombre:"luna", edad:3, raza:"pit Bull", vacunas:true, dueño:true
// };

// console.table(mascota);
// console.table(mascota.nombre, mascota.edad, mascota.raza, mascota.vacunas, mascota.dueño);

// let frutas = ["manzanas", "mangos", "lulos", "fresas", "maracuyas"];
// console.log(frutas);
// console.log(frutas[0],frutas[1],frutas[2],frutas[3],frutas[4]);

// let numeros = [1, 2, 3, 4, 5];
// console.log(numeros);
// console.log(numeros[0],numeros[1],numeros[2],numeros[3],numeros[4]);

// let familia = ["papa", "mama", "hija", "hijo", "hermano"];
// console.log(familia);
// console.log(familia[0],familia[1],familia[2],familia[3],familia[4]);

// let textoAleatorio = "tengo varios " + frutas[1] + ", para ser más exactos tengo " + numeros[3] + ", para regalárselos a mi " + familia[4];

// miEdad = prompt("ingresar mi edad");
// let edadcompañero = prompt("ingresar edad del compañero");

// let edadesIguale = miEdad==edadcompañero;
// let soyMayor =  miEdad>edadcompañero;
// let soyMenor = miEdad<edadcompañero;

// console.log("Mi edad es igual a la de mi compañero: " + edadesIguale);
// console.log("Mi edad es mayor a la de mi compañero: " + soyMayor);
// console.log("Mi edad es menor a la de mi compañero: " + soyMenor);


// let numero = 18
// let soyMayorDeEdad = miEdad>numero;
// console.log("soy mayor de edad: " + soyMayorDeEdad);

// let edadpersona = prompt("Ingrese su edad por favor para saber si puede subir");
// let alturapersona= prompt("Ingrese su altura por favor");

// let  puedeSubir = edadpersona > 6 && alturapersona >=120;
// console.log("Puede subir a la atracción: " + puedeSubir );

// let pasepersona = prompt("Por favor ingresar el pase que tiene: 'VIP', 'NORMAL' o 'LIMITADO'");
// let saldodisponible = prompt("por favor ingresar el saldo disponible");

// let vip = pasepersona=="VIP" || pasepersona=="vip";
// let normal = pasepersona=="NORMAL" || pasepersona=="normal";
// let limitado = pasepersona=="LIMITADO" || pasepersona=="limitado";
// const puedePasar = vip || saldodisponible > 1000;

// console.log("La persona puede pasar: " + puedePasar);