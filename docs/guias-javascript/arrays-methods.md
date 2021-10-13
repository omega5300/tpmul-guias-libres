# metodos de array

con los ultimos avances de javascript hay nuevos metodos para recorrer array tanto para lectura escritura de nuevos arrays y de agregar y eliminar siempre y cuando el array se queda intacto en el caso de usar metodos de inmutabilidad, en otos casos hay metodos mutables entre todos esos metodos se encuetra lo siguiente:

``` js
const fruits = ['Apple', 'Banana']; // array base equivalente new Array

/*
  Array.from()
  Crea una nueva Arrayinstancia a partir de un objeto iterable o 
  similar a una matriz.
*/
fruits.from(fruit);

/*
  Array.isArray()
  Devuelve truesi el argumento es una matriz o de otro modo false.
*/
fruits.isarray(fruits); // true

/*
  Array.of()
  Crea una nueva Arrayinstancia con un número variable de argumentos,
  independientemente del número o tipo de argumentos.
*/
fruits.of(1);

/*
  Array.length
  Refleja el número de elementos de una matriz.
*/
fruits.length; // 2

/*
  Array.concat()
  Devuelve una nueva matriz que es esta matriz unida con otras 
  matrices y / o valores.
*/
const array2 = ['d', 'e', 'f'];
const array3 = fruits.concat(array2)
console.log(array3) // ["Apple", "Banana", "d", "e", "f"]

/*
  Array.copywithin()
  Copia una secuencia de elementos de la matriz dentro de la matriz.
*/
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4)); // expected output: Array ["d", "b", "c", "d", "e"]

/*
  Array.entries()
  Devuelve un nuevo objeto iterador de matriz que contiene los pares 
  clave / valor para cada índice de la matriz.
*/
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

/*
  Array.every()
  Devuelve truesi cada elemento de esta matriz satisface la función de prueba.
*/
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold)); // expected output: true

/*
  Array.fill()
  Rellena todos los elementos de una matriz desde un índice inicial 
  hasta un índice final con un valor estático.
*/
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

/*
  Array.filter()
  Devuelve una nueva matriz que contiene todos los elementos de la matriz 
  de llamada para la que devuelve la función de filtrado proporcionada true.
*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/*
  Array.find()
  Devuelve lo encontrado elementen la matriz, si algún elemento de la matriz 
  satisface la función de prueba o undefinedsi no se encuentra.
*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

/*
  Array.findIndex()
  Devuelve el índice encontrado en la matriz, si un elemento de la matriz
  satisface la función de prueba o -1si no se encuentra.
*/
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

/*
  Array.flat()
  Devuelve una nueva matriz con todos los elementos de la submatriz 
  concatenados en ella de forma recursiva hasta la profundidad especificada.
*/
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

/*
  Array.flatMap()
  Devuelve una nueva matriz formada al aplicar una función de devolución de 
  llamada determinada a cada elemento de la matriz y luego aplanar el 
  resultado en un nivel.
*/
const arr = [1, 2, 3, 4];

arr.flatMap(x => [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]

/*
  Array.forEach()
  Llama a una función para cada elemento de la matriz.
  una alternativa al for clasico recuerda el for normal no el ciclo for...or
*/
const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

// after
items.forEach(function(item){
  copyItems.push(item)
})

/*
  Array.includes()
  Determina si la matriz contiene un valor, devuelto trueo falsesegún 
  corresponda.
*/
let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false

/*
  Array.indexOf()
  Devuelve el primer (mínimo) índice de un elemento dentro de la matriz igual 
  a un elemento, o -1si no se encuentra ninguno.
*/
let array = [2, 9, 9];
array.indexOf(2);     // 0

/*
  Array.join()
  Une todos los elementos de una matriz en una cadena.
*/
let a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'

/*
  Array.keys()
  Devuelve un nuevo iterador de matriz que contiene las claves para cada 
  índice de la matriz.
*/
let arr = ['a', , 'c'];
let sparseKeys = Object.keys(arr);
let denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]

/*
  Array.lastIndexOf()
  Devuelve el último (mayor) índice de un elemento dentro de la matriz igual 
  a un elemento, o -1si no se encuentra ninguno.
*/
let numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3

/*
  Array.map()
  Devuelve una nueva matriz que contiene los resultados de llamar a una 
  función en cada elemento de esta matriz.
*/
let numbers = [1, 4, 9]
let roots = numbers.map((num) => Math.sqrt(num))
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

/*
  Array.pop()
  Elimina el último elemento de una matriz y devuelve ese elemento.
*/
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

let popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

/*
  Array.push()
  Agrega uno o más elementos al final de una matriz y devuelve el nuevo 
  length de la matriz.
*/
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4

/*
  Array.reduce()
  Aplique una función contra un acumulador y cada valor de la matriz (de 
  izquierda a derecha) para reducirlo a un solo valor.
*/
[0, 1, 2, 3, 4].reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue)

/*
  Array.reduceRight()
  Aplique una función contra un acumulador y cada valor de la matriz 
  (de derecha a izquierda) para reducirlo a un solo valor.
*/
[0, 1, 2, 3, 4].reduceRight((accumulator, currentValue, index, array) => accumulator + currentValue);

/*
  Array.reverse()
  Invierte el orden de los elementos de una matriz en su lugar. 
  (El primero se convierte en el último, el último en el primero).
*/
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]

/*
  Array.shift()
  Elimina el primer elemento de una matriz y devuelve ese elemento.
*/
const myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log('myFish after:', myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted);
// Removed this element: angel

/*
  Array.slice()
  Extrae una sección de la matriz de llamada y devuelve una nueva matriz.
*/
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

/*
  Array.some()
  Devuelve true si al menos un elemento de esta matriz satisface la función 
  de prueba proporcionada.
*/
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true

/*
  Array.sort()
  Ordena los elementos de una matriz en su lugar y devuelve la matriz.
*/
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]

/*
  Array.splice()
  Agrega y / o elimina elementos de una matriz.
*/
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

/*
  Array.toLocaleString()
  Devuelve una cadena localizada que representa la matriz y sus elementos. 
  Anula el método Object.prototype.toLocaleString().
*/
var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"

/*
  Array.toString()
  Devuelve una cadena que representa la matriz y sus elementos. 
  Anula el método Object.prototype.toString().
*/
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"

/*
  Array.unshift()
  Agrega uno o más elementos al frente de una matriz y devuelve el nuevo 
  length de la matriz.
*/
let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

/*
  Array.values()
  Devuelve un nuevo objeto iterador de matriz que contiene los valores de 
  cada índice de la matriz.
*/
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"

```