# number methods

cuando trabajados con datos de tipo numerico tambien hay funciones tanto estaticas como la de conversion de numeros:

``` js
const pi = 3.1416 // equivalente new Number()

/*
  Number.EPSILON
  El intervalo más pequeño entre dos números representables.
*/
const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// expected output: 2.7755575615628914e-17

console.log(result < Number.EPSILON);
// expected output: true

/*
  Number.MAX_SAFE_INTEGER
  El número entero seguro máximo en JavaScript ( 2^53 - 1).
*/
const x = Number.MAX_SAFE_INTEGER + 1;

console.log(x);
// expected output: 9007199254740992

/*
  Number.MAX_VALUE
  El mayor número representable positivo.
*/
function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return ('Process as Infinity');
  }
  return (x * y);
}

console.log(multiply(1.7976931348623157e+308, 1));
// expected output: 1.7976931348623157e+308

/*
  Number.MIN_SAFE_INTEGER
  El número entero seguro mínimo en JavaScript ( -(2^53 - 1)).
*/
const x = Number.MIN_SAFE_INTEGER - 1;

console.log(x);
// expected output: -9007199254740992

/*
  Number.MIN_VALUE
  El número representable positivo más pequeño, es decir, el número positivo 
  más cercano a cero (sin ser realmente cero).
*/
function divide(x, y) {
  if (x / y < Number.MIN_VALUE) {
    return 'Process as 0';
  }
  return (x / y);
}

console.log(divide(5e-324, 1));
// expected output: 5e-324

/*
  Number.NaN
  Especial " N ot un N umber" valor.
*/
function clean(x) {
  if (x === Number.NaN) {
    // can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// expected output: 0

/*
  Number.NEGATIVE_INFINITY
  Valor especial que representa infinito negativo. 
  Devuelto por desbordamiento.
*/
function checkNumber(smallNumber) {
  if (smallNumber === Number.NEGATIVE_INFINITY) {
    return 'Process number as -Infinity';
  }
  return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE));
// expected output: -1.7976931348623157e+308

console.log(checkNumber(-Number.MAX_VALUE * 2));
// expected output: "Process number as -Infinity"

/*
  Number.POSITIVE_INFINITY
  Valor especial que representa el infinito. Devuelto por desbordamiento.
*/
function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return 'Process number as Infinity';
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// expected output: Process number as Infinity


/*
  Number.isNaN()
  Determine si el valor pasado es NaN.
*/
Number.isNaN(NaN);        // true

/*
  Number.isFinite()
  Determina si el valor pasado es un número finito.
*/
Number.isFinite(Infinity);  // false

/*
  Number.isInteger()
  Determina si el valor pasado es un número entero.
*/
Number.isInteger(0);         // true

/*
  Number.isSafeInterger()
  Determine si el valor pasado es un entero seguro 
  (número entre -(2^53 - 1)y 2^53 - 1).
*/
Number.isSafeInteger(3);  // true

/*
  Number.parseFloat()
  Es lo mismo que la parseFloat()función global.
*/
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI ;
}

console.log(circumference('4.567abcdefgh'));
// expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
// expected output: 0

/*
  Number.parseInt()
  Es lo mismo que la parseInt()función global.
*/
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(' 0xF', 16));
// expected output: 1500

console.log(roughScale('321', 2));
// expected output: 0
```