    /* Existen tres tipos de operadores en JavaScript: 
    - Unarios: Operan sobre un solo operando. Ejemplo: el operador de negación (!).
    - Binarios: Operan sobre dos operandos. Ejemplo: el operador de suma (+).
    - Ternarios: Operan sobre tres operandos. Ejemplo: el operador condicional (?:).
    */  
    
    /* Operadores Binarios más comunes*/

    // - Aritméticos: +, -, *, /, %, ** (suma, resta, multiplicación, división, módulo, potencia).
    let suma = 5 + 3; // 8
    let resta = 10 - 4; // 6
    let multiplicacion = 2 * 3; // 6
    let division = 20 / 5; // 4
    let modulo = 10 % 3; // 1 Es el resto de la división
    let potencia = 2 ** 3; // 8 Es un número elevado a la potencia. En este caso 2 elevado a 3ra potencia.

    // - De asignación: =, +=, -=, *=, /=, %= (asignación simple y compuesta).
    let y = 1; // Inicialización
    y++; // Incremento en 1 Equivalente a y = y + 1
    y--; // Decremento en 1 Equivalente a y = y - 1
    let x = 10; // Asignación simple
    x += 5; // Equivalente a x = x + 5, ahora x es 15
    x -= 3; // Equivalente a x = x - 3, ahora x es 12
    x *= 2; // Equivalente a x = x * 2, ahora x es 24
    x /= 4; // Equivalente a x = x / 4, ahora x es 6
    x %= 4; // Equivalente a x = x % 4, ahora x es 2    

    // - De comparación: ==, ===, !=, !==, >, <, >=, <= (igualdad, desigualdad, mayor que, menor que).
    let a = 5;
    let b = '5';
    console.log(a == b); // true (igualdad de valor)
    console.log(a === b); // false (igualdad de valor y tipo)
    console.log(a != b); // false (desigualdad de valor)
    console.log(a !== b); // true (desigualdad de valor o tipo)
    console.log(a > 3); // true
    console.log(a < 10); // true
    console.log(a >= 5); // true
    console.log(a <= 4); // false   

    // - Lógicos: &&, || (AND, OR).
    let condicion1 = true;
    let condicion2 = false;
    console.log(condicion1 && condicion2); // false (AND) Las condiciones deben ser verdaderas para que el resultado sea true
    console.log(condicion1 || condicion2); // true (OR) Al menos una condición debe ser verdadera para que el resultado sea true
    console.log(!condicion1); // false (NOT) Invierte el valor de la condición

    /* Operador Ternario */
    // Sintaxis: condicion ? valorSiVerdadero : valorSiFalso
    // El operador ternario evalúa una condición y devuelve un valor si la condición es verdadera y otro valor si es falsa.
    // Ejemplo: 

    let edad = 18;
    let esAdulto = (edad >= 18) ? 'Sí, es adulto' : 'No, es menor de edad';
    console.log(esAdulto); // 'Sí, es adulto'

    