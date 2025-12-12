/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
console.log('---------------------------Ejercicio 1---------------------------');
let suma = 23 + 87;
let resta = 383 - 167;
let multiplicacion = 83 * 53;
let division = 234 / 54;
let modulo = 567 % 8;
let potencia = 5 ** 5;
console.log(potencia);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log('---------------------------Ejercicio 2---------------------------');
let a = 0;
let b = 0;
let c = 5;
let d = 56;
let e = 4;
let f = 3;
a += suma;
b -= resta;
c *= multiplicacion;
d /= division;
e %= modulo;
f **= 2;

console.log(a); // Resultado = 110
console.log(b); // Resultado = -84
console.log(c); // Resultado = 2209
console.log(d); // Resultado = 13.0
console.log(e); // Resultado = 0
console.log(f); // Resultado = 9

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log('---------------------------Ejercicio 3---------------------------');
console.log(3 === parseInt('3')); // true
console.log(3 == '3'); // true
console.log(suma < resta); // true
console.log(multiplicacion >= division); // true    
console.log(modulo !== 5); // true
console.log(potencia >= 2000); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log('---------------------------Ejercicio 4---------------------------');
console.log(3 == parseInt('4')); // false    
console.log(3 === '3'); // false
console.log(suma > resta);  // false
console.log(multiplicacion <= division); // false    
console.log(modulo !== 7); // false
console.log(potencia >= 4000); // false

// 5. Utiliza el operador lógico and
console.log('---------------------------Ejercicio 5---------------------------');
let cond1 = true;
let cond2 = false;
let cond3 = true;
let cond4 = false;
console.log(cond1 && cond3); // true
console.log(cond1 && !cond2); // true

// 6. Utiliza el operador lógico or
console.log('---------------------------Ejercicio 6---------------------------');
console.log(cond1 || cond2); // true
console.log(cond2 || cond3); // true
console.log(cond2 || cond4); // false

// 7. Combina ambos operadores lógicos
console.log('---------------------------Ejercicio 7---------------------------');
console.log((cond1 && cond3) || cond2); // true
console.log((cond2 || cond4) && cond1); // false

// 8. Añade alguna negación
console.log('---------------------------Ejercicio 8---------------------------');
console.log(!((cond2 || cond4) && cond1)); // true

// 9. Utiliza el operador ternario
console.log('---------------------------Ejercicio 9---------------------------');
let numero = 10;
let esPar = (numero % 2 === 0) ? 'El número es par' : 'El número es impar';
console.log(esPar); // 'El número es par'

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log('---------------------------Ejercicio 10---------------------------');
let edad = 25;
let tieneCarnet = true;
let puedeConducir = (edad >= 18 && tieneCarnet) ? 'Puede conducir' : 'No puede conducir';
console.log(puedeConducir); // 'Puede conducir'