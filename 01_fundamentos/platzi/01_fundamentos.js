// VARIABLES
 var nombreVariable = "Esto es una variable"; // Variable con var
 let otraVariable = "30"; // Variable con let
 const otraVariableNumero = 15; // Variable constante con const
 
 // TIPOS DE DATOS

 // Primitivos
 let cadenaTexto = "Esto es una cadena de texto"; // String
 let variableNumero = 35; // Number
 let variableBoleana = true; // Boolean true o false
 let variableIndefinida = undefined; // Undefined
 let variableNula = null; // Null
 let numeroGrande = BigInt(9007199254741991); // BigInt
 let simboloUnico = Symbol("descripcion"); // Symbol

 // Compuestos
 let arreglo = ["manzana", "banana", "cereza"]; // Array
 let objeto = { nombre: "Juan", edad: 25, profesion: "Ingeniero" }; // Object
 // FUNCIONES
 function saludar() {
    console.log("Hola, bienvenido a JavaScript!");
 }
    saludar(); // Al escribir esto en una consola, se hace llamada a la función

// MANIPULACIÓN DE STRINGS
    let texto = "Hola, Mundo!";
    let texto2 = "JavaScript es genial.";
    let texto3 = `La suma de 2 + 2 es ${2 + 2}.`; // Template literals
    console.log(texto + " " + texto2); // Concatenación R= Hola, Mundo! JavaScript es genial.
    console.log(`${texto} ${texto2}`); // Usando template literals para concatenar R= Hola, Mundo! JavaScript es genial.
    console.log(texto.length); // Longitud del string R= 12
    console.log(texto.toUpperCase()); // Convertir a mayúsculas R= HOLA, MUNDO!
    console.log(texto.toLowerCase()); // Convertir a minúsculas R= hola, mundo!
    console.log(texto.indexOf("Mundo")); // Buscar posición de una subcadena R= 6
    console.log(texto.slice(0, 5)); // Extraer una parte del string R= Hola
    console.log(texto.replace("Mundo", "Tierra")); // Reemplazar parte del string R= Hola, Tierra!
    console.log(texto.split(", ")); // Dividir el string en un array R= [ 'Hola', 'Mundo!' ]
    console.log(texto3); // Usar template literals R= La suma de 2 + 2 es 4.

// TIPOS DE NÚMEROS
    let entero = 42; // Número entero
    let decimal = 3.14; // Número decimal (float)
    let notacionCientifica = 1.23e6; // Notación científica (1.23 * 10^6)
    let numeroNegativo = -10; // Número negativo
    let infinito = Infinity; // Infinito
    let noEsNumero = NaN; // Not a Number (resultado de operaciones inválidas)

// Operaciones aritméticas
    let suma = entero + decimal; // Suma R= 45.14
    let resta = entero - decimal; // Resta R= 38.86
    let multiplicacion = entero * decimal; // Multiplicación R= 131.88
    let division = entero / decimal; // División R= 13.375796178343949
    let modulo = entero % 5; // Módulo (residuo) R= 2
    let potencia = entero ** 2; // Potencia R= 1764

// Operaciones de precisión
    let sumaPrecisa = (0.1 + 0.2).toFixed(2); // R= "0.30"
    console.log(parseFloat(sumaPrecisa)); // Convertir de nuevo a número R= 0.3

// Operaciones avanzadas
    let raizCuadrada = Math.sqrt(16); // Raíz cuadrada R= 4
    let valorAbsoluto = Math.abs(-10); // Valor absoluto R= 10
    let numeroAleatorio = Math.random(); // Número aleatorio entre 0 y 1 R= (varía)

// TYPE IMPLICIT
    let resultado1 = "5" + 10; // Concatenación R= "510"
    let resultado2 = "20" + true; // Concatenación R= 20true
    let resultado3 = 10 + true; // Suma R= 11

// TYPE EXPLICIT
    let numeroDesdeCadena = Number("123"); // Conversión a número R= 123
    let cadenaDesdeNumero = String(456); // Conversión a cadena R= "456"
    let booleanDesdeNumero = Boolean(1); // Conversión a booleano R= true
    let numeroDesdeBooleano = Number(false); // Conversión a número R= 0

    const textoNumero = "100";
    const numeroConvertido = parseInt(textoNumero); // Convierte a número entero R= 100
    const textoNumero2 = "100.314";
    const numeroConvertido2 = parseFloat(textoNumero2); // Convierte a número decimal R= 100.314
    console.log(typeof numeroConvertido); // R= number
    console.log(typeof numeroConvertido2); // R= number

    // OPERADORES DE COMPARACIÓN
    let igual = (5 == "5"); // Igualdad débil R= true
    let estrictamenteIgual = (5 === "5"); // Igualdad estricta R= false
    let diferente = (5 != "10"); // Desigualdad débil R= true
    let estrictamenteDiferente = (5 !== 5); // Desigualdad estricta R= false
    let mayorQue = (10 > 5); // Mayor que R= true
    let menorQue = (5 < 10); // Menor que R= true
    let mayorOIgual = (5 >= 5); // Mayor o igual R= true
    let menorOIgual = (3 <= 7); // Menor o igual R= true

    // OPERADORES LÓGICOS
    let andLogico = (true && false); // AND lógico R= false
    let orLogico = (true || false); // OR lógico R= true
    let notLogico = !true; // NOT lógico R= false