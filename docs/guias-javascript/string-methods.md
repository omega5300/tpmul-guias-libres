# metodos string

los string son especiales en javascript nos permite incluir caracteres de secuencia como acceder a sus caracteres

## espacios secuenciales

| espacio sequencial | unicode |
| ----------- | ----------- |
| \0 | U+0 |
| \' | U+027 |
| \" | U+022 |
| \\ | U+05c |
| \n | U+00a |
| \r | U+00d |
| \v | U+00b |
| \t | U+009 |
| \b | U+008 |
| \f | U+00c |
| \uXXXX range in hex (0000 - ffff) | U+0000 and U+ffff |

## metodos

``` js
let s_prim = 'foo' // equivalent new String

// Character access
s_prim.charAt(1) // "o"
s_prim[1] // "o"

/*
  String.raw()
  Devuelve una cadena creada a partir de una cadena de plantilla sin formato.
*/
let name = 'Bob';
String.raw`Hi\n${name}!`;

/*
  String.length
  Refleja el lengthde la cuerda. Solo lectura.
*/
const str = 'Life, the universe and everything. Answer:';

console.log(str, str.length);
// expected output: "Life, the universe and everything. Answer:", 42

/*
  String.charCodeAt(i)
  Devuelve un número que es el valor de la unidad de código UTF-16 
  en el dado index.
*/
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"

/*
  String.codePointAt(pos)
  Devuelve un número entero no negativo que es el 
  valor del punto de código del punto de 
  código codificado en UTF-16 que comienza en el especificado pos.
*/
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// expected output: "9733"

/*
  String.match(regexp)
  Se utiliza para hacer coincidir una expresión regular regexpcon una cadena.
*/
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

/*
  String.matchAll(regexp)
  Devuelve un iterador de todas regexplas coincidencias.
*/
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]

/*
  String.repeat(count)
  Devuelve una cadena que consta de los elementos del objeto count
  repetidas veces.
*/
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

/*
  String.replace(searchFor, replaceWidth)
  Se utiliza para reemplazar casos de searchForuso replaceWith. 
  searchForpuede ser una cadena o expresión regular, y replaceWithpuede ser 
  una cadena o función.
*/
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

/*
  String.replaceAll(searchFor, replaceWidth)
  Se utiliza para reemplazar todas las apariciones de searchForuso 
  replaceWith. searchForpuede ser una cadena o expresión regular, y 
  replaceWithpuede ser una cadena o función.
*/
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

/*
  String.search(regexp)
  Busque una coincidencia entre una expresión regular regexpy la 
  cadena de llamada.
*/
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

/*
  String.slice(beginIndex, [endIndex])
  Extrae una sección de una cadena y devuelve una nueva cadena.
*/
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

/*
  String.split([sep [, limit] ])
  Devuelve una matriz de cadenas pobladas al dividir la cadena de llamada en 
  las apariciones de la subcadena sep.
*/
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

/*
  String.substring(beginIndex, [endIndex])
  Devuelve una nueva cadena que contiene los caracteres de la cadena de 
  llamada de (o entre) el índice especificado (o indeces).
*/
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

/*
  String.toLowerCase()
  Devuelve el valor de la cadena de llamada convertido a minúsculas.
*/
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."

/*
  String.toString()
  Devuelve una cadena que representa el objeto especificado. 
  Anula el método Object.prototype.toString().
*/
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.toString());
// expected output: "foo"

/*
  String.toUpperCase()
  Devuelve el valor de la cadena de llamada convertido a mayúsculas.
*/
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

/*
  String.trim()
  Recorta los espacios en blanco desde el principio y el final de la cadena. 
  Parte del estándar ECMAScript 5.
*/
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

/*
  String.trimStart()
  Recorta los espacios en blanco desde el principio de la cadena.
*/
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// expected output: "Hello world!   ";

/*
  String.trimEnd()
  Recorta los espacios en blanco del final de la cadena.
*/
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// expected output: "   Hello world!";

/*
  String.valueOf()
  Devuelve el valor primitivo del objeto especificado. 
  Anula el método Object.prototype.valueOf().
*/
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"
```