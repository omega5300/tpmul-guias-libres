# grid

CSS Grid Layout es un sistema de diseño bidimensional para la web. Le permite distribuir el contenido en filas y columnas. Tiene muchas características que facilitan la creación de diseños complejos. Este artículo le explicará todo lo que necesita saber para comenzar con el diseño de página.

## que se trata el diseño grid

Una cuadrícula es una colección de líneas horizontales y verticales que crean un patrón contra el cual podemos alinear nuestros elementos de diseño. Nos ayudan a crear diseños en los que nuestros elementos no saltan ni cambian de ancho a medida que nos movemos de una página a otra, lo que proporciona una mayor coherencia en nuestros sitios web.

![grid example](/img/web/grid.png)

para definir el diseño grid se debe usar la propiedad display bajo el valor grid o inline grid

``` css
.container {
    display: grid;
}
```

## propiedades de grid

en css podemos implentar ciertas propiedades para agilizar nuestro diseño visual de la pagina web y estas son:

### funcion minmax()

La minmax()función nos permite establecer un tamaño mínimo y máximo para una pista, por ejemplo minmax(100px, auto),. El tamaño mínimo es de 100 píxeles, pero el máximo es auto, que se expandirá para acomodar más contenido. Intente cambiar grid-auto-rowspara usar un valor minmax:

``` css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto); /* uso de minmax */
    gap: 20px;
}
```

### grid-column-start

especifica la posición inicial de un elemento de la cuadrícula dentro de la columna de la cuadrícula contribuyendo con una línea, un tramo o nada (automático) a su ubicación en la cuadrícula. Esta posición de inicio define el borde de inicio del bloque del área de la cuadrícula.

``` css
/* Keyword value */
grid-column-start: auto;

/* <custom-ident> value */
grid-column-start: somegridarea;

/* <integer> + <custom-ident> values */
grid-column-start: 2;
grid-column-start: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-column-start: span 3;
grid-column-start: span somegridarea;
grid-column-start: span somegridarea 5;
```

### grid-column-end

especifica una posición final de elementos de la cuadrícula dentro de la columna de la cuadrícula contribuyendo una línea, un tramo o nada (automático) a su ubicación de cuadrícula, especificando así el borde del final del bloque de su área de cuadrícula.

``` css
/* Keyword value */
grid-column-end: auto;

/* <custom-ident> values */
grid-column-end: somegridarea;

/* <integer> + <custom-ident> values */
grid-column-end: 2;
grid-column-end: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-column-end: span 3;
grid-column-end: span somegridarea;
grid-column-end: 5 somegridarea span;
```

### grid-column

La propiedad abreviada especifica el tamaño y la ubicación de un elemento de la cuadrícula dentro de una columna de la cuadrícula al contribuir una línea, un tramo o nada (automático) a su ubicación de cuadrícula, especificando así el borde de inicio en línea y final en línea de su área de cuadrícula.

``` css
grid-column: auto;

/* with line numbers */
grid-column: 1;
grid-column: 1 / 3;
grid-column: 1 /  span 2;

/* with line names */
grid-column: main-start;
grid-column: main-start / main-end;
```

### grid-row-start

especifica una posición de inicio de elementos de la cuadrícula dentro de la fila de la cuadrícula contribuyendo una línea, un tramo o nada (automático) a su ubicación de cuadrícula, especificando así el borde de inicio en línea de su área de cuadrícula.

``` css
/* Keyword value */
grid-row-start: auto;

/* <custom-ident> values */
grid-row-start: somegridarea;

/* <integer> + <custom-ident> values */
grid-row-start: 2;
grid-row-start: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-row-start: span 3;
grid-row-start: span somegridarea;
grid-row-start: 5 somegridarea span;
```

### grid-row-end

especifica una posición final de elementos de la cuadrícula dentro de la fila de la cuadrícula contribuyendo con una línea, un tramo o nada (automático) a su ubicación de cuadrícula, especificando así el borde del extremo en línea de su área de cuadrícula.

``` css
/* Keyword value */
grid-row-end: auto;

/* <custom-ident> values */
grid-row-end: somegridarea;

/* <integer> + <custom-ident> values */
grid-row-end: 2;
grid-row-end: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-row-end: span 3;
grid-row-end: span somegridarea;
grid-row-end: 5 somegridarea span;
```

### grid-row

La propiedad abreviada especifica el tamaño y la ubicación de un elemento de la cuadrícula dentro de la fila de la cuadrícula contribuyendo con una línea, un tramo o nada (automático) a la ubicación de la cuadrícula, especificando así el borde de inicio y final en línea de su área de cuadrícula.

``` css
/* Keyword values */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> values */
grid-row: somegridarea;
grid-row: somegridarea / someothergridarea;

/* <integer> + <custom-ident> values */
grid-row: somegridarea 4;
grid-row: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> values */
grid-row: span 3;
grid-row: span somegridarea;
grid-row: 5 somegridarea span;
grid-row: span 3 / 6;
grid-row: span somegridarea / span someothergridarea;
grid-row: 5 somegridarea span / 2 span;
```

### grid-template-areas

especifica áreas de cuadrícula con nombre, estableciendo las celdas en la cuadrícula y asignándoles nombres.

``` css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b";
grid-template-areas: "a b b"
                     "a c d";
```

### grid-template-columns

esta propiedad define los nombres de las líneas y las funciones de tamaño de las pistas de las columnas de la cuadrícula.

``` css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-columns: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-columns: [linename1 linename2] 100px
                       repeat(auto-fit, [linename1] 300px) [linename3];
```

### gird-area

La propiedad abreviada especifica el tamaño y la ubicación de un elemento de la cuadrícula dentro de una cuadrícula al contribuir una línea, un tramo o nada (automático) a su ubicación de cuadrícula, especificando así los bordes de su área de cuadrícula.

``` css
/* Keyword values */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> values */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? values */
grid-area:  4 some-grid-area;
grid-area:  4 some-grid-area / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;
```

### gap

establece los espacios (medianiles) entre filas y columnas. Es una abreviatura de espacio entre filas y espacio entre columnas.

``` css
/* One <length> value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* One <percentage> value */
gap: 16%;
gap: 100%;

/* Two <length> values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* One or two <percentage> values */
gap: 16% 100%;
gap: 21px 82%;

/* calc() values */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);
```