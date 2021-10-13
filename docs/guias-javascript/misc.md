# otros parametros de javascript

en javascript hay otras formas algunas muy usadas y otras no para muy poco conocidas entre ellas están:

## desestructuración o Destructuring

La sintaxis de asignación de desestructuración es una expresión de JavaScript que permite descomprimir valores de matrices o propiedades de objetos en distintas variables.

``` js
// uso con arrays
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// uso con objetos
const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true
```

## spread operator

Spread operator ( ...) permite que un iterable, como una expresión de matriz o cadena, se expanda en lugares donde se esperan cero o más argumentos (para llamadas a funciones) o elementos (para literales de matriz), o que una expresión de objeto se expanda en lugares donde cero o se esperan más pares clave-valor (para objetos literales).

``` js
let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```

## strict mode

El modo estricto de JavaScript, introducido en ECMAScript 5, es una forma de optar por una variante restringida de JavaScript, excluyendo implícitamente el " modo descuidado ". El modo estricto no es solo un subconjunto: intencionalmente tiene una semántica diferente a la del código normal. Los navegadores que no admiten el modo estricto ejecutarán un código de modo estricto con un comportamiento diferente al de los navegadores que sí lo hacen, así que no confíe en el modo estricto sin pruebas de funciones para admitir los aspectos relevantes del modo estricto. El código de modo estricto y el código de modo no estricto pueden coexistir, por lo que los scripts pueden optar por el modo estricto de forma incremental.

El modo estricto realiza varios cambios en la semántica normal de JavaScript:
- Elimina algunos errores silenciosos de JavaScript cambiándolos para que arrojen errores.
- Corrige errores que dificultan que los motores de JavaScript realicen optimizaciones: el código de modo estricto a veces se puede hacer que se ejecute más rápido que el código idéntico que no es de modo estricto.

- Prohíbe algunas sintaxis que probablemente se definirán en versiones futuras de ECMAScript.

``` js
// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";
```

## debugger

La declaración debugger invoca cualquier funcionalidad de depuración disponible, como establecer un punto de interrupción. Si no hay ninguna función de depuración disponible, esta declaración no tiene ningún efecto.

``` js
function potentiallyBuggyCode() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
}
```

## setInterval y setTimeout

- setInterval(): método, que se ofrece en las interfaces Windowy Worker, llama repetidamente a una función o ejecuta un fragmento de código, con un retraso de tiempo fijo entre cada llamada.

Este método devuelve un ID de intervalo que identifica de forma única el intervalo, por lo que puede eliminarlo más tarde llamando clearInterval().
  ``` js
  setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');
  ```
 
- setTimeout(): método global establece un temporizador que ejecuta una función o un fragmento de código específico una vez que expira el temporizador.
  ``` js
  setTimeout(() => {console.log("this is the first message")}, 5000);
  ```
  
## closures

una closure es la combinación de una función agrupada (encerrada) con referencias a su estado circundante (el entorno léxico). En otras palabras, un cierre le da acceso al alcance de una función externa desde una función interna. En JavaScript, los cierres se crean cada vez que se crea una función, en el momento de la creación de la función.

```
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```