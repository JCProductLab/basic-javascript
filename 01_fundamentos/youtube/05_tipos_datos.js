// DATOS PRIMITIVOS

// Tipos de datos primitivos:
// 1. Number (Números): Representa tanto números enteros como decimales. 
let numeroEntero = 42;
let numeroDecimal = 3.14;

// 2. String (Cadenas de texto): Representa secuencias de caracteres. Se pueden definir usando comillas simples (' '), dobles (" ") o backticks (` `). 
let cadenaSimple = 'Hola'; // comillas simples
let cadenaDoble = "Mundo"; // comillas dobles
let cadenaBackticks = `JavaScript`; // backticks 

// 3. Boolean (Booleanos): Representa valores lógicos, que pueden ser true (verdadero) o false (falso).
let esVerdadero = true;
let esFalso = false;

// 4. Undefined (Indefinido): Representa una variable que ha sido declarada pero no se le ha asignado ningún valor.
let variableIndefinida; // valor es undefined

// 5. Null (Nulo): Representa la ausencia intencional de cualquier valor u objeto.
let valorNulo = null; // valor es null

// 6. Symbol (Símbolo): Introducido en ES6, representa un valor único e inmutable que puede ser utilizado como identificador para propiedades de objetos.
let simboloUnico = Symbol('descripcion');

// 7. BigInt: Introducido en ES2020, permite representar números enteros muy grandes que exceden el límite de los números normales en JavaScript.
let numeroGrande = 1234567890123456789012345678901234567890n; // nota la 'n' al final
let otroNumeroGrande = BigInt("1234567890123456789012345678901234567890"); // usando la función BigInt()


// Puedes verificar el tipo de dato utilizando el operador typeof:
console.log(typeof numeroEntero); // "number"
console.log(typeof cadenaSimple); // "string"
console.log(typeof esVerdadero); // "boolean"
console.log(typeof variableIndefinida); // "undefined"
console.log(typeof valorNulo); // "object" (esto es un comportamiento histórico de JavaScript)
console.log(typeof simboloUnico); // "symbol"
console.log(typeof numeroGrande); // "bigint"

// DATOS NO PRIMITIVOS

// Tipo de dato no primitivo:
// 1. Object (Objeto): Es una colección de propiedades, donde cada propiedad es una asociación entre un nombre (clave) y un valor. Los objetos pueden contener múltiples valores y tipos de datos, incluidos otros objetos.
let objetoEjemplo = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: false
};

// Puedes verificar el tipo de dato utilizando el operador typeof:
console.log(typeof objetoEjemplo); // "object"

// Resumen:
// Los datos primitivos son tipos de datos simples e inmutables, mientras que los datos no primitivos, como los objetos, son estructuras más complejas que pueden contener múltiples valores y tipos de datos.

// Es importante entender estos tipos de datos para manipular y trabajar con la información en JavaScript de manera efectiva.

// Nota:
// En JavaScript, casi todo es un objeto, incluidos los arrays y las funciones, que son tipos especiales de objetos. Sin embargo, los arrays y las funciones tienen sus propias características y comportamientos específicos.

// Por ejemplo, un array es una colección ordenada de valores, mientras que una función es un bloque de código diseñado para realizar una tarea específica.

// Ejemplo de array:
let arrayEjemplo = [1, 2, 3, 4, 5];
console.log(typeof arrayEjemplo); // "object"

// Ejemplo de función:
function funcionEjemplo() {
    return "Hola desde la función";
}
console.log(typeof funcionEjemplo); // "function"

// Aunque los arrays y las funciones son técnicamente objetos, se tratan de manera diferente en JavaScript debido a sus características únicas. Por lo tanto, es útil reconocerlos como tipos de datos distintos en la práctica diaria de programación.