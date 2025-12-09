
// VARIABLES EN JAVASCRIPT

/*
Una variable es un contenedor para almacenar datos o valores en la memoria de la computadora. Imagina una variable como una caja etiquetada donde puedes guardar diferentes tipos de información (datos) y luego acceder a esa información cuando la necesites.
*/

// SINTAXIS PARA CREAR UNA VARIABLE:
// palabraClave + nombreVariable + operador de asignación(=) + valor;

let nombreVariable = valor; 

/*
En JavaScript, se pueden declarar variables utilizando las palabras clave var, let o const.

var 
Se utiliza para declarar variables con un alcance global o de función. Puede ser reasignada y redeclarada. (Se recomienda usar let o const en su lugar en el código moderno).

let
Se utiliza para declarar variables con un alcance de bloque. Puede ser reasignada pero no redeclarada en el mismo ámbito.

const
Se utiliza para declarar constantes, que son variables cuyo valor no puede cambiar una vez asignado. Tienen un alcance de bloque.
*/

// EJEMPLOS DE DECLARACIÓN Y ASIGNACIÓN (INICIALIZACIÓN) DE VARIABLES:
// Declarar una variable significa crearla, mientras que asignar significa almacenar un valor.

var declararVariable; // Declaración de una variable llamada 'declararVariable'. Variable no inicializada (sin valor asignado).
declararVariable = 10; // Asignación del valor 10 a la variable 'declararVariable'. Variable inicializada.

let otraVariable = "Hola"; // Declaración y asignación de una variable llamada 'otraVariable' con el valor "Hola"

const constanteVariable = 3.14; // Declaración y asignación de una constante llamada 'constanteVariable' con el valor 3.14

// NOMBRES DE VARIABLES
/*
Los nombres de las variables deben seguir ciertas reglas:

1. Deben comenzar con una letra, un signo de dólar ($) o un guion bajo (_). 
Por ejemplo: myVariable, $miVariable, _miVariable.

2. Pueden contener letras, números, signos de dólar y guiones bajos.

3. No pueden contener espacios ni caracteres especiales (como @, #, %, etc.).
Por ejemplo, my Variable no es válido, tampoco mi-Variable o mi@Variable.

4. No pueden ser palabras reservadas de JavaScript (como if, else, for, etc.).

5. Son sensibles a mayúsculas y minúsculas (Case Sensitive).
Por ejemplo, miVariable y mivariable son diferentes).

Por convención, los nombres de las variables suelen escribirse en camelCase, donde la primera palabra comienza con minúscula y las palabras subsiguientes comienzan con mayúscula. 
Por ejemplo, miVariableEjemplo.
*/

/* POR QUÉ NO USAR VAR

Aunque var todavía es válido en JavaScript, su uso puede llevar a comportamientos inesperados debido a su alcance de función y la posibilidad de redeclaración. Esto puede causar problemas en programas más grandes y complejos.

Por ejemplo, si declaras una variable con var dentro de un bloque (como un if o un bucle), esa variable será accesible fuera del bloque, lo que puede llevar a errores difíciles de detectar.

let y const, por otro lado, tienen un alcance de bloque, lo que significa que las variables declaradas con estas palabras clave solo son accesibles dentro del bloque donde se declaran. Esto ayuda a evitar conflictos y hace que el código sea más predecible y fácil de entender.

Además, const garantiza que una variable no pueda ser reasignada después de su inicialización, lo que es útil para valores que no deben cambiar, mejorando la seguridad del código.

Por estas razones, se recomienda usar let y const en lugar de var en el desarrollo moderno de JavaScript.

Hoisting de var
Otra razón para evitar var es el concepto de "hoisting" (elevación). Las declaraciones de variables con var se elevan al principio de su ámbito, lo que significa que puedes usar una variable antes de declararla sin obtener un error, pero su valor será undefined hasta que se asigne un valor. Esto puede llevar a confusión y errores en el código. En contraste, let y const no permiten el uso de variables antes de su declaración, lo que ayuda a prevenir este tipo de problemas.
*/