# variables

las variables son conjuntos de bloque para almacenar información sin importar el tipo de dato o funciones.

## tipos de datos

el javascript al muchos tipos de datos como todos los lenguajes de programación pero al ser lenguaje dinamico acepta los siguientes tipos de datos

- string: cadena de caracteres bajo la siguientes comillas:
  ``` js
  '' // comillas sencilla
  "" // comillas doble
  `` // tildes inversas
  ```
  > las comillas tiene una regla estricta una comilla sencilla, puede alojar comillas dobles tambien al contrario no puede alojar el mismo tipo de comillas, las tildes inversas puede usar alojar las comiilas mencionadas anteriormente pero tambien son usar para intepolación de variables
- number: datos de tipos numerico (enteros, flotantes(floats), dobles(double).
- bigint: es un nuevo tipo de dato para valores numericos de gran tamaño
- boolean: son datos que solo puede alojar dos tipos resultados true o false.
- array: son arreglos que pueda almancer otros tipos de datos tambien contando objetos
  ``` js
  ['hello', 55, true, {}]
  ```
- object: los objetos son para almancenar conjuntos de tipo clave y valor
  ``` js
  {
    hello: 'misterio',
    'programing-role': true,
    user_id: 455
  }
  ```
- null: valor que siginfica vacio
- undefined: este campo sin definir excepto sin trabajas con variables de tipo const
- symbol: tipo de variable que soy unicas e inmutables

## tipos de variables

- var: palabra clave que existe en javascript esta varible son declarable su alcanze es de funciön el uso de var es de un cuidado especial este tipo de variables var son redeclarable como reasignable.
  ``` js
  var name = 'juan'
  ```
  > si va a usar var dependerá del proyecto que estes usando o tambien de algunas reglas de linter
- let: esta palabra que se agrego en es2015/es6 es mas seguro de emplear que var debido que let es de alcance de bloque un pro es que no permite la reasignación, pero permite su redeclaración pero si esta en un bloque no puedes llamar esa variable
  ``` js
  let name = 'juan'; // fuera de bloque
  {
    name = 'andres'; // dentro de bloque pero redeclarado
    let msg = 'hello world'; // variable dentro de bloque
  }
  
  let name = 'diego' // nos aloja un error a reasignar
  name // 'andres' ultima redeclaración
  msg // no te permite debio que no existe
  ```
- const: esta palabra que se agrego en es2015/es6 hermano de let con bastante limitaciones no esta permitido la redeclaracíon y la reasignaciön debio son variables de uso constante su alcance es de bloque tambien a diferencia de let const es mas sencillo de emplear y tener menos errores son usados tambien para el manejo de funciones
  ``` js
  const arreglo = [] // asignación constante
  const arreglo = [] // prohibido en variables constante
  ```
- global: es de las que menos se usa es el equivalente a var pero tiene un peligro; son super manipulable y propenso a errores excepto si es bajo el objeto window.
  ``` js
  mail = 'example@gmail.com'
  ```

## forma de llamar la variables

las variable no tiene permito que se asigne al inicio un numero comunmente lo vemos con letras esto son algunas 

- el uso de underscope (_)
- uso de signo de dolar ($) 
- el uso de caracteres
- no tiene permitido el uso de numeros al comienzo solo al final

## hoisting

Otra cosa inusual acerca de las variables en JavaScript es que puede hacer referencia a una variable declarada más tarde, sin obtener una excepción.

Este concepto se conoce como izado. Las variables en JavaScript son, en cierto sentido, "elevadas" (o "elevadas") a la parte superior de la función o declaración. Sin embargo, las variables que se elevan devuelven un valor indefinido. Entonces, incluso si declara e inicializa después de usar o hacer referencia a esta variable, todavía devuelve undefined.

``` js
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
```

## typeof

para validar datos en js tenemos una variable llamado type of que su funcion es validar el tipo de datos que tenemos en la variables

``` js
typeof operand
```

## comentarios

como todo lenguajes los comentarios son para guiar al desarrollar a mejorar el codigo y como funciona esta porcion de codigo

``` js
// comentarios de una linea

/*
 hola desarrollador 
 soy un comentario de multi linea
*/
```