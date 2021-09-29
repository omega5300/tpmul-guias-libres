# background

la proiedad background es una de la propiedades mas utilizadas en CSS sirve para establece un fondo de pantalla no importa si es color, imagenes o gradientes(degradados). se puede utilizar tanto shorthand como sus otras subpropiedades de background.

``` css
.box {
  background: linear-gradient(105deg, rgba(255,255,255,.2) 39%, rgba(51,56,57,1) 96%);
}
```
## background-color

nos permite colocar un color de fondo sin la necesidad de una imagen "es la opcion mas util para las paginas web"

``` css
.box {
  background-color: #555;
}
```

## background-image

nos permite colocar tanto imagenes como gradientes(degradados) "en ocasiones se usa mas los degrados debido que las imagenes se carga dependiendo del formato y tamaño".

``` css
.a {
  background-image: url(balloons.jpg);
}
```

## background-repeat

un problema comun de background-image es que las imagenes se repite y en "ocasiones se ve esteticamente feo en ciertas situaciones".

``` css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
}
```

### valores de background-repeat

- no-repeat: evitar que el fondo se repita por completo.
- repeat-x: se repite de forma horizontal
- repeat-y: se repite de forma vertical
- repeat: valor por defecto que se Repita en ambas direcciones.

## background-size

esta propiedad nos ayuda a dar la longitud de la imagen puede ser por medios de unidades de medida o la propiedades especiales de background-size.

``` css
.box {
  background-image: url(balloons.jpg);
  background-repeat: no-repeat;
  background-size: 100px 10em;
}
```

### valores de background-size

- cover: cubre todo el alto y ancho del selector,
- contain: usan el espacio adecuado dentro del selector utilizado

### background-position

esta propiedad sirve para cambiar de posicion al nuestro fondo no aplica con background-color de forma vertical y horizontal.

``` css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

### valores de background-position

- top
- bottom
- left
- right
- center

> se puede combinar o usar unidades de medida de porcentaje

## background-attachment
Otra opción que tenemos disponible para los fondos es especificar cómo se desplazan cuando se desplaza el contenido. Esto se controla mediante la background-attachmentpropiedad, que puede tomar los siguientes valores

- scroll
- fixed
- local

``` css
background-attachment: scroll;
```

## degradados

los degrados son considerados para usar en background-image no nos preocupamos por el problema de repeat debido que son colores

### tipos de degradados

- linear: linear-gradient(#f69d3c, #3f87a6)
- radial: radial-gradient(#f69d3c, #3f87a6)
- repeating-linear: repeating-linear-gradient(#f69d3c, #3f87a6 50px)
- repeating-radial: repeating-radial-gradient(#f69d3c, #3f87a6 50px)
- conic: conic-gradient(#f69d3c, #3f87a6)