# symbol

Symboles un objeto integrado cuyo constructor devuelve una symbol primitiva , también denominada valor Símbolo o simplemente Símbolo , que se garantiza que es única. Los símbolos se usan a menudo para agregar claves de propiedad únicas a un objeto que no colisionarán con las claves que cualquier otro código podría agregar al objeto, y que están ocultas de cualquier mecanismo que otro código usará normalmente para acceder al objeto.

Symbol()Se garantiza que cada llamada devolverá un símbolo único. Cada Symbol.for("key")llamada siempre devolverá el mismo símbolo por un valor dado de "key". Cuando Symbol.for("key")se llama, si se puede encontrar un símbolo con la clave dada en el registro global de símbolos, ese símbolo se devuelve. De lo contrario, se crea un nuevo símbolo, se agrega al registro de símbolos global bajo la clave dada y se devuelve.

Para crear un nuevo símbolo primitivo, escribe Symbol() con un string opcional

``` js
let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')

Symbol('foo') === Symbol('foo')  // false

let sym = new Symbol()  // TypeError

/*
  Symbol.asyncIteator
  Un método que devuelve el AsyncIterator predeterminado para un objeto.
  Usado por for await...of.
*/
const myAsyncIterable = {
    async* [Symbol.asyncIterator]() {
        yield "hello";
        yield "async";
        yield "iteration!";
    }
};

(async () => {
    for await (const x of myAsyncIterable) {
        console.log(x);
        // expected output:
        //    "hello"
        //    "async"
        //    "iteration!"
    }
})();

/*
  Symbol.hasInstance
  Un método que determina si un objeto constructor reconoce un objeto 
  como su instancia. Usado por instanceof.
*/
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance)
  }
}
console.log([] instanceof MyArray); // true

/*
  Symbol.isConcatSpreadable
  Un valor booleano que indica si un objeto debe acoplarse a sus 
  elementos de matriz. Usado por Array.prototype.concat().
*/
let alpha = ['a', 'b', 'c'],
let numeric = [1, 2, 3]

numeric[Symbol.isConcatSpreadable] = false
let alphaNumeric = alpha.concat(numeric)

console.log(alphaNumeric)  // Result: ['a', 'b', 'c', [1, 2, 3] ]

/*
  Symbol.iterator
  Un método que devuelve el iterador predeterminado para un objeto. 
  Usado por for...of.
*/
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]

/*
  Symbol.match
  Un método que coincide con una cadena, también se usa para determinar 
  si un objeto puede usarse como una expresión regular. 
  Usado por String.prototype.match().
*/
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

regexp1[Symbol.match] = false;

console.log('/foo/'.startsWith(regexp1));
// expected output: true

console.log('/baz/'.endsWith(regexp1));
// expected output: false

/*
  Symbol.matchAll
  Un método que devuelve un iterador, que produce coincidencias de la
  expresión regular con una cadena. Usado por String.prototype.matchAll().
*/
const re = /[0-9]+/g;
const str = '2016-01-02|2019-03-07';
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, x => x[0]));
// expected output: Array ["2016", "01", "02", "2019", "03", "07"]

/*
  Symbol.replace
  Un método que reemplaza subcadenas coincidentes de una cadena. 
  Usado por String.prototype.replace().
*/
class CustomReplacer {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return string.replace(this.value, '#!@?');
  }
}

console.log('football'.replace(new CustomReplacer('foo')));
// expected output: "#!@?tball"

/*
  Symbol.search
  Un método que devuelve el índice dentro de una cadena que coincide con la
  expresión regular. Usado por String.prototype.search().
*/
class Search1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

console.log('foobar'.search(new Search1('bar')));
// expected output: 3

/*
  Symbol.split
  Un método que divide una cadena en los índices que coinciden con una
  expresión regular. Usado por String.prototype.split().
*/
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substr(0, index)}/${string.substr(index + this.value.length)}`;
  }
}

console.log('foobar'.split(new Split1('foo')));
// expected output: "foo/bar"

/*
  Symbol.species
  Una función constructora que se utiliza para crear objetos derivados.
*/
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
let a = new MyArray(1,2,3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true

/*
  Symbol.toPrimitive
  Un método que convierte un objeto en un valor primitivo.
*/
const object1 = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 42;
    }
    return null;
  }
};

console.log(+object1);
// expected output: 42

/*
  Symbol.toStringTag
  Un valor de cadena utilizado para la descripción predeterminada de un
  objeto. Usado por Object.prototype.toString().
*/
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'Validator';
  }
}

console.log(Object.prototype.toString.call(new ValidatorClass()));
// expected output: "[object Validator]"

/*
  Symbol.unscopables
  Un valor de objeto cuyos nombres de propiedad propios y heredados se
  excluyen de los withenlaces de entorno del objeto asociado.
*/


/*
  Symbol.for(key)
  Busca símbolos existentes dado que con el key y 
  lo devuelve si lo encuentra. 
  De lo contrario, se crea un nuevo símbolo en el registro de símbolos global
  con una key.
*/
console.log(Symbol.for('bar') === Symbol.for('bar'));
// expected output: true

console.log(Symbol('bar') === Symbol('bar'));
// expected output: false

const symbol1 = Symbol.for('foo');

console.log(symbol1.toString());
// expected output: "Symbol(foo)"

/*
  Symbol.keyFor(sym)
  Recupera una clave de símbolo compartida del registro de símbolo global
  para el símbolo dado.
*/
const globalSym = Symbol.for('foo'); // global symbol

console.log(Symbol.keyFor(globalSym));
// expected output: "foo"

const localSym = Symbol(); // local symbol

console.log(Symbol.keyFor(localSym));
// expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// expected output: undefined


/*
  Symbol.prototype.description
  Una cadena de solo lectura que contiene la descripción del símbolo.
*/
console.log(Symbol('desc').description);
// expected output: "desc"

console.log(Symbol.iterator.description);
// expected output: "Symbol.iterator"

console.log(Symbol.for('foo').description);
// expected output: "foo"

console.log(`${Symbol('foo').description}bar`);
// expected output: "foobar"

/*
  Symbol.prototype.toString()
  Devuelve una cadena que contiene la descripción del símbolo. 
  Anula el método Object.prototype.toString().
*/
console.log(Symbol('desc').toString());
// expected output: "Symbol(desc)"

console.log(Symbol.iterator.toString());
// expected output: "Symbol(Symbol.iterator)

console.log(Symbol.for('foo').toString());
// expected output: "Symbol(foo)"

// console.log(Symbol('foo') + 'bar');
// expected output: Error: Can't convert symbol to string

/*
  Symbol.prototype.valueOf()
  Devuelve el símbolo. Anula el método Object.prototype.valueOf().
*/
const sym = Symbol("example");
sym === sym.valueOf(); // true

/*
  Symbol.prototype[@@toPrimitive]
*/
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true

```