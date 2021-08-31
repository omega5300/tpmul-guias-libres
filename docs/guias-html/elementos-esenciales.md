# etiquetas esenciales

son usualmente elementos que ocupa todo el espacio del elemento padre creado así un bloque 
al momento de crear otro elemento de bloque da un salto de linea.

## etiquetas de encabezado

las etiquetas de encabezado son usadas para la semántica de las paginas web. su uso es para dar títulos y subtítulos de la estructura web.

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

**es una mala practica no usar de forma correcta las etiquetas de encabezado **.

### mal uso de las etiquetas de encabezado 

```html
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

### buen uso de las etiquetas de encabezado

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

## etiqueta de header

esta etiqueta de para el uso semántico de las paginas así como complementos en las etiquetas como main, section, article y footer.

```html
<!-- como encabezado de pagina -->
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>
```
```html
<!-- encabezado de otra etiqueta semántica --><article>
<header>
  <h2>The Planet Earth</h2>
    <p>
      Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by Jane Smith
    </p>
  </header>
  <p>
    We live on a planet that's blue and green, with so many things still unseen.
  </p>
  <p>
    <a href="https://janesmith.com/the-planet-earth/">Continue reading....</a>
  </p>
</article>
```

## etiqueta main
esta etiqueta en función semántica representa el contenido principal de la pagina web.

```html
<main></main>
```

## etiqueta section
esta etiqueta en función semántica representa una sección de la pagina web.

```html
<section></section>
```

## etiqueta article
esta etiqueta en función semántica representa un articulo de la pagina web

```html
<article></article>
```

## etiqueta p
esta etiqueta representa el párrafo para de la pagina web son de múltiple uso.

```html
<p>hola mundo estoy aprendiendo independiente</p>
```

## etiqueta span
esta etiqueta es similar a la etiqueta div pero con uso especial para dar estilos con CSS.

```html
<span>Details</span>
```

## etiqueta nav
esta etiqueta en función semántica representa la navegación de la pagina o también dentro de las otras etiquetas.

```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

## etiqueta div
esta etiqueta representa como una división es usando para el uso de dibujos en CSS.

```html
<div>hola mundo estoy aprendiendo independiente</div>
```

## etiqueta aside
esta etiqueta en funcion semantica en bastante similar a nav solo para uso de barra laterales.

```html
<article>
  <p>
    The Disney movie <cite>The Little Mermaid</cite> was
    first released to theatres in 1989.
  </p>
  <aside>
    <p>
      The movie earned $87 million during its initial release.
    </p>
  </aside>
  <p>
    More info about the movie...
  </p>
</article>
```

## etiqueta footer
esta etiqueta en función semántica para representa el pie de pagina en la pagina web.

```html
<footer>hola mundo estoy aprendiendo independiente</footer>
```

## etiqueta button

esta etiqueta sirve para colocar botones a tu pagina usando para el uso de formularios o también en aplicaciones web tipo CRUD, redes social tiendas web

```html
<button>add to cart</button>
```

| Atributos | Descripción |
| ----------- | ----------- |
| type | este atributo es para especificar el comportamiento del boton el valor por defecto es el type="button" type="submit" es para el envío de formulario type="reset" es para limpiar datos del formulario mas bien reiniciarlo |
| disabled | es un atributo booleano cuya función radica en inhabilitar el botón |

> la etiqueta button es un remplazo útil para la etiqueta input bajo los types submit, reset y button