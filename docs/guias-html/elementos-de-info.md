# etiquetas de info

estos elementos son para dar una información como citas referencias info de contactos o para la separación de contenidos.

## etiqueta address

esta etiqueta en función semántica es para dar info de contacto comúnmente se colocar dentro de la etiqueta de footer.

```html
<address>
  You can contact author at <a href="http://www.somedomain.com/contact">
  www.somedomain.com</a>.<br>
  If you see any bugs, please <a href="mailto:webmaster@somedomain.com">
  contact webmaster</a>.<br>
  You may also want to visit us:<br>
  Mozilla Foundation<br>
  331 E Evelyn Ave<br>
  Mountain View, CA 94041<br>
  USA
</address>
```

## etiqueta hr

esta etiqueta se usa para la separación de un contenido ideal para paginas informativas

```html
<hr>
```

| Atributos | Descripción |
| ----------- | ----------- |
| align | este atributo es para dar alineación es un atributo desfasado para favorecer a CSS |
| color | este atributo es para dar color es un atributo no standard es recomendable CSS |
| noshade | este atributo es para quitar la sombra de hr es un atributo desfasado y evite su uso |
| size | este atributo es para dar tamaño de alto al hr es un atributo desfasado para favorecer a CSS |
| width | este atributo es para dar tamaño de ancho al hr es un atributo desfasado para favorecer a CSS |

## etiqueta blockquote

esta etiqueta sirve para dar notas para acreditar a derechos de autor una referencia bajo elemento de bloque

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">p>
    Words can be like X-rays, if you use them properly—they’ll go through
    You read and you’re pierced.
  </p>
</blockquote>
```

| Atributos | Descripción |
| ----------- | ----------- |
| cite | este atributo es para colocar el enlance de la referencia donde conseguir el fragmento o frase |

## etiqueta dialog

esta etiqueta es para uso de ventanas modales es una etiqueta experimental solo compatible con Chrome y sus derivados

```html
<dialog open>
  <p>Greetings, one and all!</p>
</dialog>
```

| Atributos | Descripción |
| ----------- | ----------- |
| open | este atributo un atributo booleano que no necesita un valor extra indica si el atributo esta colocando es verdadero caso que no esta colocando es falso |

## etiqueta details

esta etiqueta cuya función es para la creación de elementos colapsables de forma nativa sin la necesidad de usar gran parte JavaScript solo poco o nulo.

```html
<details open>
  <summary>Details</summary>
  <p>Greetings, one and all!</p>
</details>
```

| Atributos | Descripción |
| ----------- | ----------- |
| open | este atributo un atributo booleano funciona exactamente igual con dialog |

## etiqueta summary

esta etiqueta es un elemento de linea cuya función es para dar titulo para los elementos colapsables debe esta dentro de la etiqueta details.

```html
<summary>Details</summary>
```

## etiqueta a

esta etiqueta cuya función mas esencial es el uso de hipervínculos o enlaces hacia los otros documentos o sitios externos como ejemplo Google.

```html
<a href="https://google.com" target="_blank">entrar a google</a>
```

| Atributos | Descripción |
| ----------- | ----------- |
| download | este es un atributo booleano que sirve para da vía a descargar de archivos **nota: solo para archivos** |
| href | este atributo es obligatorio de la etiqueta sirve para colocar la direccionan de la ruta del proyecto o sitio externo |
| rel | este atributo es usando para motivos de seo de la pagina web |
| target | este atributo sirve para donde queremos que redirecciones por defecto sin colocar el atributo es el valor _self |

## etiqueta abbr

esta etiqueta cuya función es mostrar los acrónimos de cierta tecnología o términos para tu pagina web

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

| Atributos | Descripción |
| ----------- | ----------- |
| title | sirve para mostrar la información de acrónimo |

## etiqueta dfn

esta etiqueta cuya función es resalta a nivel semántico una definición es usado es recomendable para sitios web de carácter educativo o informativo

```html
<dfn id="definition-dfn">&lt;dfn&gt;</dfn>
```

> esta etiqueta se lleva bien con las otras etiqueta de linea y no hay conflictos de semantica por parte de W3C

## etiqueta cite

esta etiqueta es bastante similar a blockquote pero su mayor diferencia es que es un elemento de linea y es usado para referencias cortas como títulos de filmes, poemas

```html
<cite>[ISO-0000]</cite>
```

## etiqueta time

esta etiqueta en función semántica sirve para representar la hora y ficha es comúnmente usando en sitios informativos o en blogs.

```html
<time datetime="2001-05-15T19:00">May 15</time>
```