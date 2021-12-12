# funciones

En programación, una función es un conjunto de instrucciones a la que podemos recurrir siempre que queramos. Éstas pueden recibir parámetros y  realizar todo tipo de tareas, ya sean complejas o sencillas. La enorme biblioteca de funciones que posee PHP nos permite realizar, de forma muy fácil, muchas de las tareas habituales a la hora de desarrollar una aplicación. Sin embargo, siempre viene bien saber cómo crear e implementar nuestras propias funciones PHP, algo que explicamos en este artículo.

``` php
<?
// funciones definidas por el usuario
function foo($arg_1, $arg_2, /* ..., */ $arg_n)
{
    echo "Función de ejemplo.\n";
    return $valor_devuelto;
}

// con argumentos
function hacer_café($tipo = "capuchino")
{
    return "Hacer una taza de $tipo.\n";
}
echo hacer_café();
echo hacer_café(null);
echo hacer_café("espresso");

// con return
function cuadrado($núm)
{
    return $núm * $núm;
}
echo cuadrado(4);   // imprime '16'.

// funciones variables
function foo() {
    echo "En foo()<br />\n";
}

function bar($arg = '')
{
    echo "En bar(); el argumento era '$arg'.<br />\n";
}

// Esta es una función de envoltura alrededor de echo
function hacerecho($cadena)
{
    echo $cadena;
}

$func = 'foo';
$func();        // Esto llama a foo()

$func = 'bar';
$func('prueba');  // Esto llama a bar()

$func = 'hacerecho';
$func('prueba');  // Esto llama a hacerecho()

// funciones anonimas
$saludo = function($nombre) {
    printf("Hola %s\r\n", $nombre);
};

$saludo('Mundo');
$saludo('PHP');

// funciones flecha
$z = 1;
$fn = fn($x) => fn($y) => $x * $y + $z;
// Outputs 51
var_export($fn(5)(10));
?>
```