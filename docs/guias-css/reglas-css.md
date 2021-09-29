# reglas de @

Las reglas at son declaraciones CSS que le indican a CSS cómo comportarse. Comienzan con un signo de arroba, ' @' ( U+0040 COMMERCIAL AT), seguido de un identificador e incluyen todo hasta el siguiente punto y coma, ' ;' lo que ocurra primero.

``` css
/* General structure */
@IDENTIFIER (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

## @charset

Define el juego de caracteres utilizado por la hoja de estilo.

``` css
@charset "utf-8";
```

## @import

Le dice al motor CSS que incluya una hoja de estilo externa. (el uso de esta regla es recomendable si vas a utilizar un pre-procesador o post-procesador).

``` css
@import "media.css";
```

## @namespace

Le dice al motor CSS que todo su contenido debe considerarse como prefijo con un espacio de nombres XML.

``` css
/* Default namespace */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* Prefixed namespace */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

## @media

Una regla de grupo condicional que aplicará su contenido si el dispositivo cumple los criterios de la condición definida mediante una consulta de medios.

> es utilizado para el diseño responsive

``` css
@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media screen, print {
  body { line-height: 1.2; }
}

@media only screen
  and (min-width: 320px)
  and (max-width: 480px)
  and (resolution: 150dpi) {
    body { line-height: 1.4; }
}
```

## @supports

Una regla de grupo condicional que aplicará su contenido si el navegador cumple con los criterios de la condición dada.

``` css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```

## @document

Una regla de grupo condicional que aplicará su contenido si el documento en el que se aplica la hoja de estilo cumple los criterios de la condición dada. (esta regla de CSS esta obsoleta)

``` css
@document url("https://www.example.com/") {
  h1 {
    color: green;
  }
}
```

## @page

Describe el aspecto de los cambios de diseño que se aplicarán al imprimir el documento.

``` css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

## @font-face

Describe el aspecto de una fuente externa que se descargará.

``` css
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

## @keyframes

Describe el aspecto de los pasos intermedios en una secuencia de animación CSS.

> es usando para realizar animaciones

``` css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

## @viewport

Describe los aspectos de la ventana gráfica para dispositivos de pantalla pequeña. (actualmente en la etapa de Borrador de Trabajo) (esta regla de CSS esta obsoleta).

``` css
@viewport {
  width: 100vw; /*Sets the width of the actual viewport to the device width*/
}
```

> se opta por opta el meta viewport

## @counter-style

Define estilos de contador específicos que no forman parte del conjunto de estilos predefinido. (en la etapa de recomendación candidata, pero solo implementado en Gecko en el momento de la redacción).

``` css
@counter-style winners-list {
  system: fixed;
  symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
  suffix: " ";
}
```

## @font-feature-values

(además de @swash, @ornaments, @annotation, @stylistic, @stylesety @character-variant) - Definir nombres comunes en font-variant-alternatespara la función activa de manera diferente en OpenType. (en la etapa de recomendación candidata, pero solo implementado en Gecko en el momento de la redacción).

``` css
/* At-rule for "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* At-rule for "nice-style" in Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

…

/* Apply the at-rules with a single declaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

## @property

(esta regla experimental) Describe el aspecto de las propiedades y variables personalizadas. (actualmente en la etapa de Borrador de Trabajo).

``` css
@property --my-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
```

## @color-profile

(esta regla experimental) Permite definir un perfil de color para que lo utilice la color()función.

``` css
@color-profile --swop5c {
  src: url('https://example.org/SWOP2006_Coated5v2.icc');
}
```