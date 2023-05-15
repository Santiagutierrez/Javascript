// let edad = parseInt(prompt("Ingrese su edad"));

//  if(edad < 14){
//    alert("No puedes entrar a este sitio web");
//  }else if(edad < 18){
//    alert("Puedes entrar con la supervision de un adulto");
//  }else{
//    alert("Puedes entrar a la pagina web");
//  }

//  alert ("bienvenido al mundo de la fotografia analogica!")


//  let cantidadPersonas = parseInt(prompt("Indique cuantas personas veran el sitio"));
//  let eP;
//  let sP = 0;
//  let n;

//  for (n=1;n<=cantidadPersonas;n++){
//   eP = parseInt(prompt("Ingrese la edad de la persona"+n));

//   sP = sP + eP;
//  }

//   console.log (`El promedio de las edades de las ${cP} personas es: ${sP/cantidadPersonas}`);

var precioCamara = 32000
var precioCamara1 = 43000
var precioCamara2 = 25000

var sumaDeCamaras = precioCamara + precioCamara1;
var sumaDeCamaras1 = precioCamara + precioCamara2;
var sumaDeCamaras2 = precioCamara1 + precioCamara2;

console.log(sumaDeCamaras);
console.log(sumaDeCamaras1);
console.log(sumaDeCamaras2);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioproducto = precioCamara;
let descuento = 10;

let nuevoPrecio = resta(suma(precioproducto, iva(precioproducto)), descuento);

console.log(nuevoPrecio); 

let camara = {
    Marca: "Nikon",
    Modelo: 13,
    Año: 1985,
    Disparos: 4536,
    Garantia: false,
    Precio: precioCamara,
};
console.log(camara);

let camara1 = {
    Marca: "Canon",
    Modelo: 53,
    Año: 1964,
    Disparos: 10435,
    Garantia: false,
    Precio: precioCamara1,
};
console.log(camara1);

let camara2 = {
    Marca: "Zenit",
    Modelo: 43,
    Año: 1954,
    Disparos: 20365,
    Precio: precioCamara2,
};
console.log(camara2);


const arrayCamaras = [camara, camara1, camara2];
const cantidad = arrayCamaras.length;
console.log(cantidad);

var busqueda = arrayCamaras.find(function(equiposDeCamaras){
    return equiposDeCamaras == camara;
});
    if(busqueda){
        console.log("camara esta en stock");
    } else{
        console.log("la camara no esta en stock");
    }

console.log(busqueda);


var busqueda = arrayCamaras.find(function(equiposDeCamaras){
    return equiposDeCamaras == camara1;
});
    if(busqueda){
        console.log("camara esta en stock");
    } else{
        console.log("la camara no esta en stock");
    }

console.log(busqueda);


var busqueda = arrayCamaras.find(function(equiposDeCamaras){
    return equiposDeCamaras == camara2;
});
    if(busqueda){
        console.log("camara esta en stock");
    } else{
        console.log("la camara no esta en stock");
    }

console.log(busqueda);


var busqueda = arrayCamaras.find(function(equiposDeCamaras){
    return equiposDeCamaras == "camara3";
});
    if(busqueda){
        console.log("camara esta en stock");
    } else{
        console.log("la camara no esta en stock");
    }

console.log(busqueda);
