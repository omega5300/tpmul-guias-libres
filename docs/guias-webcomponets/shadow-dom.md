# shadow DOM

Es un aspecto importante de los componentes web es la encapsulación: poder mantener la estructura de marcado, el estilo y el comportamiento ocultos y separados de otros códigos en la página para que las diferentes partes no entren en conflicto y el código se pueda mantener limpio y ordenado. La API Shadow DOM es una parte clave de esto, proporcionando una forma de adjuntar un DOM separado oculto a un elemento. Este artículo cubre los conceptos básicos del uso de Shadow DOM.

- Shadow host: el nodo DOM regular al que se adjunta el DOM de sombra.
- Shadow tree: el árbol DOM dentro del DOM de sombra.
- Shadow boundary: el lugar donde termina el DOM de sombra y comienza el DOM regular.
- Shadow root: el nodo raíz del árbol de sombra.

![](example)

## uso de shadow DOM

Puede adjuntar una raíz de sombra a cualquier elemento utilizando el Element.attachShadow()método. Esto toma como parámetro un objeto de opciones que contiene una opción - mode- con un valor de open o closed:

``` js
let shadow = elementRef.attachShadow({mode: 'open'});
let shadow = elementRef.attachShadow({mode: 'closed'});
```

- El método Element.attachShadow() adjunta un árbol DOM de sombra al elemento especificado.
- La propiedad Element.shadowRoot devuelve la raíz de sombra adjunta al elemento especificado, o nullsi no hay ninguna raíz de sombra adjunta.

## nodes

- El método Node.getRootNode() devuelve la raíz del objeto de contexto, que opcionalmente incluye la raíz de la sombra si está disponible.
- La propiedad Node.isConnected devuelve un booleano que indica si el Nodo está conectado (directa o indirectamente) al objeto de contexto, por ejemplo, el Documentobjeto en el caso del DOM normal, o ShadowRooten el caso de un DOM de sombra.

## eventos

- Event.composed: Devuelve un  Booleanque indica si el evento se propagará a través del límite del DOM de sombra al DOM estándar ( true), o no ( false).
- Event.composedPath: Devuelve la ruta del evento (objetos en los que se invocarán los oyentes). Esto no incluye nodos en árboles de sombra si la raíz de sombra se creó con ShadowRoot.modecerrado.