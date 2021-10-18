# custom elements

Una de las características clave del estándar de componentes web es la capacidad de crear elementos personalizados que encapsulan su funcionalidad en una página HTML, en lugar de tener que conformarse con un lote largo y anidado de elementos que juntos brindan una característica de página personalizada. Este artículo presenta el uso de la API de elementos personalizados.

## api customelements

La CustomElementRegistryinterfaz proporciona métodos para registrar elementos personalizados y consultar elementos registrados. Para obtener una instancia, use la  window.customElementspropiedad.

### metodos

- CustomElementRegistry.define(): Define un nuevo elemento personalizado.
- CustomElementRegistry.get(): Devuelve el constructor del elemento personalizado con nombre o undefinedsi el elemento personalizado no está definido.
- CustomElementRegistry.upgrade(): Actualiza un elemento personalizado directamente, incluso antes de que se conecte a su raíz de sombra.
- CustomElementRegistry.whenDefined(): Devuelve un vacío promiseque se resuelve cuando un elemento personalizado se define con el nombre de pila. Si dicho elemento personalizado ya está definido, la promesa devuelta se cumple de inmediato.

``` js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    var wcParent = this.parentNode;

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = 'Words: ' + countWords(wcParent);

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    var text = document.createElement('span');
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    setInterval(function() {
      var count = 'Words: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)

  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });
```