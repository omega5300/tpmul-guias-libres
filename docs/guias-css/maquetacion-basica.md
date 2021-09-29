# maquetacion basica

son ciertas propiedades de css que nos sirve para maquetar estilos a nuestro sitio web no tambien es aplicable con correo electronico entre ellas tenemos:

## float

coloca un elemento en el lado izquierdo o derecho de su contenedor, lo que permite que el texto y los elementos en línea lo envuelvan. El elemento se elimina del flujo normal de la página, aunque sigue siendo parte del flujo (en contraste con el posicionamiento absoluto).

tambien son empleados con el uso de margin

``` css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;
```

### valores de float

- left: El elemento debe flotar en el lado izquierdo de su bloque contenedor.
- right: El elemento debe flotar en el lado derecho de su bloque contenedor.
- none: El elemento no debe flotar.
- inline-start: El elemento debe flotar en el lado inicial de su bloque contenedor. Ese es el lado izquierdo con ltrguiones y el lado derecho con rtlguiones.
- inline-end: El elemento debe flotar en el lado final de su bloque contenedor. Ese es el lado derecho con ltrguiones y el lado izquierdo con rtlguiones.

## clear

establece si un elemento debe moverse debajo (borrado) de los elementos flotantes que lo preceden. La propiedad clara se aplica a elementos flotantes y no flotantes.

``` css
/* Keyword values */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start; /* only in firefox */
clear: inline-end; /* only in firefox */
```

### valores de clear

- none: Es una palabra clave que indica que el elemento no se mueve hacia abajo para borrar elementos flotantes pasados.
- left: Es una palabra clave que indica que el elemento se mueve hacia abajo para despejar los flotadores izquierdos anteriores.
- right: Es una palabra clave que indica que el elemento se mueve hacia abajo para borrar los flotantes a la derecha.
- both: Es una palabra clave que indica que el elemento se mueve hacia abajo para despejar más allá de los flotadores izquierdo y derecho.
- inline-start: Es una palabra clave que indica que el elemento se mueve hacia abajo para borrar los flotantes en el lado inicial de su bloque contenedor , es decir, los flotantes de la izquierda en los scripts ltr y los flotantes de la derecha en los scripts rtl.
- inline-end: Es una palabra clave que indica que el elemento se mueve hacia abajo para borrar los flotantes en el lado final de su bloque contenedor , es decir, los flotantes de la derecha en los scripts ltr y los flotantes de la izquierda en los scripts rtl.

## overflow

La propiedad abreviada establece el comportamiento deseado para el desbordamiento de un elemento, es decir, cuando el contenido de un elemento es demasiado grande para caber en su contexto de formato de bloque, en ambas direcciones.

``` css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;
```

### overflow-x

establece lo que se muestra cuando el contenido se desborda en los bordes izquierdo y derecho de los elementos a nivel de bloque. Esto puede ser nada, una barra de desplazamiento o el contenido de desbordamiento.

``` css
/* Keyword values */
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;
overflow-x: hidden visible;
```

### overflow-y

establece lo que se muestra cuando el contenido se desborda en los bordes superior e inferior de los elementos a nivel de bloque. Esto puede ser nada, una barra de desplazamiento o el contenido de desbordamiento.

``` css
/* Keyword values */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;
overflow-y: hidden visible;
```

### valores de overflow

- visible: El contenido no se recorta y se puede representar fuera del cuadro de relleno.
- hidden: El contenido se recorta si es necesario para que quepa en la caja de relleno. No se proporcionan barras de desplazamiento y no se permite el soporte para permitir que el usuario se desplace (por ejemplo, arrastrando o usando una rueda de desplazamiento). El contenido se puede desplazar mediante programación (por ejemplo, estableciendo el valor de una propiedad como offsetLeft), por lo que el elemento sigue siendo un contenedor de desplazamiento.
- clip: De manera similar hidden, el contenido se recorta en el cuadro de relleno del elemento. La diferencia entre clipy hiddenes que la clippalabra clave también prohíbe todo el desplazamiento, incluido el desplazamiento programático. El cuadro no es un contenedor de desplazamiento y no inicia un nuevo contexto de formato. Si desea iniciar un nuevo contexto de formato, puede utilizar display: flow-rootpara hacerlo.
- scroll: El contenido se recorta si es necesario para que quepa en la caja de relleno. Los navegadores siempre muestran barras de desplazamiento independientemente de que el contenido esté recortado o no, lo que evita que las barras de desplazamiento aparezcan o desaparezcan a medida que cambia el contenido. Es posible que las impresoras sigan imprimiendo contenido desbordado.
- auto: Depende del agente de usuario . Si el contenido cabe dentro del cuadro de relleno, se ve igual que visible, pero aún establece un nuevo contexto de formato de bloque. Los navegadores de escritorio proporcionan barras de desplazamiento si el contenido se desborda.

## display flex-root

La forma moderna de resolver este problema es utilizar el valor raíz de flujo de la propiedad de visualización. Esto existe solo para crear un BFC sin usar hacks; no habrá consecuencias no deseadas cuando lo use. Elimine overflow: auto de su regla .wrapper y agregue display: flow-root. Suponiendo que tenga un navegador compatible, la casilla se borrará.

``` css
.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}
```

## position

La propiedad establece cómo se coloca un elemento en un documento. Las propiedades superior, derecha, inferior e izquierda determinan la ubicación final de los elementos posicionados.

``` css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

### valores de position

| valores | descripción |
| ----------- | ----------- |
| static | El elemento se posiciona de acuerdo con el flujo normal del documento. el top, right, bottom, left, y z-index no tienen ningún efecto. Este es el valor predeterminado. |
| relative | El elemento se posiciona de acuerdo con el flujo normal del documento y luego se desplaza con respecto a sí mismo en función de los valores de top, right, bottom, left El desplazamiento no afecta la posición de ningún otro elemento; hace, el espacio dado para el elemento en el diseño de la página es el mismo que si la posición fuera de static. |
| absolute | El elemento se elimina del flujo de documentos normal y no se crea espacio para el elemento en el diseño de la página. Está posicionado en relación con su antepasado posicionado más cercano, si lo hay; de lo contrario, se coloca en relación con el bloque contenedor inicial. Su posición final está determinada por los valores de top, right, bottom, left |
| fixed | El elemento se elimina del flujo de documentos normal y no se crea espacio para el elemento en el diseño de la página. Se coloca en relación con el bloque contenedor inicial establecido por la ventana gráfica, excepto cuando uno de sus antepasados tiene una propiedad de transformación, perspectiva o filtro establecida en algo diferente a ninguno (consulte la especificación de transformaciones CSS), en cuyo caso ese antepasado se comporta como el bloque contenedor. |
| sticky | El elemento se posiciona de acuerdo con el flujo normal del documento, y luego se desplaza con respecto a su ancestro de desplazamiento más cercano y al bloque contenedor (ancestro de nivel de bloque más cercano), incluidos los elementos relacionados con la tabla, según los valores de top, right, bottom, left |

## z-index

La propiedad establece el orden z de un elemento posicionado y sus descendientes o elementos flexibles. Los elementos superpuestos con un índice Z más grande cubren a los que tienen uno más pequeño.

``` css
z-index: 0;
```