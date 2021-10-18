# web components

los web components son una nueva forma de crear elementos reutilizables de forma nativa sin la necesidad de usar framework como react, angular, vue y svelte.

también es un conjunto de diferentes tecnologías que le permite crear elementos personalizados reutilizables, con su funcionalidad encapsulada del resto de su código, y utilizarlos en sus aplicaciones web.

las ventajas que podemos usar son:

- elementos personalizados
- shadow DOM
- plantillas HTML

## requisitos

para usar los web components se debe aprender ciertos aspectos del desarrollo web:

- profundidad en HTML semantico
- CSS mordeno
- manejo de DOM
- conocer lo esencial de ES6:
  - let
  - const
  - class
- conocer el uso de this y programacción orientado a objetos

## ciclo de vida

Son funciones especiales de devolución de llamada definidas dentro de la definición de clase del elemento personalizado, que afectan su comportamiento:

- connectedCallback: Se invoca cuando el elemento personalizado se conecta por primera vez al DOM del documento.
- disconnectedCallback: Se invoca cuando el elemento personalizado se desconecta del DOM del documento.
- adoptedCallback: Se invoca cuando el elemento personalizado se mueve a un nuevo documento.
- attributeChangedCallback: Se invoca cuando se agrega, elimina o cambia uno de los atributos del elemento personalizado.