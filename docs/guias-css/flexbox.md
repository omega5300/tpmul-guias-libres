# flexbox

es un método de diseño unidimensional para organizar elementos en filas o columnas. Los elementos se flexionan (expanden) para llenar espacio adicional o se encogen para caber en espacios más pequeños. Este artículo explica todos los fundamentos.

## porque flexbox

Durante mucho tiempo, las únicas herramientas confiables compatibles con varios navegadores disponibles para crear diseños CSS eran funciones como flotadores y posicionamiento . Estos funcionan, pero de alguna manera también son limitantes y frustrantes.

Los siguientes diseños de diseño simples son difíciles o imposibles de lograr con tales herramientas de cualquier forma conveniente y flexible:

- Centrar verticalmente un bloque de contenido dentro de su padre.
- Hacer que todos los hijos de un contenedor ocupen la misma cantidad de --ancho / alto disponible, independientemente de cuánto ancho / alto esté disponible.
- Hacer que todas las columnas en un diseño de varias columnas adopten la misma altura incluso si contienen una cantidad diferente de contenido.

Como verá en las secciones siguientes, flexbox hace que muchas tareas de diseño sean mucho más fáciles. ¡Vamos a profundizar en!

``` css
section {
  display: flex; /* valor para utilizar las propiedades de flexbox*/
}
```

## modelos de flexbox

- main axis: es el eje que se ejecuta en la dirección en la que se colocan los elementos flexibles (por ejemplo, como filas en la página o columnas en la página). El inicio y el final de este eje se denominan main start y main end.
- cross axis: es el eje que corre perpendicular a la dirección en la que se colocan los elementos flexibles. El inicio y el final de este eje se denominan cross start y cross end.
- El elemento padre que se ha display: flex establecido en él ( uso de la etiqueta section en nuestro ejemplo) se llama flex container.

- Los elementos dispuestos como cajas flexibles dentro del flex container se denominan flex items (aplicado en la etiqueta article por ejemplo).

## columnas y filas de flexbox

Flexbox proporciona una propiedad llamada flex-directionque especifica en qué dirección se ejecuta el eje principal (en qué dirección se colocan los elementos secundarios de flexbox). De forma predeterminada, esto está configurado en row, lo que hace que se coloquen en una fila en la dirección en la que funciona el idioma predeterminado de su navegador (de izquierda a derecha, en el caso de un navegador en inglés).

``` css
flex-direction: column;
```

## wrapping

Un problema que surge cuando tiene un ancho o alto fijo en su diseño es que eventualmente sus hijos de flexbox desbordarán su contenedor, rompiendo el diseño:

``` css
flex-wrap: wrap;
flex: 200px;
```

## flex-flow shorthand

En este punto vale la pena señalar que existe un atajo para flex-directiony flex-wrap: flex-flow. Entonces, por ejemplo, puede reemplazar.

``` css
/* sin el shorthand flex-flow*/
flex-direction: row;
flex-wrap: wrap;

/* usando flex-flow*/
flex-flow: row wrap;
```

## dimensionamiento de los objetos de flexbox

Volvamos ahora a nuestro primer ejemplo y veamos cómo podemos controlar qué proporción de espacio ocupan los elementos flexibles en comparación con los otros flex items.

``` css
article {
  flex: 1;
}
```

## shorthand vs longhand

la propiedad flex es una propiedad acortada "shorthand" que se espefica por los siguientes valores:

- El valor de la proporción sin unidades que discutimos anteriormente. Esto se puede especificar por separado utilizando la propiedad flex-glow propiedad longhand.
- Un segundo valor de proporción sin unidades flex-shrink, que entra en juego cuando los elementos flexibles se desbordan de su contenedor. Este valor especifica cuánto se encogerá un artículo para evitar que se desborde. Esta es una característica bastante avanzada de flexbox y no la cubriremos más en este artículo.
- El valor de tamaño mínimo que discutimos anteriormente. Esto se puede especificar por separado utilizando el flex-basisvalor a mano alzada.

## propiedades de flexbox

### flex-direction

La propiedad CSS establece cómo se colocan los elementos flexibles en el contenedor flexible que define el eje principal y la dirección (normal o invertida).

``` css
/* The direction text is laid out in a line */
flex-direction: row;

/* Like <row>, but reversed */
flex-direction: row-reverse;

/* The direction in which lines of text are stacked */
flex-direction: column;

/* Like <column>, but reversed */
flex-direction: column-reverse;
```

### flex-wrap

establece si los elementos flexibles se fuerzan en una línea o se pueden ajustar en varias líneas. Si se permite el ajuste, establece la dirección en la que se apilan las líneas.

``` css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;
```

