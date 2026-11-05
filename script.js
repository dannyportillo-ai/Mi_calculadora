// // stirng
// let container = "buen dia";
// const second = "Buen dia 12";

// //number 
// let edad =  5;

// // bolean
//  let isAdult = true; //true o false

// //aray 
// let persons = [Primero, 23, isBig];

// // JS

// // (=)  Sirve para guardar un valor dentro de una variable.
// //      Ejemplo: let edad = 25; asigna el numero 25 a la variable edad

// // (==) Si los tipos de datos son diferentes, JavaScript intenta convertirlos a un mismo tipo antes de hacer la comparacion.
// //      Ejemplo: '5' == 5 da como resultado true porque convierte el texto '5' en numero.

// // (===) Compara el tipo de dato.
// //       No realiza conversiones automaticas. Si los tipos son diferentes, el resultado es directamente false.
// //       Ejemplo: '5' === 5 da como resultado false porque uno es texto (string) y el otro es numero (number). 
// //       Nota: Se recomienda usar siempre este operador para evitar errores inesperados.

// if (edad < 2) {
//     // proceso
//     console.log("esto es verdadero");
// }

let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");

let botonSumar = document.getElementById("sumar");
let botonRestar = document.getElementById("restar");
let botonMultiplicar = document.getElementById("multiplicar");
let botonDividir = document.getElementById("dividir");

let resultado = document.getElementById("resultado");

botonSumar.addEventListener("click", () => {

    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);

    let suma = valor1 + valor2;

    resultado.textContent = suma;

});

botonRestar.addEventListener("click", () => {

    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);

    let resta = valor1 - valor2;

    resultado.textContent = resta;

});

botonMultiplicar.addEventListener("click", () => {

    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);

    let multiplicacion = valor1 * valor2;

    resultado.textContent = multiplicacion;

});

botonDividir.addEventListener("click", () => {

    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);

    if (valor2 === 0) {
    resultado.textContent = "No se puede dividir entre cero";
} else {
    let division = valor1 / valor2;
    resultado.textContent = division;
}
});

