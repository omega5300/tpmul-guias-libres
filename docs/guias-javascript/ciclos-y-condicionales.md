# ciclos y condicionales

uno de elementos tambien vitales en js son los ciclos y las condicionales son vital para recorrer y validar información

- condicionales: su funcionalidad es validar si información es falso o verdadero
-ciclos: sus función es recorrer los datos siempre y cuando cumplar una condcion

## operadores logicos y expresiones

Este capítulo describe las expresiones y operadores de JavaScript, incluida la asignación, comparación, aritmética, bit a bit, lógica, cadena, ternario y más.

### operadores de asignación

| tipo | operador | sentido |
| ----------- | ----------- | ----------- |
| asignación | x = y | x = y |
| adición o suma | x += y | x = x + y |
| resta | x -= y | x = x - y |
| multiplicación | x *= y | x = x * y |
| división | x /= y | x = x / y |
| restante | x %= y | x = x % y |
| exponeciación | x **= y | x = x ** y |
| turno a la izquierda | x <<= y | x = x << y |
| turno a la derecha | x >>= y | x = x >> y |
| turno a la derecha sin firmar | x >>>= y | x = x >>> y |
| AND bit a bit | x &= y | x = x & y |
| XOR bit a bit | X ^= y | x = x ^ y |
| OR bit a bit | x &#124;= y | x &#124;= x | y |
| AND | x &&= y | x = x && y |
| OR | x &#124;&#124;= y | x = x &#124;&#124; y |
| anulación logica | x ??= y | x ?? (x = y) |

### operadoresde comparación

| tipo | operador |
| ----------- | ----------- |
| igual | 3 == '3' |
| no igual | var1 != 4 |
| estrictamente igual | 3 === 3 |
| estrictamente no igual | 3 !== '3' |
| mayor que | 12 > 2 |
| mayor o igual que | 12 >= 2 |
| menor que | 2 < 12 |
| menor o igual que | 2 <= 12 |

### operadores ariméticos

| tipo | operador |
| ----------- | ----------- |
| resto | 12%5 |
| incremento | x++ o x++ |
| decremento | x-- o --x |
| negación unaria | -x |
| unario más | +x |
| exponeciación | 2 ** 4 |

### operadores bit a bit

| tipo | operador |
| ----------- | ----------- |
| and | a & b |
| or | a &#124; b |
| xor | a ^ b |
| not | ~ a |
| desplazamiento izquierdo | a << b |
| desplazamiento derecho | a >> b |
| desplazamiento derecho con llenado cero | a >>> b |

### operadores logicos

| tipo | operador |
| ----------- | ----------- |
| AND | a && b |
| OR | a &#124;&#124; b |
| NOT | !a |

### operador coma

es operador es usando para separar valores de los arrays y objetos

### operador delete

el operador delete elimina la propiedad de un objeto.

``` js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = {h: 4};
delete myobj.h; // returns true (can delete user-defined properties)
```

### typeof

el operador typeof devuelve una cadena que indica el tipo de operando no evaluado. operandes la cadena, variable, palabra clave u objeto para el que se devolverá el tipo. Los paréntesis son opcionales.

``` js
var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"
```

## operador void

el operador void  se utiliza de cualquiera de las siguientes formas:

``` js
void (expression)
void expression
```

## operador in

este operador es especial lo utiliza para comprobar si cierta caracterisca lo soporta cierto navegadores, devuelve truesi la propiedad especificada está en el objeto especificado.

``` js
// Custom objects
const mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true
```

## instanceof

instanceofcuando necesite confirmar el tipo de un objeto en tiempo de ejecución. Por ejemplo, al detectar excepciones, puede pasar a un código de manejo de excepciones diferente según el tipo de excepción lanzada.

donde objectNamees el nombre del objeto con el que comparar objectTypey objectTypees un tipo de objeto, como Dateo Array.

``` js
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

## this

la palabra clave this se hacer referencia al objeto actual. En general, se thisrefiere al objeto de llamada en un método. Úselo thiscon el punto o la notación entre corchetes.

``` js
this['propertyName']
this.propertyName
```

> utilizado en programación orientado al objetos o otros modos de programación

## new

el new sirve para crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados.

``` js
var theDay = new Date(1995, 12, 17);
```

## super

se utiliza para llamar a funciones en el padre de un objeto. Es útil con clases llamar al constructor padre, por ejemplo.

``` js
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
```

## if

la condicion if es otra de las mas conocidas en todos los lenguajes sirve para validar que la condición devuelva un falso o verdadero

``` js
const num = 10;

if (num > 5) {
 console.log('es mayor de 5')
} else if (num <= 5) { // else if es una condición alterna
  consolg.log('es menor igual a 5')
} else { // si no cumple la condición
  consolg.log('es menor a 5')
}
```

## condición ternaria

es una version simplificada de if solo para el manejo condiciones cortas

``` js
const num = 10;

const result = num > 10 ? true : false

console.log(result);
```

## switch

Una switch declaración permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una caseetiqueta. Si se encuentra una coincidencia, el programa ejecuta la declaración asociada.

-El programa primero busca una casecláusula con una etiqueta que coincida con el valor de expresión y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.
-Si no se encuentra una etiqueta coincidente, el programa busca la defaultcláusula opcional :
  - Si defaultse encuentra una cláusula, el programa transfiere el control a esa cláusula, ejecutando las sentencias asociadas.
  - Si no defaultse encuentra ninguna cláusula, el programa reanuda la
  - ejecución en la instrucción que sigue al final de switch.
(Por convención, la defaultcláusula está escrita como la última cláusula, pero no es necesario que sea así).

``` js
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");
```

## throw

Utilice la throwdeclaración para lanzar una excepción. Una throw declaración especifica el valor que se lanzará:

``` js
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

## try catch

el concepto de try...catch es usado para el manejo de errores por medio de una excepcion:

- el bloque try es para probar si todo funciona correctamente
- el bloque catch es para una excepción en caso que el bloque try falle
- el bloque finally es un bloque opcional cuando se finalizar uno de los dos bloques anteriores

``` js
openMyFile();
try {
  writeMyFile(theData); // This may throw an error
} catch(e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}
```

## for

este es uno de los mas conocidos en todos los lenguajes que posee tres variaciones realiza un recorrido con base a la condición estipulada

``` js
// for traditional
for(let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step', step);
}

const arr = [3, 5, 7];

// for...in recorre el arreglo solo se muestra el indice
for (let i in arr) {
  console.log(i) // logs "0", "1", "2"
}

// for...of es igual al for...in con la diferencia que solo se muestra el valor de array
for (let i of arr) {
  console.log(i) // logs 3, 5, 7
}
```

## while

un cliclo while ejecuta sus declaraciones siempre que se evalúe una condición especificada true.

``` js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

## do while

el ciclo do...whiledeclaración se repite hasta que una condición especificada se evalúa como falsa.

``` js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```