- nowrap: Los artículos flexibles se colocan en una sola línea, lo que puede hacer que el contenedor flexible se desborde. El inicio cruzado es equivalente al inicio o antes, según el flex-directionvalor. Este es el valor predeterminado.
- wrap: Los elementos flexibles se dividen en varias líneas. El inicio cruzado es equivalente al inicio o antes delflex-direction valor dependiente y el final cruzado es lo opuesto al inicio cruzado especificado.
- wrap-reverse: Se comporta igual que, wrappero el cross main y end están permutados.

### flex-flow

La propiedad abreviada de CSS especifica la dirección de un contenedor flexible, así como su comportamiento de envoltura.

``` css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;
```

### flex-grow

establece el factor de crecimiento flexible de un elemento flexbox.

``` css
flex-grow: 1;
```

### flex-shrink

esta propiedad establece a flex-shrink de un elemento flex. Si el tamaño de todos los artículos flexibles es más grande que el contenedor flexible, los artículos se encogen para ajustarse a flex-shrink.

``` css
flex-shrink: 1;
```

### flex-basis

esta propiedad establece el tamaño principal inicial de un elemento flexbox de acuerdo con el box-sizing.

``` css
/* Specify <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;
```

### flex (shorthand)

es una propiedad shorthand establece cómo un elemento flexible crecerá o se reducirá para ajustarse al espacio disponible en su flex container.

``` css
/* Keyword values */
flex: auto;
flex: initial;
flex: none;

/* One value, unitless number: flex-grow
flex-basis is then equal to 0. */
flex: 2;

/* One value, width/height: flex-basis */
flex: 10em;
flex: 30%;
flex: min-content;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;
```

### align-items

establece el align-selfvalor en todos los hijos directos como grupo. En Flexbox, controla la alineación de los elementos en el eje transversal . En el diseño de cuadrícula, controla la alineación de los elementos en el eje del bloque dentro de su grid area.

``` css
/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
/* align-items does not take left and right values */
align-items: center; /* Pack items around the center */
align-items: start; /* Pack items from the start */
align-items: end; /* Pack items from the end */
align-items: flex-start; /* Pack flex items from the start */
align-items: flex-end; /* Pack flex items from the end */

/* Baseline alignment */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alignment (for positional alignment only) */
align-items: safe center;
align-items: unsafe center;
```

### align-self

anula el valor de alinear elementos de una cuadrícula o flex container. En grid, alinea el elemento dentro del gird area. En Flexbox, alinea el elemento en el cross axis.

``` css
/* Keyword values */
align-self: auto;
align-self: normal;

/* Positional alignment */
/* align-self does not take left and right values */
align-self: center; /* Put the item around the center */
align-self: start; /* Put the item at the start */
align-self: end; /* Put the item at the end */
align-self: self-start; /* Align the item flush at the start */
align-self: self-end; /* Align the item flush at the end */
align-self: flex-start; /* Put the flex item at the start */
align-self: flex-end; /* Put the flex item at the end */

/* Baseline alignment */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Stretch 'auto'-sized items to fit the container */

/* Overflow alignment */
align-self: safe center;
align-self: unsafe center;
```

### justify-content

La propiedad CSS justify-content define cómo el navegador distribuye el espacio entre y alrededor de los elementos de contenido a lo largo del eje principal de un contenedor flexible y el eje en línea de un contenedor de cuadrícula.

El siguiente ejemplo interactivo demuestra algunos de los valores que utilizan Grid Layout.

``` css
/* Positional alignment */
justify-content: center;     /* Pack items around the center */
justify-content: start;      /* Pack items from the start */
justify-content: end;        /* Pack items from the end */
justify-content: flex-start; /* Pack flex items from the start */
justify-content: flex-end;   /* Pack flex items from the end */
justify-content: left;       /* Pack items from the left */
justify-content: right;      /* Pack items from the right */

/* Baseline alignment */
/* justify-content does not take baseline values */

/* Normal alignment */
justify-content: normal;

/* Distributed alignment */
justify-content: space-between; /* Distribute items evenly
                                   The first item is flush with the start,
                                   the last is flush with the end */
justify-content: space-around;  /* Distribute items evenly
                                   Items have a half-size space
                                   on either end */
justify-content: space-evenly;  /* Distribute items evenly
                                   Items have equal space around them */
justify-content: stretch;       /* Distribute items evenly
                                   Stretch 'auto'-sized items to fit
                                   the container */

/* Overflow alignment */
justify-content: safe center;
justify-content: unsafe center;
```

### order

establece el orden para colocar un artículo en un flex o grid container. Los elementos de un contenedor se clasifican por valor de orden ascendente y luego por orden de código fuente.

``` css
order: 3;
```