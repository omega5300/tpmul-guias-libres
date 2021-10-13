# errores comunes

al igual con HTML y CSS tambien tiene sus errores comunes y malas practicas que veremos en este listado

##  escribir el javascript dentro de la etiqueta script

``` html
<!-- bad -->
<script>
  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
  document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>

<!-- good -->
<script src="app.js"></script>
```

## uso de var y/o variables globales

solo es conveniente el uso de var siempre y cuando es para dar compatibilidad con navegadores por medio de babel, tambien evitar el uso de variables globales son mas dificiles de realizar debugs

``` js
// bad
var name = 'juan';
lastname = 'lopez';

// good
let name = 'juan';
let lastname = 'lopez';
```

## no usar una convención para los nombres

el uso de variable inicializadas en mayusculas es exclusivo si trabajas con clases o funciones orientado a objetos o componentes

``` js
// bad
const Numero = 3

// good
const numero = 3
```

## no usar el triple igual o el negación doble igual

javascript es lenguaje dinamico y de debil tipado es recomendable usar el triple igual similar con la diferente (!=)

``` js
// bad
if( variable == null )
if( variable != null )

// good
if( variable === null )
if( variable !== null )
```

## no documentar

la documentación es escencial para indicar como funciona cierta parte de nuestro script

## el codigo espagueti

es similar al callback hell es recomendable tener el codigo lo mas mantenible y escalable posible

## use strict

el use strict no es una mala practica pero ayudar a prevenir los problemas de variables globales excepto en funciones y variables de tipo var es una practica opcional pero si estas usando solo puras variable constantes o variable let en ambito de bloque no es necesario el uso de use strict

## hoisting

el hoisting es una practica muy rara solo en variables de tipo var es evitar si usar let o const son que no se pueda redeclarar