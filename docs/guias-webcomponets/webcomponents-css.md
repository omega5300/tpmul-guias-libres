# css webcomponents

en los webcomponents tambien podemos usar CSS propio sea interno o externo por hojas independientes

## Pseudo-classes

Pseudoclases relacionadas específicamente con elementos personalizados

- :defined: Coincide con cualquier elemento definido, incluidos los elementos integrados y los elementos personalizados definidos con CustomElementRegistry.define()).
- :host: Selecciona el host de sombra del DOM de sombra que contiene el CSS que se utiliza en su interior.
- :host(): Selecciona el host de sombra del DOM de sombra que contiene el CSS en el que se usa (para que pueda seleccionar un elemento personalizado desde el interior de su DOM de sombra), pero solo si el selector dado como parámetro de la función coincide con el host de sombra.
- :host-context(): Selecciona el host de sombra del DOM de sombra que contiene el CSS que se usa en su interior (para que pueda seleccionar un elemento personalizado desde el interior de su DOM de sombra), pero solo si el selector dado como parámetro de la función coincide con el (los) ancestro (s) del host de sombra en el lugar en el que se encuentra dentro de la jerarquía DOM.

## pseudoelementos

Pseudoelementos relacionados específicamente con elementos personalizados:

- ::part: Representa cualquier elemento dentro de un árbol de sombra que tenga un partatributo coincidente.
- ::slotted: Coincide con cualquier contenido que se inserte en una ranura.