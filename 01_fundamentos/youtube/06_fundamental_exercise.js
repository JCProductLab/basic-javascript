/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea 

    // ESto es el primer ejercicio. Estoy haciendo un comentario de una línea.

// 2. Escribe un comentario en varias líneas

    /* Segundo ejercicio:
    Esto es
    un comentario
    de varias líneas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    let stringVar = 'Esto es una cadena';
    let numberVar = 38;
    let booleanVar = true;
    let undefinedVar;
    let nullVar = null;
    let symbolVar = Symbol('Valor');
    let bigIntVar = BigInt('621869821721392138092912308127831');

// 4. Imprime por consola el valor de todas las variables
    console.log(stringVar);
    console.log(numberVar);
    console.log(booleanVar);
    console.log(undefinedVar);
    console.log(nullVar);
    console.log(symbolVar);
    console.log(bigIntVar);

console.log('-----------------------');

// 5. Imprime por consola el tipo de todas las variables

    console.log(typeof stringVar);
    console.log(typeof numberVar);
    console.log(typeof booleanVar);
    console.log(typeof undefinedVar);
    console.log(typeof nullVar);
    console.log(typeof symbolVar);
    console.log(typeof bigIntVar);

    console.log('-----------------------');

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    stringVar = 'Cambie la cadena de texto';
    numberVar = 40;
    booleanVar = false;
    undefinedVar = 0;
    nullVar= 1;
    symbolVar= '¿Se puede cambiar esto?';
    bigIntVar = 12; 

    console.log('-----------------------');

    console.log(stringVar);
    console.log(numberVar);
    console.log(booleanVar);
    console.log(undefinedVar);
    console.log(nullVar);
    console.log(symbolVar);
    console.log(bigIntVar);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    stringVar = 33;
    numberVar = 'Cambie el tipo number a string';
    booleanVar = 'Cambie de boolean a string';
    undefinedVar = 15;
    nullVar = 56;
    symbolVar = 43573498573490580328598547546n;
    bigIntVar = Symbol('simbolo');

    console.log('-----------------------');

    console.log(typeof stringVar);
    console.log(typeof numberVar);
    console.log(typeof booleanVar);
    console.log(typeof undefinedVar);
    console.log(typeof nullVar);
    console.log(typeof symbolVar);
    console.log(typeof bigIntVar);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    const stringConst = 'Esta es una constante';
    const numberConst = 23;
    const booleanConst = true;
    //const undefinedConst;
    const nullConst = null;
    const symbolConst = Symbol('Constante');
    const bigIntConst = 349857983469385093248023867n;


// 9. A continuación, modifica los valores de las constantes

    //stringConst = 'Intento de cambio';
    //numberConst = 45;
    //booleanConst = false;
    undefinedConst = 12;
    //nullConst = 34;
    //symbolConst = Symbol('Nuevo valor');
    //bigIntConst = 12345678901234567890n;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

    console.log(stringConst);
    console.log(numberConst);
    console.log(booleanConst);
    console.log(undefinedConst);
    console.log(nullConst);
    console.log(symbolConst);
    console.log(bigIntConst);   