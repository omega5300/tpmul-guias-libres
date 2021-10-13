# eventos

los eventos en javascript son la pieza clave para dar la interacción a las paginas web como el envio de datos manipulacion de elementos a las paginas web y entre otras cosas

## addEventListener

es un metodo que configura una función que se llamará siempre que el evento especifico los objetos comunes son Element, Document y Window.

addEventListener()funciona agregando una función o un objeto que se implementa EventListenera la lista de detectores de eventos para el tipo de evento especificado en el EventTargetque se llama.

``` js
target.addEventListener(type, listener);
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
target.addEventListener(type, listener, useCapture, wantsUntrusted); // wantsUntrusted is Firefox only

// Function to change the content of t2
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Add event listener to table with an arrow function
const el = document.getElementById("outside");
el.addEventListener("click", () => { modifyText("four"); }, false);
```

- type: recibe un string que es de tipo case sentive distingue ente mayusculas y minusculas que representa el tipo de evento que se va a escuchar
  - click: El evento ocurre cuando el usuario hace clic en un elemento.
  - keyup: El evento ocurre cuando el usuario suelta una tecla.
  - keypress: El evento ocurre cuando el usuario presiona una tecla
  - keydown: El evento ocurre cuando el usuario está presionando una tecla
  - load: El evento ocurre cuando un objeto se ha cargado.
  - mousedown: El evento ocurre cuando el usuario presiona un botón del mouse sobre un elemento.
  - mouseenter: El evento ocurre cuando el puntero se mueve sobre un elemento.
  - mouseleave: El evento ocurre cuando el puntero se mueve fuera de un elemento.
  - mousemove: El evento ocurre cuando el puntero se mueve mientras está sobre un elemento.
  - mouseover: El evento ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.
  - mouseout: El evento ocurre cuando un usuario mueve el puntero del mouse fuera de un elemento o fuera de uno de sus elementos secundarios.
  - mouseup: El evento ocurre cuando un usuario suelta un botón del mouse sobre un elemento.
  - submit: El evento ocurre cuando se envía un formulario
  - unload: El evento ocurre una vez que se ha descargado una página (para la etiqueta body)
- El objeto que recibe una notificación (un objeto que implementa la Eventinterfaz) cuando ocurre un evento del tipo especificado. Debe ser un objeto que implemente la EventListenerinterfaz o una función de JavaScript . Consulte La devolución de llamada del detector de eventos para obtener detalles sobre la devolución de llamada en sí.
- options: parametro opcional; Un objeto de opciones especifica características sobre el detector de eventos. Las opciones disponibles son:
  - capture: Un valor booleano que indica que los eventos de este tipo se enviarán al registrado listenerantes de enviarse a cualquiera que EventTargetesté debajo de él en el árbol DOM.
  - once: Un valor booleano que indica que listener debe invocarse como máximo una vez después de agregarse. Si true, listenerse eliminará automáticamente cuando se invoque.
  - passive: Un valor booleano que, si true, indica que la función especificada por listenernunca llamará preventDefault(). Si un oyente pasivo llama preventDefault(), el agente de usuario no hará nada más que generar una advertencia en la consola. Consulte Mejora del rendimiento del desplazamiento con oyentes pasivos para obtener más información.
  - signal: El oyente será eliminada cuando el dado AbortSignal's abort()se denomina método.
- useCapture: parametro opcional; Un valor booleano que indica si los eventos de este tipo se enviarán a los registrados listener antes de enviarse a cualquiera EventTargetdebajo de él en el árbol DOM. Los eventos que se propagan hacia arriba a través del árbol no activarán un oyente designado para usar la captura. La propagación y la captura de eventos son dos formas de propagar eventos que ocurren en un elemento que está anidado dentro de otro elemento, cuando ambos elementos han registrado un identificador para ese evento. El modo de propagación del evento determina el orden en que los elementos reciben el evento. VerEventos DOM Nivel 3 y Orden de eventos de JavaScriptpara una explicación detallada. Si no se especifica, el valor useCapturepredeterminado es false.

## event propiedades y eventos

- Event.bubbles: Un booleano que indica si el evento surge o no a través del DOM.
- Event.cancelBubble: Un alias histórico de Event.stopPropagation(). Establecer su valor en trueantes de regresar de un controlador de eventos evita la propagación del evento.
- Event.cancelable: Un booleano que indica si el evento es cancelable.
- Event.composed: Un booleano que indica si el evento puede o no burbujear a través del límite entre el DOM de sombra y el DOM normal.
- Event.currrentTarget: Una referencia al objetivo registrado actualmente para el evento. Este es el objeto al que está programado enviar el evento. Es posible que esto se haya cambiado a lo largo del camino mediante la reorientación.
- Event.defaultPrevented: Indica si la llamada para event.preventDefault() cancelar el evento.
- Event.eventPhase: Indica qué fase del flujo de eventos se está procesando.
- Event.target: Una referencia al destino al que se envió originalmente el evento.
- Event.timeStamp: La hora a la que se creó el evento (en milisegundos). Por especificación, este valor es el tiempo desde la época, pero en realidad, las definiciones de los navegadores varían. Además, se está trabajando para cambiar esto para que sea un DOMHighResTimeStamp.
- Event.type: El nombre del evento. No distingue entre mayúsculas y minúsculas.
- Event.isTrusted: Indica si el evento fue iniciado por el navegador (después de que un usuario haga clic, por ejemplo) o por un script (usando un método de creación de eventos, como Event.initEvent).
- Event.composedPath(): Devuelve la ruta del evento (objetos en los que se invocarán los oyentes). Esto no incluye nodos en árboles de sombra si la raíz de sombra se creó con su ShadowRoot.mode en closed.
- Event.preventDefault(): Cancela el evento (si es cancelable).
- Event.stopImmediatePropagation(): Para este evento en particular, evite que se llame a todos los demás oyentes. Esto incluye a los oyentes adjuntos al mismo elemento, así como a los adjuntos a elementos que se atravesarán más adelante (durante la fase de captura, por ejemplo).
- Event.stopPropagation(): Detiene la propagación de eventos más adelante en el DOM.

## removeEventListener

método elimina de  EventTargetun detector de eventos registrado previamente EventTarget.addEventListener(). El detector de eventos que se eliminará se identifica mediante una combinación del tipo de evento, la función del detector de eventos en sí y varias opciones opcionales que pueden afectar el proceso de comparación; consulte Detectores de eventos coincidentes para eliminarlos

Tenga en cuenta que los oyentes de eventos también se pueden eliminar pasando un AbortSignala un addEventListener()y luego llamando abort()al controlador que posee la señal.

``` js
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);

element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false);                 // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true);                  // Fails
```

> posee los mismo parametros que addEventListener no es necesario decirlas