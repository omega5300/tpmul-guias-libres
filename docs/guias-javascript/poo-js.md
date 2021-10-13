# programación orientado a objetos

Con los conceptos básicos fuera del camino, ahora nos centraremos en JavaScript orientado a objetos (OOJS): este artículo presenta una vista básica de la teoría de la programación orientada a objetos (OOP), luego explora cómo JavaScript emula clases de objetos a través de funciones de constructor, y cómo crear instancias de objetos.

Para empezar, vamos a ofrecerle una vista simplista y de alto nivel de lo que es la programación orientada a objetos (OOP). Decimos simplista, porque la POO puede volverse muy complicada rápidamente, y darle un tratamiento completo ahora probablemente confundiría más que ayudaría. La idea básica de OOP es que usamos objetos para modelar cosas del mundo real que queremos representar dentro de nuestros programas y / o proporcionar una forma simple de acceder a la funcionalidad que de otra manera sería difícil o imposible de utilizar.

Los objetos pueden contener datos y código relacionados, que representan información sobre lo que está intentando modelar y la funcionalidad o el comportamiento que desea que tenga. Los datos del objeto (y, a menudo, las funciones también) se pueden almacenar ordenadamente (la palabra oficial está encapsulada ) dentro de un paquete de objetos (al que se le puede dar un nombre específico para referirse, que a veces se denomina espacio de nombres ), lo que facilita la estructura y acceso; Los objetos también se utilizan comúnmente como almacenes de datos que se pueden enviar fácilmente a través de la red.

## ejemplos

``` js
// ejemplo simple 1
function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}

const salva = createNewPerson('Salva');
salva.name;
salva.greeting();

// ejemplo simple 2
function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
```

## class

las clases son uno de los nuevos agregados en es2015 para la programación orientado a objetos tambien es mas accesible de crear funciones tienes otra facultad tener algunas ventajas de la programcion orientada a objetos.

``` js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

class Rectangle {
  height = 0; // public field
  #width // private field
  
  constructor(height, width) {
    this.height = height;
    this.#width = width;
  }
  
  // Getter
  get area() {
    return this.calcArea();
  }
  
  // Method
  calcArea() {
    return this.height * this.width;
  }
  
  // static
  static staticMethod() {
    return 'static method has been called.';
  }
  
  // Setter
  set current(name) {
    this.log.push(name);
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

## componetes del class

- funciones y variables de clase publicas: son accesibles para el usuario
- funciones y variables de clase publicas: no son accesible por el usuario solo por el constructor
- constructor: es un método especial de una clase para crear e inicializar una instancia de objeto de esa clase.
- extends: es utilizado para dar heredar valores de la clase padre a la clase hijo
- static: La palabra clave define un método o propiedad estática para una clase, o un bloque de inicialización estático de clase (consulte el enlace para obtener más información sobre este uso). No se pueden invocar métodos estáticos ni propiedades estáticas en instancias de la clase. En cambio, se les llama en la clase misma.
- getters: vincula una propiedad de objeto a una función que se llamará cuando se busque esa propiedad.
- setters: vincula una propiedad de objeto a una función que se llamará cuando se intente establecer esa propiedad.