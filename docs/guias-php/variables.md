# variables

En PHP las variables se representan con un signo de dólar seguido por el nombre de la variable. El nombre de la variable es sensible a minúsculas y mayúsculas.

Los nombres de variables siguen las mismas reglas que otras etiquetas en PHP. Un nombre de variable válido tiene que empezar con una letra o un carácter de subrayado (underscore), seguido de cualquier número de letras, números y caracteres de subrayado. Como expresión regular se podría expresar como: '[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'

cuya excepciones si hay variables especiales como el caso de $this

``` php
<?php
$var = 'Roberto';
$Var = 'Juan';
echo "$var, $Var";      // imprime "Roberto, Juan"

$4site = 'aun no';      // inválido; comienza con un número
$_4site = 'aun no';     // válido; comienza con un carácter de subrayado
$täyte = 'mansikka';    // válido; 'ä' es ASCII (Extendido) 228
?>
```

## tipo de datos

en todos los lenguales de programación hay tipos de datos pero en ocasionales hay tipos de datos exclusivos y los demas muy generales entre ellos son:

- string (cadena de caracteres)
- integer
- boolean
- array
- object
- callable
- iterable
- float (conocido como double)
- resource
- null

## ambito

El ámbito de una variable es el contexto dentro del que la variable está definida. La mayor parte de las variables PHP sólo tienen un ámbito simple. Este ámbito simple también abarca los ficheros incluídos y los requeridos. Por ejemplo:

``` php
<?php
$a = 1;
include 'b.inc';
?>
```

Aquí, la variable $a estará disponible al interior del script incluido b.inc. Sin embargo, al interior de las funciones definidas por el usuario se introduce un ámbito local a la función. Cualquier variable usada dentro de una función está, por omisión, limitada al ámbito local de la función. Por ejemplo:

``` php
<?php
$a = 1; /* ámbito global */

function test()
{
    echo $a; /* referencia a una variable del ámbito local */
}

test();
?>

## constantes

Una constante es un identificador (nombre) para un valor simple. Como el nombre sugiere, este valor no puede variar durante la ejecución del script (a excepción de las constantes mágicas, que en realidad no son constantes). Por defecto, una constante distingue mayúsculas y minúsculas. Por convención, los identificadores de constantes siempre se declaran en mayúsculas.

El nombre de una constante sigue las mismas reglas que cualquier otra etiqueta de PHP. Un nombre de constante válido empieza por una letra o guion bajo, seguido por cualquier número de letras, números o guiones bajos. Usando una expresión regular, se representaría de la siguiente manera: [a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*

``` php
// Nombres de constantes correctos
define("FOO",     "something");
define("FOO2",    "something else");
define("FOO_BAR", "something more");

// Nombres de constantes incorrectos
define("2FOO",    "something");

// Esto es válido, pero debe evitarse:
// PHP podría cualquier día proporcionar una constante mágica 
// que rompiera el script
define("__FOO__", "something"); 

?>
```