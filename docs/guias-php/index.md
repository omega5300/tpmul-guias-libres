# PHP

PHP(hypertext preprocessor) es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que inclustado en HTML.

Liberado en el año 1994 por Rasmus Lerdorf. originalmente era pensado como un preprocesador o motor de plantilla para html despues se decidio como un lenguaje orientado al lado backend.

Lo que distingue a PHP de algo del lado del cliente como Javascript es que el código es ejecutado en el servidor, generando HTML y enviándolo al cliente. El cliente recibirá el resultado de ejecutar el script, aunque no se sabrá el código subyacente que era. El servidor web puede ser configurado incluso para que procese todos los ficheros HTML con PHP, por lo que no hay manera de que los usuarios puedan saber qué se tiene debajo de la manga.

Lo mejor de utilizar PHP es su extrema simplicidad para el principiante, pero a su vez ofrece muchas características avanzadas para los programadores profesionales. No sienta miedo de leer la larga lista de características de PHP. En unas pocas horas podrá empezar a escribir sus primeros scripts.

Aunque el desarrollo de PHP está centrado en la programación de scripts del lado del servidor, se puede utilizar para muchas otras cosas. Siga leyendo y descubra más en la sección ¿Qué puede hacer PHP?, o vaya directo al tutorial introductorio si solamente está interesado en programación web.

## ejemplo de uso en php

``` php
<?php echo "¡Hola, soy un script de PHP!"; ?>
```

## que se puede hacer con PHP

en solo php solo podemos realizar apps web y apps de consola por medio de PHP cli, se puede ejecutar en software de servidor como apache o nginx si son apps web

### como usar PHP

php solo se puede ejecutar en los siguientes programas:

- apache (tanto individual como su bundle xampp, wamp, mamp) excepto el linux conocido como lamp
- nginx
- php cli bajo este comando
  > php -S localhost:[port]
  
## como usar PHP

para usar el lenguaje PHP es como una etiqueta de HTML pero es una bastante especiales que son las siguientes

``` php
<!-- sintaxis por defecto -->
<?php
echo 'hello world';
?>

<!-- sintaxis con short tags solo si tiene la opcion habilitada por el archivo php.ini -->
<?
echo 'hello world';
?>
```