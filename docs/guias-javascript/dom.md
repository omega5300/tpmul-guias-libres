# DOM

el DOM bajo su acronimo document object model en español modelo de objetos de documentos es la forma de que javascript entiende los documentos HTML o SVG.

representa un documento con un árbol logico. cada rama termina en un nodo y cada nodo contiene objetos

## interfaces de DOM

- Attr
- CDATASection
- Comment
- CustomEvent
- Document
- DocumentFragment
- DocumentType
- DOMException
- DOMImplementation
- DOMString
- DOMTimeStamp
- DOMTokenList
- Element
- Event
- EventTarget
- HTMLCollection
- MutationObserver
- MutationObserver
- MutationRecord
- NamedNodeMap
- Node
- NodeFilter
- NodeList
- ProcessingInstruction
- Range
- Text
- TimeRanges
- TreeWalker
- URL
- Window *data el window se hablo anteriormente*
- Worker

para manejar de HTML es necesario el uso de document en caso de SVG se maneja en su propia guia aparte.

## document

el objeto document es el elemento mas vital en js no permite manipular y ademas utilizar las otras interfaces del DOM para comunicar de acuerdo del elemento HTML

> el uso de document se puede usar de dos formas (Document || document) tambien tiene uso compartido con element

``` js
document.active // Devuelve el Elementque tiene el foco actualmente.

document.body // devuelve el nodo <body> del documento actual

document.characterSet // Devuelve el juego de caracteres que utiliza el documento.

document.childElementCount // Devuelve el número de elementos secundarios del documento actual.

document.children // Devuelve los elementos secundarios del documento actual.

document.doctype // Indica si el documento se representa en modo peculiar o estricto.

document.documentElement 
/* 
  Devuelve el Elementque es un hijo directo del documento. Para documentos HTML, 
  este es normalmente el HTMLHtmlElementobjeto que representa el <html>elemento del documento.
*/

document.documentURI // devuelven la ubicacion del documento

document.embeds 
// Devuelve una lista de los <embed>elementos incrustados dentro del documento actual.

document.firstElementChild // Devuelve el primer elemento hijo del documento actual.

document.fonts // Devuelve la FontFaceSetinterfaz del documento actual.

document.forms // Devuelve una lista de los <form>elementos del documento actual.

document.fullscreenElement 
// El elemento que está actualmente en modo de pantalla completa para este documento.

document.head // devuelve el head del documento actual

document.hidden // Devuelve un valor booleano que indica si la página se considera oculta o no.

document.images // Devuelve una lista de las imágenes del documento actual.

document.implementation // Devuelve la implementación DOM asociada con el documento actual.

document.lastElementChild // Devuelve el último elemento secundario del documento actual.

document.links // Devuelve una lista de todos los hipervínculos del documento.

document.pictureInPictureElement 
/* 
  Devuelve lo Elementque se presenta actualmente en el 
  modo imagen en imagen en este documento./*/

document.pictureInPictureEnabled 
// Devuelve verdadero si la función de imagen en imagen está habilitada.

document.plugins // Devuelve una lista de los complementos disponibles.

document.pointerLockElement 
/* 
   Devuelve el elemento establecido como destino para los eventos del mouse 
   mientras el puntero está bloqueado. null 
   si el bloqueo está pendiente, 
   el puntero está desbloqueado o si el objetivo está en otro documento.
*/

document.scripts // Devuelve todos los <script>elementos del documento.

document.scrollingElement // Devuelve una referencia al Elementque desplaza el documento.

document.styleSheets 
/* 
  Devuelve una cantidad StyleSheetListde CSSStyleSheetobjetos 
  para hojas de estilo vinculadas explícitamente o incrustadas en un documento.
*/

document.visibililityState 
/* 
  Devuelve un que stringindica el estado de visibilidad del documento. 
  Los valores posibles son visible, hidden, prerender, y unloaded.
*/

document.cookie
/*
  Devuelve una lista separada por punto y coma de las cookies para ese 
  documento o establece una sola cookie.
*/

document.defaultView // Devuelve una referencia al objeto de la ventana.

document.designMode 
// Obtiene / establece la capacidad de editar todo el documento.

document.dir 
// Obtiene / establece la direccionalidad (rtl / ltr) del documento.

document.lastModified 
// Devuelve la fecha en la que se modificó por última vez el documento.

docuemnt.location // Devuelve el URI del documento actual.

document.readyState
// Devuelve el estado de carga del documento.

document.referrer
// Devuelve el URI de la página vinculada a esta página.

document.title
// Establece u obtiene el título del documento actual.

document.URL
// Devuelve la ubicación del documento como una cadena.

document.onfullscreenchange
/*
  Es un controlador de eventos que representa el código que se llamará 
  cuando se fullscreenchangegenere el evento.
*/

document.onfullscreenerror
/*
  Es un controlador de eventos que representa el código que se llamará 
  cuando se fullscreenerrorgenere el evento.
*/

document.onreadystatechange
// Representa el código de manejo de eventos para el readystatechangeevento.

document.onvisibilitychange
/*
  Es un controlador de eventos que representa el código que se llamará 
  cuando se visibilitychangegenere el evento.
*/

document.adoptNode() // Adopta el nodo de un documento externo.

document.append()
/*
  Inserta un conjunto de Nodeobjetos u DOMString
  objetos después del último hijo del documento.
*/

document.caretPositionFromPoint()
/*
  Devuelve un CaretPositionobjeto que contiene el nodo DOM 
  que contiene el símbolo de intercalación y el desplazamiento del 
  carácter de intercalación dentro de ese nodo.
*/

document.createAttribute() // Crea un nuevo Attrobjeto y lo devuelve.

document.createAttributeNS()
// Crea un nuevo nodo de atributo en un espacio de nombres dado y lo devuelve.

document.createCDATASection()
// Crea un nuevo nodo CDATA y lo devuelve.

document.createComment() 
// crea un nuevo node de comentario y lo devuelve

document.createDocumentFragment()
// crea un nuevo fragmento de documento

document.createElement()
// crea un nuevo elemento con el nombre de la eiqueta

document.createElementNS()
/* 
  Crea un nuevo elemento con el nombre de etiqueta y 
  la URI del espacio de nombres dados.
*/

document.createEvent()
// crea un objeto de evento

document.createNodeIterator()
// Crea un NodeIteratorobjeto.

document.createProcessingInstruction()
// Crea un nuevo ProcessingInstructionobjeto.

document.createRange() // Crea un Rangeobjeto.

document.createTextNode() // crea un nodo de texto

document.createTreeWalker() // Crea un TreeWalkerobjeto.

document.elementFromPoint()
// Devuelve el elemento superior en las coordenadas especificadas.

document.elementsFromPoint()
/*
  Devuelve una matriz de todos los elementos 
  en las coordenadas especificadas.
*/

document.exitPictureInPicture()}
/*
  Remueve el video de la ventana flotante de imagen dentro de imagen 
  a su contenedor original.
*/

document.getAnimations()
/*
  Devuelve una matriz de todos los Animationobjetos actualmente en vigor, 
  cuyos elementos de destino son descendientes de document.
*/

document.getElementById
// Devuelve una referencia de objeto al elemento identificado.

document.getElementsByClassName()
// Devuelve una lista de elementos con el nombre de clase dado.

document.getElementsByTagName()
// Devuelve una lista de elementos con el nombre de etiqueta dado.

document.getElementsByTagNameNS()
/*
  Devuelve una lista de elementos con el nombre de etiqueta 
  y el espacio de nombres dados.
*/

document.getSelection()
/*
  Devuelve un Selectionobjeto que representa el rango de texto seleccionado 
  por el usuario o la posición actual del signo de intercalación.
*/

document.importNode()
// Devuelve un clon de un nodo de un documento externo.

document.prepend()
/*
  Inserta un conjunto de objetos  Node u DOMString 
  antes del primer hijo del documento.
*/

document.querySelector()
/*
  Inserta un conjunto de Nodeobjetos u DOMStringobjetos 
  antes del primer hijo del documento.
*/

document.querySelectorALL()
/*
  Devuelve una lista de todos los nodos de Elemento dentro del documento 
  que coinciden con los selectores especificados.
*/

document.replaceChildren()
/*
  Reemplaza los elementos secundarios existentes de un documento con un nuevo 
  conjunto de elementos secundarios especificado.
*/

document.requestStorageAccess()
/*
  Devuelve un Promiseque resuelve si se concedió el acceso 
  al almacenamiento de primera persona y lo rechaza si se denegó el acceso.
*/

document.createExpression()
/*
  Compila un XPathExpressionque luego se puede usar para evaluaciones 
  (repetidas).
*/

document.createNSResolver() // Crea un XPathNSResolverobjeto.

document.eveluate() // Evalúa una expresión XPath.

document.close()
// Cierra una secuencia de documentos para su escritura.

document.getElementsByName()
// Devuelve una lista de elementos con el nombre dado.

document.hasFocus()
/*
  Devuelve truesi el foco se encuentra actualmente en cualquier lugar 
  dentro del documento especificado.
*/

document.open() // Abre un flujo de documentos para escritura.

document.write() // Escribe texto en un documento.

document.writeln() // Escribe una línea de texto en un documento.
```

