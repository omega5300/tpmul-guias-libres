# elementos de webcomponents

esta información es para conocer estas etiquetas para el uso de webcomponents que son un standard para el desarrollo web para mas profundidad visite la sección de [webcomponents](/guias-webcomponets/).

## etiqueta template

esta etiqueta es como una plantilla para el uso de webcomponents es lo mas similar a la HTML para el manejo de shadow DOM.

```html
<template id="template">
  <div>Click me</div>
</template>
```

## etiqueta slot

esta etiqueta es para uso para colocar otras etiquetas HTML por medio de elementos personalizados "custom elements".

```html
<template id="element-details-template">
  <details>
    <summary>
      <code class="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
      <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr>
</template>
```

## etiquetas de web componets obsoletas

hay otras dos etiquetas de web componentes que son shadow y content que son iguales a template y slot solo sera mencionadas debido que funciona exactamente igual.