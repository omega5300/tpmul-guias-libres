# funciones y window

en esta parte usamos mas funciones y propiedades de objeto window javascript es mas de programacion funcional que todo es por comportamiento de cada funcion.

## funciones

las funciones son la parte mas escenciales de javascript son fragmentos de codigo que son reutilizables esta compuesto por medio de esta imagen:
![function example](/img/web/function-declaration.png)

- *funciones normales*: las funciones normales son las clasicas estas funciones nos permite el hoisting puede ser con o sin parametros tambíen con o sin retorno las funciones normales no puede llevar punto y coma excepto si lo llamas.
  ``` js
  function hello(name) {
    console.log('hello', name);
  }
  
  hello('andres');
  ```
- *expresiones funcionales*: este tipo de funcion no lleva nombre su recomendacion es que lo almancener en una variable preferiblemente un const al diferenciar de las funciones normales tiene varias formas: 
  ``` js
  // con variable
  const fullName = function(name, surname) {
   console.log('hello', name, surname);
  };
  
  // sin variable
  (function () {
   console.log('hello world');
  })();
  ```
- *funciones flechas*: es una nueva forma de declarar funciones incluido en la version es6/es2015 al diferencia de las anteriores no podemos usar this pero no impide que realicemos funciones mas limpias o optimas ejemplos:
  ``` js
  // fat arrow
  const sumarEsto = (a,b) => a + b;
  
  // con un parametro
  const duplicar = n => n * 2;
  
  // sin parametros
  const saludar = () => alert(‘Hola’);
  
  // normal arrow function
  const sumarEsto = (a, b) => {
    let resultado = a + b;
    return resultado;
  }
  
  // anonima
  (() => console.log('hello world'))();
  ```	
  
## window

el objeto window es un objeto global que aloja muchas funciones de javascript para ciertos usos de manipulacion de la ventana de navegador o otros elementos hay muchos pero se lista en lo siguiente

- alert: muestra un mensaje popup desde el navegador
  ``` js
  alert('hello');
  ```

- blur: Aleja el enfoque de la ventana
  ``` js
  window.blur('hello');
  ```
- close: Cierra la ventana actual.
  ``` js
  //Global var to store a reference to the opened window
  var openedWindow;
  
  function openWindow() {
    openedWindow = window.open('moreinfo.htm');
  }
  
  function closeOpenedWindow() {
    openedWindow.close();
  }
  ```

- confirm: Muestra un cuadro de diálogo con un mensaje al que el usuario debe responder.
  ``` js
  confirm('quieres salir de la app')
  ```
- focus: Establece el foco en la ventana actual
  ``` js
  window.focus();
  ```

- getComputedStyle: Obtiene el estilo calculado para el elemento especificado. El estilo calculado indica los valores calculados de todas las propiedades CSS del elemento.
  ``` html
  <style>
  h3::after {
    content: ' rocks!';
  }
  </style>
  
  <h3>Generated content</h3>
  
  <script>
  var h3 = document.querySelector('h3');
  var result = getComputedStyle(h3, ':after').content;

  console.log('the generated content is: ', result); // returns ' rocks!'
  </script>
  ```

- getSelection: Devuelve el objeto de selección que representa los elementos seleccionados.
  ``` js
  function foo() {
    var selObj = window.getSelection();
    alert(selObj);
    var selRange = selObj.getRangeAt(0);
    // do stuff with the range
  }
  ```

- watchMedia: Devuelve un MediaQueryListobjeto que representa la cadena de consulta de medios especificada.
  ``` js
  let mql = window.matchMedia('(max-width: 600px)');
  
  document.querySelector(".mq-value").innerText = mql.matches;
  ```

- moveBy: Mueve la ventana actual en una cantidad específica.
  ``` js
  function budge() {
    moveBy(10, -10);
  }
  ```

- moveTo: Mueve la ventana a las coordenadas especificadas
  ``` js
  function origin() {
    window.moveTo(0, 0);
  }
  ```

- open: Abre una nueva ventana.
  ``` js
  var windowObjectReference;
  
  function openRequestedPopup() {
    windowObjectReference = window.open(
      "http://www.domainname.ext/path/ImageFile.png",
      "DescriptiveWindowName",
      "resizable,scrollbars,status"
    );
  }
  ```

- postMessage: Proporciona un medio seguro para que una ventana envíe una cadena de datos a otra ventana, que no necesita estar dentro del mismo dominio que la primera.
  ``` js
  const popup = window.open(/* popup details */);
  
  // When the popup has fully loaded, if not blocked by a popup blocker:
  
  // This does nothing, assuming the window hasn't changed its location.
  popup.postMessage("The user is 'bob' and the password is 'secret'", "https://secure.example.net");
  ```

- print: Abre el cuadro de diálogo Imprimir para imprimir el documento actual.
  ``` js
  window.print();
  ```

- prompt: Devuelve el texto ingresado por el usuario en un cuadro de diálogo.
  ``` js
  const result = window.prompt(message, default);
  ```

- requestAnimationFrame: Le dice al navegador que hay una animación en progreso, solicitando que el navegador programe un repintado de la ventana para el siguiente cuadro de animación.

- resizeBy: Cambia el tamaño de la ventana actual en una cierta cantidad.
  ``` js
  // Shrink the window
  window.resizeBy(-200, -200);
  ```

- resizeTo: Cambia el tamaño de la ventana dinámicamente.
  ``` js
  window.resizeTo(400, 600)
  ```

- scroll: Desplaza la ventana a un lugar particular del documento.
  ``` js
  scroll(0, 100); // coords
  
  // options
  window.scroll({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
  ```

- scrollBy: Desplaza el documento en la ventana por la cantidad dada.
  ``` js
  window.scrollBy(0, window.innerHeight); // coords
  
  // options
  window.scrollBy({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
  ```
- scrollTo:
  ``` js
  window.scrollTo(0, 1000); // coords
  
  // options
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
  ```

- stop: Este método detiene la carga de la ventana.
 ``` js
 window.stop();
 ```

> se puede usar sin colocar window.