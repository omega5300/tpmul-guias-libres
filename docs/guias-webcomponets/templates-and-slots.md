# templates and slots

Este artículo explica cómo puede usar los elementos template y slot para crear una plantilla flexible que luego se puede usar para completar el DOM en la sombra de un componente web.

## la verdad sobre los templates

Cuando tiene que reutilizar las mismas estructuras de marcado repetidamente en una página web, tiene sentido usar algún tipo de plantilla en lugar de repetir la misma estructura una y otra vez. Esto era posible antes, pero es mucho más fácil gracias al elemento HTML template (que es bien compatible con los navegadores modernos). Este elemento y su contenido no se representan en el DOM, pero aún se puede hacer referencia a él mediante JavaScript.

``` html
<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>

<my-paragraph></my-paragraph>
```

``` js
customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('my-paragraph');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
);
```

## slots

Hasta ahora todo va bien, pero el elemento no es muy flexible. Solo podemos mostrar un fragmento de texto dentro de él, lo que significa que en este momento es incluso menos útil que un párrafo normal. Podemos hacer posible mostrar texto diferente en cada instancia de elemento de una manera declarativa agradable usando el elemento slot.

``` html
<p><slot name="my-text">My default text</slot></p>
```

``` html
<slot name="element-name"></slot>

<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>

<!-- or -->
<my-paragraph>
  <ul slot="my-text">
    <li>Let's have some different text!</li>
    <li>In a list!</li>
  </ul>
</my-paragraph>
```

## evento slotchange

Se activa en una HTMLSlotElementinstancia ( elemento slot) cuando cambian los nodos contenidos en esa ranura.