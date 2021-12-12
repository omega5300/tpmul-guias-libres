# clases y programación orientado a objetos

en PHP tambien se puede implemetar programación orientado a objetos una caracteristicas que casi todos los lenguajes utilizan.

La definición básica de una clase comienza con la palabra reservada class, seguida de un nombre de clase, y continuando con un par de llaves que encierran las definiciones de las propiedades y métodos pertenecientes a dicha clase.

El nombre de clase puede ser cualquier etiqueta válida, siempre que no sea una palabra reservada de PHP. Un nombre válido de clase comienza con una letra o un guión bajo, seguido de una cantidad arbitraria de letras, números o guiones bajos. Como expresión regular, se expresaría de la siguiente forma: ^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$.

Una clase puede tener sus propias constantes, variables (llamadas "propiedades"), y funciones (llamados "métodos").

``` php
<?php
// class
class Example {
  // variables
  public string $text;
  private int $edad;
  protected $var2 = 2;
  static $var4 = 4;
  
  // funciones
  public function setName(string $name): void {
    $this->name = $name;
  }
  
  public function __construct(string $prop) {
       // Inicialización.
       $this->text = $prop;
  }
}

// instancia
$example = new Example('hello');

// herencia
class Coche {
    protected $color;
    public function setColor($color)
    {
        $this->color = $color;
    }
    public function getColor()
    {
        return $this->color;
    }
    public function printCaracteristicas()
    {
        echo 'Color: '. $this->getColor;
    }
}

class CocheDeLujo extends Coche {
    protected $extras;
    public function setExtras($extras)
    {
        $this->extras = $extras;
    }
    public function getExtras()
    {
        return $this->extras;
    }
    public function printCaracteristicas()
    {
        echo 'Color: '. $this->color;
        echo '<hr/>';
        echo 'Extras: ' . $this->extras;
    }
}

$miCoche = new CocheDeLujo();
$miCoche->setColor('negro');
$miCoche->setExtras('TV');

$miCoche->printCaracteristicas(); // Devuelve Color : negro Extras: TV

// traits
class Coche {
    public function getMarca() {
        echo 'Renault ';
    }
}
trait Modelo {
    public function getModelo() {
        parent::getMarca();
        echo 'Clio';
    }
}
class Ventas extends Coche {
    use Modelo;
}

$o = new Ventas();
$o->getMarca(); // Podemos obtener este método de la clase Coche
$o->getModelo(); // Podemos obtener este método del trait Modelo
?>
```
> las clases siempre comienza con una inicial en mayusculas