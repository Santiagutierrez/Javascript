 let edad = parseInt(prompt("Ingrese su edad"));

 if(edad < 14){
   alert("No puedes entrar a este sitio web");
 }else if(edad < 18){
   alert("Puedes entrar con la supervision de un adulto");
 }else{
   alert("Puedes entrar a la pagina web");
 }

 alert ("bienvenido al mundo de la fotografia analogica!")


 let cP = parseInt(prompt("Indique cuantas personas veran el sitio"));
 let eP;
 let sP = 0;
 let n;

 for (n=1;n<=cP;n++){
  eP = parseInt(prompt("Ingrese la edad de la persona"+n));

  sP = sP + eP;
 }

  console.log (`El promedio de las edades de las ${cP} personas es: ${sP/cP}`);


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioproducto = 1000;
let descuento = 10;

let nuevoPrecio = resta(suma(precioproducto, iva(precioproducto)), descuento);

console.log(precioproducto);