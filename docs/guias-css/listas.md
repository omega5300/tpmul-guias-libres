# listas

en CSS podemos dar estilos a las listas solo si trabajamos con listas desordenadas

## list-style

La propiedad abreviada de CSS le permite establecer todas las propiedades de estilo de lista a la vez.

``` css
/* type */
list-style: square;

/* image */
list-style: url('../img/shape.png');

/* position */
list-style: inside;

/* type | position */
list-style: georgian inside;

/* type | image | position */
list-style: lower-roman url('../img/shape.png') outside;

/* Keyword value */
list-style: none;
```

## list-style-image

La propiedad establece una imagen que se utilizará como marcador de elemento de lista. A menudo es más conveniente utilizar la abreviatura list-style.

``` css
/* Keyword values */
list-style-image: none;

/* <url> values */
list-style-image: url('starsolid.gif');

/* valid image values */
list-style-image: linear-gradient(to left bottom, red, blue);
```

## list-style-type

La propiedad establece el marcador (como un disco, carácter o estilo de contador personalizado) de un elemento de lista.

``` css
/* Partial list of types */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: trad-chinese-informal;
list-style-type: kannada;

/* <string> value */
list-style-type: '-';

/* Identifier matching an @counter-style rule */
list-style-type: custom-counter-style;

/* Keyword value */
list-style-type: none;
```

### list-style-position

La propiedad establece la posición del ::marker en relación con un elemento de la lista.

``` css
/* Keyword values */
list-style-position: inside;
list-style-position: outside;
```