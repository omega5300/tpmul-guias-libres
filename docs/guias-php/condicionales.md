# condicionales

en php el uso de condiconales es importante tambien para el manejo condiciones y de errores en ellos tenemos

``` php
<?php
// if, else if, else
$age = 50;
 
if ($age < 30)
{
  echo "Your age is less than 30!";
}
elseif ($age > 30 && $age < 40)
{
  echo "Your age is between 30 and 40!";
}
else
{
  echo "Your age is greater than 50!";
}

// conditional ternary
$marks=40;
print ($marks>=40) ? "pass" : "Fail";

// switch
$favourite_site = 'Code';
 
switch ($favourite_site) {
  case 'Business':
    echo "My favourite site is business.tutsplus.com!";
    break;
  case 'Code':
    echo "My favourite site is code.tutsplus.com!";
    break;
  case 'Web Design':
    echo "My favourite site is webdesign.tutsplus.com!";
    break;
  case 'Music':
    echo "My favourite site is music.tutsplus.com!";
    break;
  case 'Photography':
    echo "My favourite site is photography.tutsplus.com!";
    break;
  default:
    echo "I like everything at tutsplus.com!";
}

// try catch
function inverse($x) {
    if (!$x) {
        throw new Exception('División por cero.');
    }
    return 1/$x;
}

try {
    echo inverse(5) . "\n";
} catch (Exception $e) {
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
} finally {
    echo "Primer finally.\n";
}
?>
```

## operadores logicos

| Ejemplo | Nombre | Resultado |
| ----------- | ----------- | ----------- |
| $a and $b | And (y) | true si tanto $a como $b son true. |
| $a or $b | Or (o inclusivo) | true si cualquiera de $a o $b es true. |
| $a xor $b | Xor (o exclusivo) | true si $a o $b es true, pero no ambos. |
| !$a | Not (no) | true si $a no es true. |
| $a && $b | And (y) | true si tanto $a como $b son true. |
| $a &#124;&#124; $b | Or (o inclusivo) | true si cualquiera de $a o $b es true. |