# prefijos propietarios

los prefijos propietarios son parametros extra para dar compatibilidad a una propiedad, pseudoelemento y pseudoclase en CSS estos prefijos son dependiendo del navegador que todavia no soporta lo antes mencionado

## lista de prefijos propietarios

- -webkit- : solo se trabaja chrome (pc y android), safari (mac y ios), opera basado en chormium y derivados de chormium y cualquier navegador basado en webkit.
- -moz- : firefox
- -o- : versiones antiguas de opera
- -ms- : internet explorer y edge legacy (depronto tambien aplica edge)

## ejemplo

``` css
/* propiedades con prefijo */
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
/* propiedad sin prefijo*/
transition: all 4s ease;
```