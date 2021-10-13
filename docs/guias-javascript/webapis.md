# web apis

las web api son recursos de javascript para el manejo de ciertos elementos a nuestros sitios web como canvas graficos webGL storage entre otos.

Al escribir código para la Web, hay una gran cantidad de API Web disponibles. A continuación, se muestra una lista de todas las API e interfaces (tipos de objeto) que puede utilizar mientras desarrolla su sitio o aplicación web.

Las API web se utilizan normalmente con JavaScript, aunque no siempre tiene que ser así.

## canvas

Canvas API proporciona un medio para dibujar gráficos a través de JavaScript y el elemento &#060;canvas&#062;. Entre otras cosas, se puede utilizar para animación, gráficos de juegos, visualización de datos, manipulación de fotografías y procesamiento de video en tiempo real.

Canvas API se centra principalmente en gráficos 2D. La API de WebGL, que también utiliza el elemento &#060;canvas&#062;, dibuja gráficos 2D y 3D acelerados por hardware.

el uso es por medio de la propiedad de DOM getElementById o el querySelector con el selector id

``` js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

## clipboard

La API del portapapeles ofrece la capacidad de responder a los comandos del portapapeles (cortar, copiar y pegar), así como de leer y escribir de forma asincrónica en el portapapeles del sistema. El acceso al contenido del portapapeles se bloquea detrás de la API de permisos: el permiso de escritura del portapapeles se otorga automáticamente a las páginas cuando están en la pestaña activa. Se debe solicitar el permiso de lectura del portapapeles, lo que puede hacer al intentar leer los datos del portapapeles.

``` js
navigator.clipboard.readText()
  .then(clipText => document.querySelector(".editor").innerText += clipText);
```

## audio

La API de Web Audio proporciona un sistema potente y versátil para controlar el audio en la Web, lo que permite a los desarrolladores elegir fuentes de audio, agregar efectos al audio, crear visualizaciones de audio, aplicar efectos espaciales (como panoramización) y mucho más.

``` js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
const finish = audioCtx.destination;
// etc.

const oscillator = new OscillatorNode(audioCtx);
const gainNode = new GainNode(audioCtx);

oscillator.connect(gainNode).connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;

gainNode.gain.value = 0;

const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);


```

## drag and drop

Las interfaces HTML de arrastrar y soltar permiten que las aplicaciones utilicen funciones de arrastrar y soltar en los navegadores.

El usuario puede seleccionar elementos que se pueden arrastrar con un mouse, arrastrar esos elementos a un elemento que se puede soltar y soltarlos soltando el botón del mouse. Una representación translúcida de los elementos arrastrables sigue al puntero durante la operación de arrastre.

Para sitios web, extensiones y aplicaciones XUL, puede personalizar qué elementos se pueden volver a arrastrar, el tipo de retroalimentación que producen los elementos que se pueden arrastrar y los elementos que se pueden soltar.

Esta descripción general de HTML Drag and Drop incluye una descripción de las interfaces, pasos básicos para agregar soporte de arrastrar y soltar a una aplicación y un resumen de interoperabilidad de las interfaces.

``` html
<script>
  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
  });
</script>

<p id="p1" draggable="true">This element is draggable.</p>

<script>
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 const data = ev.dataTransfer.getData("text/plain");
 ev.target.appendChild(document.getElementById(data));
}
</script>

<p id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Zone</p>
```

## notifications

La API de notificaciones permite que las páginas web controlen la visualización de notificaciones del sistema al usuario final. Estos están fuera de la ventana de contexto de navegación de nivel superior, por lo que se pueden mostrar incluso cuando el usuario ha cambiado de pestaña o se ha movido a una aplicación diferente. La API está diseñada para ser compatible con los sistemas de notificación existentes en diferentes plataformas.

``` js
btn.addEventListener('click', function() {
  let promise = Notification.requestPermission();
  // wait for permission
})

self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (const i = 0; i < clientList.length; i++) {
      const client = clientList[i];
      if (client.url == '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});


```

## fullscreen

La API de fullscreen agrega métodos para presentar un elemento específico (y sus descendientes) en modo de pantalla completa y para salir del modo de pantalla completa una vez que ya no sea necesario. Esto hace posible presentar el contenido deseado, como un juego en línea, utilizando toda la pantalla del usuario, eliminando todos los elementos de la interfaz de usuario del navegador y otras aplicaciones de la pantalla hasta que se apaga el modo de pantalla completa.

``` js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    toggleFullScreen();
  }
}, false);
```

## local storage

La propiedad de solo lectura de la interfaz de la ventana le permite acceder a un objeto de almacenamiento para el origen del documento; los datos almacenados se guardan en todas las sesiones del navegador.

localStorage es similar a sessionStorage, excepto que mientras que los datos de localStorage no tienen fecha de caducidad, los datos de sessionStorage se borran cuando finaliza la sesión de la página, es decir, cuando la página se cierra. (Los datos de almacenamiento local de un documento cargado en una sesión de "navegación privada" o "incógnito" se borran cuando se cierra la última pestaña "privada").

``` js
localStorage.setItem('myCat', 'Tom');

localStorage.getItem('myCat');

localStorage.removeItem('myCat');

localStorage.clear();
```

## web workers

Web Workers hace posible ejecutar una operación de script en un subproceso en segundo plano separado del subproceso de ejecución principal de una aplicación web. La ventaja de esto es que el procesamiento laborioso se puede realizar en un subproceso separado, lo que permite que el subproceso principal (generalmente la interfaz de usuario) se ejecute sin bloquearse o ralentizarse.

``` js
const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  first.onchange = function() {
    myWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  second.onchange = function() {
    myWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}
```