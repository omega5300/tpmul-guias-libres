# SVG

SVG en español gráficos vectoriales escalable o por su acronimo en ingles (Scalable Vector Graphics) es un formato libre basado en XML

Como tal, es un estándar web abierto basado en texto para describir imágenes que se pueden renderizar de forma limpia en cualquier tamaño y están diseñados específicamente para funcionar bien con otros estándares web, incluidos CSS , DOM , JavaScript y SMIL . SVG es, esencialmente, para gráficos lo que HTML es para texto.

Las imágenes SVG y sus comportamientos relacionados se definen en archivos de texto XML , lo que significa que se pueden buscar, indexar, codificar y comprimir. Además, esto significa que se pueden crear y editar con cualquier editor de texto o con software de dibujo.

a diferencia de las imagenes tradiciones los svg no pierde calidad al momento de aumentar el alto y el ancho debido que las imagenes JPEG y PNG se basa en mapa de bits.

``` html
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
``` 