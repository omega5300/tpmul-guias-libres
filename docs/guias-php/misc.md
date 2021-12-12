# otras cosas de PHP

en PHP tambien hay muchas variables o funciones especiales estas son:

## namespace

nombra un nombre de espacio para la clase y sus metodos

``` php
<?php
namespace Src\System;

class DatabaseConnector {

    private $dbConnection = null;

    public function __construct()
    {
        $host = getenv('DB_HOST');
        $port = getenv('DB_PORT');
        $db   = getenv('DB_DATABASE');
        $user = getenv('DB_USERNAME');
        $pass = getenv('DB_PASS');

        try {
            $this->dbConnection = new \PDO(
                "mysql:host=".$host.";port=".$port.";charset=utf8mb4;dbname=$db",
                $user,
                $pass
            );

        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->dbConnection;
    }
}

?>
```

## imports

los imports en PHP son intepretados en los siguientes metodos:

### include

> vars.php
``` php
<?php

$color = 'verde';
$fruta = 'manzana';

?>
```

> test.php
``` php
<?php

echo "Una $fruta $color"; // Una

include 'vars.php';

echo "Una $fruta $color"; // Una manzana verde

?>
```

### require

el require es usado cuando trabajamos con los modulos de composer o otro administrador de paquetes

> foo1.php
``` php
<?php
return "foo";
?>
```

> foo2.php
``` php
<?php
$bar = require("foo.php");
echo $bar; // equals to "foo"
?>
```

### require_once

``` php
<?php
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__.'/config.php');
?>

<?php require_once('/var/www/public_html/config.php'); ?>
```

### get, post, request, env

estas variables cuya funcion son para la captura de datos desde el html o por peticiones tipo querystring

``` php
<?php
$​_POST​[​'name'​]; // post
$_GET['text']; // get
$​hostname​ = ​$​_ENV​[​'MYSQL_HOST'​]; // env variables
$_REQUEST_['web']; // request querystring
?>
```

### comentarios

``` php
<?php
// soy un comentario de linea

/*
 soy un
 comentario
 multilinea
*/
?>
```

### string interpolation

``` php
<?php
$a = [['derp']];
$b = $a[0];

// Works. It prints derp
echo "$b[0]";

// Doesn't work. It throws an error
echo "$b[ 0 ]";

// Works. It prints derp
echo "{$b[ 0 ]}";

// Doesn't work. It prints Array[0]
echo "$a[0][0]";

// Works. It prints derp
echo "{$a[0][0]}";

// Doesn't work. It prints { Array[0] }
echo "{ $a[0][0] }";
?>
```

## closures

``` php
<?php
$param  = 'John!';

    function sayHello()
    {
      $param = 'Michael!';
      $func  = function() use ($param)
      {
        echo 'Hi, I am ' . $param;
      };
      $func();
    }

    sayHello();
?>
```