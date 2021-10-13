# object

la clase Object representa uno de los tipos de datos de JavaScript. Se utiliza para almacenar varias colecciones con clave y entidades más complejas. Los objetos se pueden crear usando el constructor Object () o el inicializador de objeto / sintaxis literal.

- El constructor de objetos crea un contenedor de objetos para el valor dado.
- Si el valor es nulo o indefinido, creará y devolverá un objeto vacío.
- De lo contrario, devolverá un objeto de un Tipo que corresponda al valor dado.

Si el valor ya es un objeto, devolverá el valor.
Cuando se llama en un contexto que no es de constructor, Object se comporta de manera idéntica a new Object ().

``` js
let o = new Object() // Crea un nuevo Objectobjeto. Es una envoltura para el valor dado.

/*
  Object.assign()
  Copia los valores de todas las propiedades propias enumerables 
  de uno o más objetos de origen a un objeto de destino.
*/
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

/*
  Object.create()
  Crea un nuevo objeto con el objeto prototipo y las propiedades especificados.
*/
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

/*
  Object.defineProperty()
  Agrega la propiedad nombrada descrita por un descriptor dado a un objeto.
*/
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

/*
  Object.defineProperties()
  Agrega las propiedades nombradas descritas por los 
  descriptores dados a un objeto.
*/
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);
// expected output: 42

/*
  Object.entries()
  Devuelve una matriz que contiene todos los [key, value]
  pares de propiedades de cadena enumerables propias de un objeto dado .
*/
if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

/*
  Object.freeze()
  Congela un objeto. Otro código no puede eliminar ni cambiar sus propiedades.
*/
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

/*
  Object.fromEntries()
  Devuelve un nuevo objeto de un iterable de [key, value]pares. 
  (Esto es al revés de Object.entries).
*/
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

/*
  Object.getOwnPropertyDescriptor()
  Devuelve un descriptor de propiedad para una propiedad 
  con nombre en un objeto.
*/
const object1 = {
  property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42

/*
  Object.getOwnPropertyDescriptors()
  Devuelve un objeto que contiene todos los descriptores de propiedad 
  propios de un objeto.
*/
const object1 = {
  property1: 42
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable);
// expected output: true

console.log(descriptors1.property1.value);
// expected output: 42

/*
  Object.getOwnPropertyNames()
  Devuelve una matriz que contiene los nombres de todas las 
  propiedades enumerables y no enumerables del objeto dado .
*/
Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"]  (ES2015 code)

/*
  Object.getOwnPropertySymbols()
  Devuelve una matriz de todas las propiedades de los símbolos 
  que se encuentran directamente en un objeto determinado.
*/
var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // Symbol(a)

/*
  Object.getPrototypeOf()
  Devuelve el prototipo ( [[Prototype]]propiedad interna ) 
  del objeto especificado.
*/
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true

/*
  Object.is()
  Compara si dos valores tienen el mismo valor. Iguala todos los NaNvalores 
  (que difiere tanto de la Comparación de igualdad abstracta como de la
  Comparación de igualdad estricta).
*/
Object.is(25, 25);  // true

/*
  Object.isExtensible()
  Determina si se permite la extensión de un objeto.
*/
const object1 = {};

console.log(Object.isExtensible(object1));
// expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// expected output: false

/*
  Object.isFrozen()
  Determina si un objeto estaba congelado.
*/
const object1 = {
  property1: 42
};

console.log(Object.isFrozen(object1));
// expected output: false

Object.freeze(object1);

console.log(Object.isFrozen(object1));
// expected output: true

/*
  Object.isSealed()
  Determina si un objeto está sellado.
*/
const object1 = {
  property1: 42
};

console.log(Object.isSealed(object1));
// expected output: false

Object.seal(object1);

console.log(Object.isSealed(object1));
// expected output: true

/*
  Object.keys()
  Devuelve una matriz que contiene los nombres de 
  todas las propiedades de cadena enumerables propias del objeto dado .
*/
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

/*
  Object.preventExtensions()
  Evita las extensiones de un objeto.
*/
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}

/*
  Object.seal()
  Evita que otro código elimine las propiedades de un objeto.
*/
const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33

/*
  Object.values()
  Devuelve una matriz que contiene los valores que corresponden a 
  todas las propiedades de cadena enumerables propias de un objeto dado.
*/
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

```