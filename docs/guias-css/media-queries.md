# introducción a media queries

le da una forma de aplicar CSS sólo cuando el entorno de navegador y el dispositivo coincide con una regla que especifica, por ejemplo "ventana gráfica es más ancho de 480 píxeles". Las consultas de medios son una parte clave del diseño web receptivo, ya que le permiten crear diferentes diseños según el tamaño de la ventana gráfica, pero también se pueden usar para detectar otras cosas sobre el entorno en el que se ejecuta su sitio, por ejemplo, si el el usuario utiliza una pantalla táctil en lugar de un mouse. En esta lección, primero aprenderá acerca de la sintaxis utilizada en las consultas de medios y luego pasará a usarlas en un ejemplo trabajado que muestre cómo un diseño simple puede hacerse receptivo.

## ejemplo

``` css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

## tipos de media queries

- all
- print
- screen
- speech

## reglas de media queries

- width y height
  ``` css
  @media screen and (width: 600px) {
    body {
        color: red;
    }
  }
  ```
- orientación
  ``` css
  @media (orientation: landscape) {
    body {
        color: rebeccapurple;
    }
  }
  ```
- pointing devices
  ``` css
  @media (hover: hover) {
    body {
        color: rebeccapurple;
    }
  }
  ```
## media queries con operadores logicos

Con todas las diferentes consultas de medios posibles, es posible que desee combinarlas o crear listas de consultas, cualquiera de las cuales podría coincidir.

- and
  ``` css
  @media screen and (min-width: 600px) and (orientation: landscape) {
    body {
        color: blue;
    }
  }
  ```
- or
  ``` css
  @media screen and (min-width: 600px), screen and (orientation: landscape) {
    body {
        color: blue;
    }
  }
  ```
- not
  ``` css
  @media not all and (orientation: landscape) {
    body {
        color: blue;
    }
  }
  ```