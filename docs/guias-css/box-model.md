# box model

todo el CSS tiene un cuadro a su alrededor, y comprender estos cuadros es clave para poder crear diseño usando CSS o alinear elementos con otros elementos.

analizaremos en detalle el modelo de caja (box model) para que pueda crear tareas de diseño mas complejas con una comprensión de como funciona.

## partes del box-model

- Cuadro de contenido : el área donde se muestra su contenido, que se puede dimensionar usando propiedades como widthy height.
- Cuadro de relleno : el relleno se coloca alrededor del contenido como un espacio en blanco; su tamaño se puede controlar usando paddingy propiedades relacionadas.
- Cuadro de borde: el cuadro de borde envuelve el contenido y cualquier relleno. Su tamaño y estilo se pueden controlar mediante borderlas propiedades relacionadas.
- Cuadro de margen : el margen es la capa más externa, que envuelve el contenido, el relleno y el borde como un espacio en blanco entre este cuadro y otros elementos. Su tamaño se puede controlar utilizando marginy propiedades relacionadas.

## elementos de bloque y elementos de linea

en CSS, en general, tenemos dos tipos de elementos que son: los elementos de bloque y los elementos de linea. estas caracteristicas se refieren al comportamiento de los elementos, los elementos tambien tiene u tipo de pantalla interior y un pantalla exterior.

### como se comporta los elementos de bloque

los elementos de bloque se comportará de las siguientes formas:

- la caja se romperá en una nueva linea.
- la se extendera para ocupar todo el ancho diponible su valor en pocas palabras ocupara el 100% de ancho de la pantalla.
- se permite el uso de la propiedaddes width y height.
- el pading, margin y borde harán que otros elementos se alejan del cuadro.

### como se comporta los elementos de linea

los elementos de bloque se comportará de las siguientes formas:

- el elemento no se romperá en una nueva linea.
- las propiedades width y height no sera aplicado.
- se permite el uso de pading, margin y border verticales, pero no harán que los otros elementos de linea se alejen del bloque.
- se permite el uso de pading, margin y border solo en horizontales, pero no harán que los otros elementos de linea se alejen del bloque.

## diferentes tipos de pantallas (display)

en CSS tenemos diferentes tipos de pantalla (display), todos los cuales tienen un tipo de visualización externa de bloque. el primero es un párrafo, que tiene un borde agregado en CSS. el navegador muestra esto como un elemento de bloque, por lo que el párrafo comienza en una nueva linea y se expande hasta todo el ancho disponible.

- block (que ocupa todo el ancho disponible)
- inline (solo ocupa una porcion de ancho disponible)
- inline-block (tiene algunas caracteristicas de los elementos de liena y bloque)
- flex (utilizado para flexbox completo)
- inline-flex (flexbox para uso de una sola linea)
- gird (es usado para el diseño responsive basado en grillas)

::: tip flexbox y grid
guia mas completa y detallada en: [guia de flexbox](/guias-css/flexbox.html) <br>
guia mas completa y detallada en: [guia de grid](/guias-css/gird.html)
:::

## width y height

estas propiedades establece el largo y ancho de un elemento excepto los de linea.

``` css
width: 350px;
height: 150px;
```

## box-sizing

esta propiedad de CSS determina la forma de como queremos el nuestro elemento en CSS el selector universal si es permito utilizar la propiedad box-sizing. Al hacer esto, le está diciendo al navegador que use el cuadro de borde, como se muestra arriba, como su área definida.

``` css
.box {
  box-sizing: border-box;
}
```

sus valores de box-sizing son: 
- border-box da prioridad al padding y border
- content-box es el valor por defecto que da prioridad al ancho

## margin

esta propiedad sirve para establecer margenes quiere que dar espaciados a nuestros elementos de CSS que puede establecer por medio de subpropiedad o el valor shorthand margin ejemplos:

``` css
margin: 1em; /* si son todos los lados*/
margin: 5% 0; /* si se trata de solo en vertical y horizontal */
margin: 1em auto 2em; /* si se trata de arriba, horizontal y abajo */
margin: 2px 1em 0 auto; /* si trabajas por cada lado por arriba, abajo, izquierda, derecha */
margin-inline: 40px; /* margenes horizontales */
margin-block: 4em; /* margenes verticales */
margin-top: -40px; /* margen superior equivalente margin-block-start */
margin-right: 30px; /* margen derecho equivalente margin-block-end */
margin-bottom: 40px; /* margen inferior equivalente margin-inline-end */
margin-left: 4em; /* margen izquierdo equivalente margin-block-start */
```

### colapsado de margenes

el problemas mas comun de css es el colapsado de margenes es si tenemos dos elementos cuyos margenes se tocan y ambas son positivos, esas márgenes se combinarán para ser una sola margen

> recomendacion: si trabajas solo trabaje con las margenes adecuadas para evitar posibles colapsados y quebraderos de cabeza como resolverlo.

## border

esta propiedad nos permite dibuja un cuadro tambien podemos dar estilos y colores es el que subpropiedades posee y tambien no permite trabaja con shorthand

``` css
border: 1px solid #333333; /* aplicar a todos los lados total*/
border-top: 1px solid #333333; /* borde superior*/
border-bottom: 1px solid #333333; /* borde inferior */
border-left: 1px solid #333333; /* borde izquierdo */
border-right: 1px solid #333333; /* borde derecho */
border-block: 1px solid #333333; /* bordes verticales */
border-inline: 1px solid #333333; /* bordes horizontales */

/* border-width con shorthand */
border-style: dotted; 

/* border-color con shorthand */
border-style: none;

/* lado superior*/
border-top-width: 2px;
border-top-style: solid;
border-top-color: #000;
/* equivalente border-inline-start */

/* lado derecho */
border-right-width: 2px;
border-right-style: solid;
border-right-color: #000;
/* equivalente border-block-end */

/* lado inferior */
border-bottom-width: 2px;
border-bottom-style: solid;
border-bottom-color: #000;
/* equivalente border-inline-end */

/* lado izquierdo */
border-left-width: 2px;
border-left-style: solid;
border-left-color: #000;
/* equivalente border-block-start */

/* horizontal */
border-inline-width: 2px;
border-inline-style: solid;
border-inline-color: #000;

/* vertical */
border-block-width: 2px;
border-block-style: solid;
border-block-color: #000;
```
### valores de border-style

- none (por defecto)
- hidden
- dotted
- dashed
- solid
- double
- groove
- ridge
- inset
- outset

### border-radius

esta propiedad es independiente de border se utiliza para redondear los bordes

``` css
/* The syntax of the first radius allows one to four values */
/* Radius is set for all 4 sides */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 10px / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* ... is equivalent to: */
border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
```

## pading

Podemos controlar el relleno en todos los lados de un elemento usando la propiedad shorthand padding, o en cada lado individualmente usando las propiedades equivalentes a mano alzada

``` css
padding: 1em; /* si son todos los lados*/
padding: 5% 0; /* si se trata de solo en vertical y horizontal */
padding: 1em auto 2em; /* si se trata de arriba, horizontal y abajo */
padding: 2px 1em 0 auto; /* si trabajas por cada lado por arriba, abajo, izquierda, derecha */ 
padding-top: -40px; /* padding superior equivalente padding-inline-start */
padding-right: 30px; /* padding derecho equivalente padding-block-end */
padding-bottom: 40px; /* padding inferior equivalente padding-inline-end */
padding-left: 4em; /* padding izquierdo equivalente padding-block-start */
padding-inline: 40px; /* padding horizontal */
padding-block: 4em; /* padding vertical */
```