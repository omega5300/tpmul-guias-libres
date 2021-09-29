# unidades de CSS

los valores de CSS se define para estipular los cambios visuales en cuando a tamaños, bordes, efectos, entre otros ciertos valores se admite en css que HTML no se podria tal facil se cataloga de lo siguientes valores:

## variables

las variables de CSS son utiles para declarar valores para ser reutilizadas sin recurrir al D.R.Y. su uso para declarar es por medio de la pseudoclase root es el metodo mas comun para llamar se debe emplear la funciòn llamada var:

``` css
:root {
  --fonts: font-family: 'Roboto', sans-serif;
}

.article {
  font-family: var(--fonts);
}
```

## cadena de caracteres

las cadena de caracteres son vital en algunas propiedades como content o funciones como url o reglas en especifico ejemplo las media queries hay casos que se usa con comillas otras sin comiilas debido a los systems name values en CSS

``` css
.article {
  font-family: font-family: 'Roboto', sans-serif;
}
```

## unidades de medida

las unidades de medida son aquellas que sirve para el redimesionamiento de los elementos, bordes o elementos multimedia se categoriza en dos.

### unidades de media absoluta

- enteros: representa todos los numeros naturales
- cm: representa centimetros 1cm = 38px
- mm: representa milimetros 1mm = 0.1cm = 3.8px
- Q: representa un cuarto de milimetro 1Q = 0.025cm = 0.95px
- in: representa pulgadas 1in = 2.54cm = 96px
- pc: representa la unidad de medida picas 1pc = 0.16in = 15.36px
- pt: representa la unidad de medidas puntos este tipo de unidad de media esta relacionado con word 1pt = 1.33px
- pixeles es la unidad estandard para todo.

### unidades de medida relativas

estas unidades son de forma dinamica acorde con el maximo que puede soportar la pantalla

- em: es usando para tipografias significa tamaño de la fuente establecido por el navegador.
- ex: representa la mitad del tamaño de la fuente de establecido por el navegador.
- ch: representa el ancho del cero.
- rem: representa el tamaño del elemento padre.
- 1h: representa el line height del elemento.
- vh: respresenta el 1% de alto de viewport.
- vw: respresenta el 1% de ancho de viewport.
- vmin: representa el tamaño minimo del viewport.
- vmax: representa el tamaño maximo del viewport.

## unidades de color

las unidades de color son valores que son lo siguiente

- colores por nombre: es la valor mas basico en CSS su uso solo es con proposito de aprender ejemplo si colocamos color: red; el navegador intepreta un rojo diferente,
- hexadecimal: es la unidad de color mas comun y la mas utilizada en CSS ejemplo background: #556 tiene dos metodos el metodo de seis numeros y el modo corto de tres nota el metodo de tres solo es usado si hay seis valores de mismo numero es opcional colocar un canal alfa.

- rgb y rgba son otros de los valores tambien de los mas comunes especificamente de rgba donde es una función que usa los tres canales que son el verde, rojo y azul son en unidades entera de 0 al 255, ente transparencia que puede se de numero entero de 0 al 1 en decimal o uso de porcentaje de 0 unidad neutra hasta el 100%.

- hsl y hsla: son formatos menos utilizados en CSS se representa en tres campos: 
   - Hue: representa la base de la sombra de color lo representa en unidades enteras de 0 al 360
   - Saturation: resprensenta la saturación de color de uso de porcentaje de 0 unidad neutra hasta el 100%.
   - Ligtness: resprensenta el brillo de color de uso de porcentaje de 0 unidad neutra hasta el 100%.
 el canal alfa es igual con rbg el uso de hsl no es soportando por internet explorer.

- lab esta funcion de CSS es experimental ejemplo: lab(29.2345% 39.3825 20.0664);

- transparent este valor representa la transparencia total de un selector si aplicas en background y es por defecto en todos los elementos

- currentcolor: aplica el color actual del selector anterior es usado para dar fallback

## funcion url

la funcion url sirve para llamar la ruta de un archivo sea absoluta o relatva.

``` css
.image {
  background-image: url(star.png);
}
```

## gradientes

los gradientes son patrones de colores sea de lineas, radial o otros se emplea dos colores o mas y su valor en grados deg y porcentaje ejemplos.

``` css
background: linear-gradient(#f69d3c, #3f87a6);
background: radial-gradient(#f69d3c, #3f87a6);
background: repeating-linear-gradient(#f69d3c, #3f87a6 50px);
background: repeating-radial-gradient(#f69d3c, #3f87a6 50px);
background: conic-gradient(#f69d3c, #3f87a6);
```

> estos son ejemplos de como se etipular el valor.

## función calc

esta funcion nos permite el calculo matematico. en todas las unidades excepto las de hexadecimal

``` css
.box {
  width: calc(20% + 100px);
}
```

## important

este valor es uno de los que debes evitar excepto en casos muy concretos important es un valor que dar mas prioridad a una propiedad de CSS evitando su sobre escritura vale por toda la especificacion de CSS.

``` css
.box {
  width: calc(20% + 100px) !important;
}
```

## comentarios

los comentarios son anotaciones para guiar al desarrollador o diseñador detalles de como funciona este selector en especifico los comentarios son tanto para una linea como multilinea su sintasis es simple sin comillas es asi "/**/"

``` css
/* esto es un comentario*/
```