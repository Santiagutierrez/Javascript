// let numeroUno = parseFloat(prompt("increse el primer numero"));
// let numeroDos = parseFloat(prompt("ingrese el segundo numero"));


// alert (numeroUno + numeroDos)
/*
= asignacion
== comparacion solo del valor
=== comparacion del valor y el tipo
*/

/* 
estructura del condicional if
if(condicion o valor){
  codigo a ejecutar cuando la condicion es verdadera
}
*/

/* 
= asingnacion
== comparacion de solo el valor
=== comparcion de valor y de tipo
*/

// if(false){
//   console.log("Entramos");
// }

// let nombre = "andres";

// if(nombre === "pepito"){
//   console.log("Hola pepito");
// }

// if(-1){
//   console.log("hola");
// }

/* 
estructura del condicional if else
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion no es verdadera
}
*/

// let respuesta = prompt("Terminaste la tarea");

// if(respuesta.toLowerCase() === "si"){
//   alert("Puedes salir a jugar");
// }else{
//   alert("No puedes salir a jugar");
// }

// let nombre = prompt("Ingrese el nombre del usuario");

// if(nombre === ""){
//   alert("Usuario vacio");
// }else{
//   alert(`Nombre ingresado ${nombre}`);
// }

/* 
estructura del if else if
if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones anteriores es veradera
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad < 14){
//   alert("No puedes entrar a la fiesta");
// }else if(edad < 18){
//   alert("Puedes entrar con un adulto");
// }else{
//   alert("Puedes entrar a la fiesta");
// }

/* 
condicion1 && condicion2 es verdadero cuando ambas condiciones son verdaderas
condicion1 || condicion2 es verdadero cuando al menos una de las condiciones es verdadera
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if(nombre != "" && apellido != ""){
//   alert(`Nombre: ${nombre} Apellido: ${apellido}`);
// }else{
//   alert("ingresar nombre y apellido");
// }

// let nombre = prompt("Ingrese el nombre");

// if(nombre != "" && (nombre === "ANDRES" || nombre === "andres")){
//   alert("Hola andres");
// }else{
//   alert("Nombre desconocido");
// }

// let nombre = prompt("Ingrese el nombre");

// if(nombre != "" && nombre.toLowerCase() === "andres" ){
//   alert("Hola andres");
// }else{
//   alert("Nombre desconocido");
// }

// let nombre = prompt("Ingrese el nombre");

// if(nombre != ""){
//   alert(`Hola ${nombre}`);
// }else{
//   alert("Nombre desconocido");
// }


//let nombre = prompt ("ingrese su nombre")

//if (nombre != "") {
//    alert (`Hola ${nombre}`)
//}else {
//    alert ("Vuelva a ingresar su nombre")
//}

/* for(let numero = 1; numero <= 20; numero++){
  if(numero % 2 === 0){
    continue;
  }

  console.log(numero);
} */

/* let entrada = prompt("Tabla del 2");

while (entrada != "10") {
  switch (entrada) {
    case "2x0":
      alert("0");
      break;

    case "2x1":
      alert("2");
      break;

    case "2x2":
      alert("4");
      break;
    
    case "2x3":
      alert("6");
      break;

    case "2x4":
      alert("8");
      break;

    case "2x5":
      alert(10);
      break;
    
    case "2x6":
      alert(12);
      break;

    case "2x7":
      alert(14);
      break;

    case "2x8":
      alert(16);
      break;

    case "2x9":
      alert(18);
      break;
    default:
      alert("Llegamos hasta aca");
      break;
  }

  entrada = prompt("tabla del 2");
} */

/*  for(let turno = 1; turno <= 7; turno++){
   let nombre = prompt("Ingrese su nombre");

   alert(`Turno #${turno} Nombre: ${nombre}`);
 } */

 /*  let usuario = prompt("Ingrese el usuario");

 while(usuario != "pepito"){
   alert("Usuario incorrecto");
   usuario = prompt("Ingrese el usuario");
 }

 alert("Bienvenido");
  */


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioproducto = 1000;
let descuento = 10;

let nuevoPrecio = resta(suma(precioproducto, iva(precioproducto)), descuento);

console.log(precioproducto);
alert ("el precio sera")