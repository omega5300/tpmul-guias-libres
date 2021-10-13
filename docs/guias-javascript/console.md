# objeto console

en javascript es otro elemento escencial el objeto console es usando para error y usando en node para el manejo de apps de consola o conocidos como CLI entre estos metodo se encuentra para ver el resultado si esta en un navegador debes acceder a las herramientas de desarrollador del navegador si trabajas con aplicaciones de node la consola del sistema operativo sirve.

``` js
/*
  console.assert()
  Registre un mensaje y apile el seguimiento en la consola si el primer
  argumento es false. 
*/
console.assert(false, 'the word is %s', 'foo');

console.clear() // su funcion es para limpiar en pantalla de la consola

/*
  console.count()
  Registre el número de veces que se ha llamado a esta línea con la etiqueta
  dada.
*/
console.count(1); // 1: 1

/*
  console.countReset()
  Restablece el valor del contador con la etiqueta dada
*/

let user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet(); // "bob: 1"
user = "alice";
greet(); // "alice: 1"
greet(); // "alice: 2"
console.countReset("bob"); // "bob: 0"
console.count("alice"); // "alice: 3"

/*
  console.debug()
  Envía un mensaje a la consola con el nivel de registro debug.
*/
console.debug(msg [, subst1, ..., substN]);

/*
  console.dir()
  Muestra una lista interactiva de las propiedades de un objeto
  JavaScript especificado. Esta lista le permite usar triángulos desplegables para
  examinar el contenido de los objetos secundarios.
*/
console.dir(object);

/*
  console.dirxml()
  Muestra una representación del elemento XML / HTML del objeto especificado
  si es posible o la vista del objeto JavaScript si no es posible.
*/
console.dirxml(object);

/*
  console.error()
  Emite un mensaje de error. Puede utilizar la sustitución de cadenas y
  argumentos adicionales con este método.
*/
console.error(err);

/*
 console.group() y console.groupEnd()
 Crea un nuevo grupo en línea , sangrando todos los resultados siguientes en
 otro nivel. Para retroceder un nivel, llame groupEnd().
 Sale del grupo en línea actual.
*/
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

/*
  console.info()
  Registro informativo de información. Puede utilizar la sustitución de
  cadenas y argumentos adicionales con este método.
*/
console.info('hello')

/*
 console.log()
 Para salida general de información de registro. Puede utilizar la
 sustitución de cadenas y argumentos adicionales con este método.
*/
console.log('javascript', 'es6')

/*
  console.table()
  Muestra datos tabulares como una tabla.
*/
console.table(["apples", "oranges", "bananas"]);

/*
 console.time()
 Inicia un temporizador con un nombre especificado como parámetro de 
 entrada. Se pueden ejecutar hasta 10,000 temporizadores simultáneos en una
 página determinada.
 
 console.timeEnd()
 Detiene el temporizador especificado y registra el tiempo transcurrido en
 milisegundos desde que comenzó.
 
 console.timelog()
 Registra el valor del temporizador especificado en la consola.
*/
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");

/*
  console.trace()
  Genera un seguimiento de pila.
*/
console.trace('Show me');

/*
  console.warn()
  Emite un mensaje de advertencia. Puede utilizar la sustitución de cadenas
  y argumentos adicionales con este método.
*/
console.warn('some features is not compatible in internet explorer')
```