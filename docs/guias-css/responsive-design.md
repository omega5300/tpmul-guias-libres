# responsive design

En los primeros días del diseño web, las páginas se creaban para apuntar a un tamaño de pantalla particular. Si el usuario tenía una pantalla más grande o más pequeña de lo que esperaba el diseñador, los resultados iban desde barras de desplazamiento no deseadas hasta longitudes de línea demasiado largas y un uso deficiente del espacio. A medida que se dispuso de tamaños de pantalla más diversos , apareció el concepto de diseño web receptivo (RWD), un conjunto de prácticas que permite que las páginas web modifiquen su diseño y apariencia para adaptarse a diferentes anchos de pantalla, resoluciones, etc. la forma en que diseñamos para una web multidispositivo, y en este artículo, lo ayudaremos a comprender las principales técnicas que necesita saber para dominarlo.

para que funcione debes tener un etiqueta de html meta bajo viewport ejemplo

``` html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

## historia de esquema del diseño web

En un momento de la historia, tenía dos opciones al diseñar un sitio web:

- Podría crear un sitio líquido , que se expandiría para llenar la ventana del navegador
- o un sitio de ancho fijo , que sería un tamaño fijo en píxeles.

Estos dos enfoques tendían a dar como resultado un sitio web que se veía mejor en la pantalla de la persona que diseñaba el sitio. El sitio líquido resultó en un diseño aplastado en pantallas más pequeñas (como se ve a continuación) y longitudes de línea ilegiblemente largas en las más grandes.

## formas de realizar diseño responsive

este concepto hay muchas formas de realizar diseño responsivo por medio de estos metodos

- media queries:
  ``` css
  @media screen and (min-width: 800px) {
    .container {
      margin: 1em 2em;
    }
  }
  ```
- por medio de porcentajes
  ``` css
  .col {
    width: 6.25%; /* 60 / 960 = 0.0625 */
  }
  ```
- columnas
  ```css
  .container {
    column-width: 10em;
  }
  ```
- flexbox
  ``` css
  .container {
    display: flex;
  }

  .item {
    flex: 1;
  }

  ```
- grids
  ``` css
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  ```

## otros metodos de responsive

- por medio de max-width >> en caso de imagenes
- fuentes bajo las unidades rem y em o vw