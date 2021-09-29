# tablas

las tablas elementos muy esenciales fueron los pioneros de ser los que dar estilos a las paginas web ahora posee su propios metodos de estilo, entre ellos.

## table-layout

esta propiedad de CSS establece un algoritmao ultilizado para el diseño de las tablas filas y columnas.

- auto: valor por defecto que propocionar un diseño automatico por parte de navegador

- fixed

``` css
table-layout: auto;
table-layout: fixed;
```

## vertical-align

esta propiedad establece la alineación vertical de un cuadro en línea, de bloque en línea o de celda de tabla.

``` css
/* Keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;
```

## border-collapse

La propiedad establece si las celdas dentro de una tabla tienen los bordes separados o compartidos.

``` css
border-collapse: collapse;
border-collapse: separate;
```

## border-spacing

La propiedad establece la distancia entre los bordes de las celdas de la tabla adyacentes. Esta propiedad se aplica solo cuando border-collapse está separado.

``` css
/* <length> */
border-spacing: 2px;

/* horizontal <length> | vertical <length> */
border-spacing: 1cm 2em;
```

## caption-side

property coloca el contenido de una tabla caption en el sid especificado. Los valores son relativos al modo de escritura de la tabla.

``` css
/* Directional values */
caption-side: top;
caption-side: bottom;

/* Logical values */
caption-side: block-start;
caption-side: block-end;
caption-side: inline-start;
caption-side: inline-end;
```