> el uso de document puede causar el sitio se sobrescribe google no lo recomienda su uso

## DOMParser

proporciona la capacidad de analizar código fuente XML o HTML de una cadena en un DOM Document.

Puede realizar la operación opuesta (convertir un árbol DOM en una fuente XML o HTML) utilizando la XMLSerializerinterfaz.

En el caso de un documento HTML, también puede reemplazar partes del DOM con nuevos árboles DOM creados a partir de HTML estableciendo el valor de las propiedades Element.innerHTMLy outerHTML. Estas propiedades también se pueden leer para obtener fragmentos HTML correspondientes al subárbol DOM correspondiente.

Tenga en cuenta que XMLHttpRequestpuede analizar XML y HTML directamente desde un recurso direccionable por URL, devolviendo un Documenten su responsepropiedad.

``` js
const parser = new DOMParser();

// with XML
const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument
```

## element

cuando trabajamos con document por dentro se encuentra el objeto element son para cambiar el comportamiento dependiendo del cada elemento HTML

``` js
/*
  Element.assignedSlot
  Devuelve un que HTMLSlotElement representa 
  el <slot>nodo en el que está insertado.
*/
let slottedSpan = document.querySelector('my-paragraph span')
console.log(slottedSpan.assignedSlot); // logs '<slot name="my-text">'

/*
  Element.attributes
  Devuelve un NamedNodeMapobjeto que contiene los atributos 
  asignados del elemento HTML correspondiente.
*/
var para = document.getElementsByTagName("p")[0];
var atts = para.attributes;

/*
  Element.childElementCount
  Devuelve el número de elementos secundarios de este elemento.
*/
let sidebar = document.getElementById('sidebar');

if (sidebar.childElementCount > 0) {
  // Do something
}

/*
  Element.children
  Devuelve los elementos secundarios de este elemento.
*/
const myElement = document.getElementById('foo');

for (let i = 0; i < myElement.children.length; i++) {
  console.log(myElement.children[i].tagName);
}

/*
  Element.classList
  Devuelve un que DOMTokenListcontiene la lista de atributos de clase.
*/
const div = document.createElement('div');
div.className = 'foo';

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10 );

console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");

/*
  Element.className
  Es una DOMStringrepresentación de la clase del elemento.
*/
let el = document.getElementById('item');

if (el.className === 'active'){
  el.className = 'inactive';
} else {
  el.className = 'active';
}

/*
  Element.clientHeight
  Devuelve un que Numberrepresenta la altura interior del elemento.
*/
const intElemClientHeight = element.clientHeight;

/*
  Element.clientLeft
  Devuelve un que Numberrepresenta el ancho del borde izquierdo del elemento.
*/
const left = element.clientLeft;

/*
  Element.clientTop
  Devuelve un que Numberrepresenta el ancho del borde superior del elemento.
*/
const top = element.clientTop;

/*
  Element.clientWidth
  Devuelve un que Numberrepresenta el ancho interior del elemento.
*/
const intElemClientWidth = element.clientWidth;

/*
  Element.firstElementChild
  Devuelve el primer elemento hijo de este elemento.
*/
const list = document.getElementById('list');
console.log(list.firstElementChild.textContent);
// logs "First (1)"

/*
  Element.id
  Es una DOMStringrepresentación de la id del elemento.
*/
const idStr = element.id; // Get the id

element.id = idStr; // Set the id

/*
  Element.innerHTML
  Es una DOMStringrepresentación de la margen del contenido del elemento.
*/
document.body.innerHTML = "";

/*
  Element.lastElementChild
  Devuelve el último elemento hijo de este elemento.
*/
const list = document.getElementById('list');

console.log(list.lastElementChild.textContent);
// logs "Third (3)"

/*
  Element.localName
  Que representa la DOMString parte local del nombre calificado del elemento.
*/
const name = element.localName;

/*
  Element.namespaceURI
  Es la URI del espacio de nombres del elemento, o nullsi no es un 
  espacio de nombres.
*/

if (element.localName == "browser" &&
    element.namespaceURI == "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul") {
  // this is a XUL browser
}

/*
  Element.nextElementSibling
  Es un Element, el elemento que sigue inmediatamente al dado en el árbol, 
  o null si no hay un nodo hermano.
*/
let el = document.getElementById('div-01').nextElementSibling;
  
console.log('Siblings of div-01:');

while (el) {
  console.log(el.nodeName);
  el = el.nextElementSibling;
}
  
/*
  Element.outerHTML
  Es una DOMStringrepresentación de la margen del elemento incluyendo su 
  contenido. Cuando se usa como setter, reemplaza el elemento con nodos 
  analizados a partir de la cadena dada.
*/
var d = document.getElementById("d");

console.log(d.outerHTML);

// The string '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
// is written to the console window

/*
  Element.part
  Representa el (los) identificador (es) de parte del elemento (es decir, 
  establecido usando el partatributo), devuelto como DOMTokenList.
*/
let elementPartList = element.part

/*
  Element.prefix
  A que DOMStringrepresenta el prefijo del espacio de nombres del elemento, o 
  null si no se especifica ningún prefijo.
*/
const example = element.prefix

/*
  Element.previousElementSIbling
  Es un Element, el elemento inmediatamente anterior al dado en el árbol, o 
  null si no hay un elemento hermano.
*/
let el = document.getElementById('div-03').previousElementSibling;
  document.write('<p>Siblings of div-03</p><ol>');
  while (el) {
    document.write('<li>' + el.nodeName + '</li>');
    el = el.previousElementSibling;
  }
  document.write('</ol>');

/*
  Element.scrollHeight
  Devuelve una que Numberrepresenta la altura de la vista de 
  desplazamiento de un elemento.
*/
const elemScrollHeight = element.scrollHeight;

/*
  Element.scrollLeft
  Es una Numberrepresentación de la desviación del elemento de 
  desplazamiento a la izquierda.
*/
const sLeft = element.scrollLeft;

/*
  Element.scrollTop
  Un Numbernúmero de píxeles que representa 
  la parte superior del documento se desplaza verticalmente.
*/
const intElemScrollTop = someElement.scrollTop;

/*
  Element.scrollWidth
  Devuelve un que Numberrepresenta el ancho de la vista de 
  desplazamiento del elemento.
*/
const xScrollWidth = element.scrollWidth;

/*
  Element.shadowRoot
  Devuelve la raíz de sombra abierta alojada por el elemento, o 
  nulo si no hay ninguna raíz de sombra abierta.
*/
const shadowroot = element.shadowRoot;
// mas info en la guia de webcomponets 

/*
  Element.tagName
  Devuelve un Stringcon el nombre de la etiqueta del elemento dado.
*/
const span = document.getElementById("born");

console.log(span.tagName);

// aria

/*
  Element.ariaAtomic
  Es una DOMStringque refleja el aria-atomicatributo, que indica si las 
  tecnologías de asistencia presentarán todas o sólo algunas partes de la 
  región, modificado en base a las notificaciones de cambio definidos por el 
  aria-relevantatributo.
*/
let el = document.getElementById('clock');
console.log(el.ariaAtomic); // true

el.ariaAtomic = "false"
console.log(el.ariaAtomic); // false

/*
  Element.ariaAutoComplete
  Es un DOMStringreflejo del aria-autocompleteatributo, que indica si la 
  introducción de texto podría desencadenar visualización de una o más 
  predicciones del valor previsto del usuario para un cuadro combinado, 
  cuadro de búsqueda, o cuadro de texto y especifica cómo se presentarán 
  predicciones si estuvieran hechos.
*/

let el = document.getElementById('animal');
console.log(el.ariaAutoComplete); // inline

el.ariaAutoComplete = "list";
console.log(el.ariaAutoComplete); // list

/*
  Element.ariaBusy
  Es una DOMStringque refleja el aria-busyatributo, que indica si un elemento 
  está siendo modificado, como las tecnologías de asistencia pueden querer 
  esperar hasta que las modificaciones se han completado antes de exponerlos 
  al usuario.
*/
let el = document.getElementById('clock');
console.log(el.ariaBusy); // false

el.ariaBusy = "true"
console.log(el.ariaBusy); // true

/*
  Element.ariaChecked
  Es una DOMStringque refleja el aria-checkedatributo, que indica la 
  corriente "marcada" estado de casillas de verificación, botones de radio, y 
  otros widgets que tienen un estado de activación.
*/
let el = document.getElementById('checkBoxInput');
console.log(el.ariaChecked); // "false"

el.ariaChecked = "true"
console.log(el.ariaChecked); // "true"

/*
  Element.ariaColCount
  Es un atributo que DOMStringrefleja el aria-colcountnúmero de columnas en 
  una tabla, cuadrícula o cuadrícula de árbol.
*/
let el = document.getElementById('semantic-table');
console.log(el.ariaColCount); // 2

el.ariaColCount = "3"
console.log(el.ariaColCount); // 3

/*
  Element.ariaColIndex
  Es un atributo que DOMStringrefleja aria-colindex, que define la posición o 
  el índice de columna de un elemento con respecto al número total de 
  columnas dentro de una tabla, cuadrícula o cuadrícula de árbol.
*/
let el = document.getElementById('role-heading');
console.log(el.ariaColIndex); // 1

el.ariaColIndex = "2"
console.log(el.ariaColIndex); // 2

/*
  Element.ariaColSpan
  Es un atributo que DOMStringrefleja aria-colspan, que define el número de 
  columnas abarcadas por una celda o celda de cuadrícula dentro de una tabla, 
  cuadrícula o cuadrícula de árbol.
*/
let el = document.getElementById('spanning-column');
console.log(el.ariaColSpan);

el.ariaColSpan = "3";
console.log(el.ariaColSpan);

/*
  Element.ariaCurrent
  Es una DOMStringque refleja el aria-currentatributo que indica el elemento 
  que representa el elemento actual dentro de un contenedor o conjunto de 
  elementos relacionados.
*/
let el = document.getElementById('link-home');
console.log(el.ariaCurrent); // "page"

el.ariaCurrent = "tab"
console.log(el.ariaCurrent); // "tab"

/*
  Element.ariaDescription
  Es un atributo que DOMStringrefleja aria-description, que define un valor 
  de cadena que describe o anota el elemento actual.
*/
let el = document.getElementById('close-button');
console.log(el.ariaDescription); // "A longer description of the function of this element"

el.ariaDescription = "A different description"
console.log(el.ariaDescription); // "A different description"

/*
  Element.ariaDisabled
  Es una DOMStringque refleja el aria-disabledatributo, que indica que el 
  elemento es perceptible pero desactivado, por lo que no se puede editar o 
  no operable.
*/
let el = document.getElementById('saveChanges');
console.log(el.ariaDisabled); // "true"

el.ariaDisabled = "false"
console.log(el.ariaDisabled); // "false"

/*
  Element.ariaExpanded
  Es una DOMStringque refleja el aria-expandedatributo, que indica si un 
  elemento de agrupación de propiedad o controlada por este elemento se 
  expande o se derrumbó.
*/
let el = document.getElementById('animal');
console.log(el.ariaExpanded); // false

el.ariaExpanded = "true";
console.log(el.ariaExpanded); // true

/*
  Element.ariaHasPopup
  Es una DOMStringque refleja el aria-haspopupatributo, lo que indica la 
  disponibilidad y tipo de elemento emergente interactivo, como menú o de 
  diálogo, que puede ser activado por un elemento.
*/
let el = document.getElementById('animal');
console.log(el.ariaHasPopup); // true

el.ariaHasPopup = "listbox";
console.log(el.ariaHasPopup); // listbox

/*
  Element.ariaHidden
  Es una DOMStringque refleja el aria-hiddenatributo, que indica si el 
  elemento está expuesto a una API de accesibilidad.
*/
let el = document.getElementById('hidden');
console.log(el.ariaHidden); // true

el.ariaHidden = "false"
console.log(el.ariaHidden); // false

/*
  Element.ariaKeyShortcuts
  Es una DOMStringque refleja el aria-keyshortcutsatributo, que indica los 
  atajos de teclado que un autor ha implementado para activar o dirigir el 
  foco a un elemento.
*/
let el = document.getElementById('saveChanges');
console.log(el.ariaKeyShortcuts); // "Alt+Shift+A"

el.ariaKeyShortcuts = "Alt+Shift+M"
console.log(el.ariaKeyShortcuts); // "Alt+Shift+M"

/*
  Element.ariaLabel
  Es un atributo que DOMStringrefleja aria-label, que define un valor de 
  cadena que etiqueta el elemento actual.
*/
let el = document.getElementById('close-button');
console.log(el.ariaLabel); // "Close"

el.ariaLabel = "Close dialog"
console.log(el.ariaLabel); // "Close dialog"

/*
  Element.ariaLevel
  Es un atributo que DOMStringrefleja aria-level, que define el nivel 
  jerárquico de un elemento dentro de una estructura.
*/
let el = document.getElementById('main-heading');
console.log(el.ariaLevel); // "1"

el.ariaLevel = "2"
console.log(el.ariaLevel); // "2"

/*
  Element.ariaLive
  Es una DOMStringque refleja el aria-liveatributo, que indica que un 
  elemento se actualizará, y describe los tipos de actualizaciones de los 
  agentes de usuario, las tecnologías de asistencia, y el usuario puede 
  esperar de la región en vivo.
*/
let el = document.getElementById('planetInfo');
console.log(el.ariaLive); // "polite"

el.ariaLive = "assertive";
console.log(el.ariaLive); // assertive

/*
  Element.after()
  Inserta un conjunto de objetos Nodeu DOMStringen la lista Elementsecundaria 
  del padre de, justo después de Element.
*/
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "<div><p></p>Text</div>"

/*
  Element.before()
  Inserta un conjunto de objetos Nodeu DOMStringen la lista Elementsecundaria 
  del padre de, justo antes de Element.
*/
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span, "Text");

console.log(container.outerHTML);
// "<div><span></span>Text<p></p></div>"

/*
  Element.closest()
  Devuelve Elementcuál es el antepasado más cercano del elemento actual 
  (o el elemento actual en sí) 
  que coincide con los selectores dados en el parámetro.
*/
var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// returns the element with the id=div-02

var r2 = el.closest("div div");
// returns the closest ancestor which is a div in div, here it is the div-03 itself

var r3 = el.closest("article > div");
// returns the closest ancestor which is a div and has a parent article, here it is the div-01

var r4 = el.closest(":not(div)");
// returns the closest ancestor which is not a div, here it is the outmost article

/*
  Element.getAttribute()
  Recupera el valor del atributo nombrado del nodo actual y lo 
  devuelve como Object.
*/
<!-- example div in an html DOC -->
<div id="div1">Hi Champ!</div>

// in a console
const div1 = document.getElementById('div1');
//=> <div id="div1">Hi Champ!</div>

const exampleAttr= div1.getAttribute('id');
//=> "div1"

const align = div1.getAttribute('align')
//=> null

/*
  Element.getAttributeNames()
  Devuelve una matriz de nombres de atributos del elemento actual.
*/
const element = document.createElement('a')

// set "href" attribute with no namespace and no namespace prefix
element.setAttribute('href', 'https://example.com')
// set "href" attribute with namespace and also "xlink" namespace prefix
element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'https://example.com')
// set "show" attribute with namespace but no namespace prefix
element.setAttributeNS('http://www.w3.org/1999/xlink', 'show', 'new')

// Iterate over element's attributes
for (let name of element.getAttributeNames()) {
  let value = element.getAttribute(name);
  console.log(name, value);
}

// logs:
// href https://example.com
// xlink:href https://example.com
// show new

/*
  Element.getAttributeNode()
  Recupera la representación de nodo del atributo nombrado del nodo actual y 
  lo devuelve como un Attr.
*/

// html: <div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value == "top")

/*
  Element.getAttributeNodeNS()
  Recupera la representación de nodo del atributo con el nombre y el espacio 
  de nombres especificados, del nodo actual y lo 
  devuelve como un archivo Attr.
*/
const attributeNode = element.getAttributeNodeNS(namespace, nodeName);

/*
  Element.getAttributeNS()
  Recupera el valor del atributo con el nombre y el espacio de nombres 
  especificados, del nodo actual y lo devuelve como un Object.
*/
const ns = 'http://www.example.com/2014/test';
const circle = document.getElementById( 'target' );

console.log( 'attribute test:foo: "' + circle.getAttributeNS( ns, 'foo' ) + '"' );

/*
  Element.getBoundingClientRect()
  Devuelve el tamaño de un elemento y su posición en relación 
  con la ventana gráfica.
*/
let elem = document.querySelector('div');

let rect = elem.getBoundingClientRect();

for (var key in rect) {
  if(typeof rect[key] !== 'function') {
    let para = document.createElement('p');
    para.textContent  = `${ key } : ${ rect[key] }`;
    document.body.appendChild(para);
  }
}

/*
  Element.getClientRects()
  Devuelve una colección de rectángulos que indican los rectángulos 
  delimitadores para cada línea de texto en un cliente.
*/
let rectCollection = object.getClientRects();

/*
  Element.hasAttribute()
  Devuelve un valor booleano que indica si el elemento tiene el atributo 
  especificado o no.
*/
let result = element.hasAttribute(name);

/*
  Element.hasAttributeNS()
  Devuelve un valor booleano que indica si el elemento tiene el atributo 
  especificado, en el espacio de nombres especificado o no.
*/
const d = document.getElementById("div1");

if (d.hasAttributeNS(
       "http://www.mozilla.org/ns/specialspace/",
       "special-align")) {
  d.setAttribute("align", "center");
}

/*
  Element.hasAttributes()
  Devuelve un valor booleano que indica si el elemento tiene uno o más 
  atributos HTML presentes.
*/
let foo = document.getElementById('foo');

if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}

/*
  Element.hasPointerCapture()
  Indica si el elemento en el que se invoca tiene una captura de puntero para 
  el puntero identificado por el ID de puntero dado.
*/
const targetElement.hasPointerCapture(pointerId);

/*
  Element.insertAdjacentElement()
  Inserta un nodo de elemento determinado en una posición determinada en 
  relación con el elemento sobre el que se invoca.
*/
const targetElement.insertAdjacentElement(position, element);

/*	
  Element.insertAdjacentHTML()
  Analiza el texto como HTML o XML e inserta los nodos resultantes en el 
  árbol en la posición dada.
*/
element.insertAdjacentHTML(position, text);

/*	
  Element.insertAdjacentText()
  Inserta un nodo de texto determinado en una posición determinada en 
  relación con el elemento sobre el que se invoca.
*/
element.insertAdjacentText(position, element);

/*	
  Element.matches()
  Devuelve un valor booleano que indica si el elemento será seleccionado por 
  la cadena de selección especificada.
*/
let result = element.matches(selectorString);

/*	
  Element.releasePointerCapture()
  Libera (detiene) la captura de puntero que se estableció previamente para 
  un archivo pointer event.
*/
function beginSliding(e) {
  slider.onpointermove = slide;
  slider.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

const slider = document.getElementById('slider');

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;

/*	
  Element.remove()
  Elimina el elemento de la lista secundaria de su padre.
*/
let el = document.getElementById('div-02');
el.remove(); // Removes the div with the 'div-02' id

/*	
  Element.removeAttribute()
  Elimina el atributo nombrado del nodo actual.
*/
element.removeAttribute(attrName);

/*	
  Element.removeAttributeNode()
  Elimina la representación de nodo del atributo nombrado del nodo actual.
*/
const d = document.getElementById("top");

const d_align = d.getAttributeNode("align");

d.removeAttributeNode(d_align);
// align is now removed: <div id="top" />

/*	
  Element.removeAttributeNodeNS()
  Elimina el atributo con el nombre y el espacio de nombres especificados, 
  del nodo actual.
*/
const d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// Now: <div id="div1" width="200px" />

/*	
  Element.replaceChildren()
  Reemplaza los elementos secundarios existentes de a Nodepor un nuevo 
  conjunto de elementos secundarios especificado.
*/
const myNode = document.getElementById('yes');
myNode.replaceChildren();

/*	
  Element.replaceWith()
  Reemplaza el elemento en la lista secundaria de su padre con un conjunto de 
  objetos Node u DOMString.
*/
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"

/*	
  Element.scroll()
  Se desplaza a un conjunto particular de coordenadas 
  dentro de un elemento dado.
*/
element.scroll(x-coord, y-coord)
element.scroll(options)

/*	
  Element.scrollBy()
  Desplaza un elemento por la cantidad dada.
*/
element.scrollBy(x-coord, y-coord);
element.scrollBy(options)

/*	
  Element.scrollTo()
  Se desplaza a un conjunto particular de coordenadas dentro de un 
  elemento dado.
*/
element.scrollTo(x-coord, y-coord)
element.scrollTo(options)

/*	
  Element.setAttribute()
  Establece el valor de un atributo con nombre del nodo actual.
*/
Element.setAttribute(name, value);

/*	
  Element.setAttributeNode()
  Establece la representación de nodo del atributo nombrado del nodo actual.
*/
const replacedAttr = element.setAttributeNode(attribute);

/*	
  Element.setAttributeNodeNS()
  Establece la representación de nodo del atributo con el nombre y el espacio 
  de nombres especificados, desde el nodo actual.
*/
const myns = "http://www.mozilla.org/ns/specialspace";
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const a = d1.getAttributeNodeNS(myns, "special-align");

d2.setAttributeNodeNS(a.cloneNode(true));

alert(d2.attributes[1].value) // returns: `utterleft'

/*	
  Element.setAttributeNS()
  Establece el valor del atributo con el nombre y el espacio de nombres 
  especificados, desde el nodo actual.
*/
let d = document.getElementById('d1');
d.setAttributeNS('http://www.mozilla.org/ns/specialspace', 'spec:align', 'center');

/*	
  Element.setPointerCapture()
  Designa un elemento específico como el objetivo de captura de futuros 
  eventos de puntero .
*/
function beginSliding(e) {
  slider.onpointermove = slide;
  slider.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

const slider = document.getElementById('slider');

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;

/*	
  Element.toggleAtribute()
  Alterna un atributo booleano, eliminándolo si está presente y agregándolo 
  si no está presente, en el elemento especificado.
*/
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function(){
  input.toggleAttribute("disabled");
});
```

> algunos propiedades de Element funciona como si estamos en Document no es necesario mostrar ejemplos