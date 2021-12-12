# typescript

typescript es un transpilador de javascript mejor dicho es un superconjunto de javascript que le permite el aceeso al tipado estatico o estricto para escribir nuestras apps de js y usado en frameworks como angular y vue por ejemplo

## ejemplo

``` ts
const name: string = 'hello'

const age: number = 23

console.info(name, age)
```

para usar typescript se debe aprender javascript y conocer al menos de forma opcional un lenguaje de tipado fuerte como C#, equivalentes.

## tipos de datos

en typescript existe varios tipos de datos y estos son:

- string
- number
- boolean
- any
- Array (si trabajas con otro tipos o interfaces de datos personalizados se usa tambien el [])
- void (en caso de las funciones)
- null
- undefined

### union types

``` ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
```

## types y interfaces

estos metodos son usados para crea nuestros tipados personalizados cuando trabajamos con un arreglo de objetos o los propios objetos como tal:

``` ts
/* types */
type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

// extend
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;

// overwirte
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
} // Error: Duplicate identifier 'Window'.

/* interfaces */
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

// extend
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey

// overwrite
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// optional properties
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
 
function paintShape(opts: PaintOptions) {
  // ...
}
 
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 })

/* son muy parecidos con pequeñas diferencias */
```

## enums

Las enumeraciones son una de las pocas características que tiene TypeScript que no es una extensión de nivel de tipo de JavaScript.

Las enumeraciones permiten a un desarrollador definir un conjunto de constantes con nombre. El uso de enumeraciones puede facilitar la documentación de la intención o crear un conjunto de casos distintos. TypeScript proporciona enumeraciones numéricas y basadas en cadenas.

``` ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

## classes

en typescript el uso de las clases son similares a los lenguajes de tipado estricto o estatico mas nuevas carateristicas unicas:

``` ts
class Point {
  x: number;
  y: number;
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;

class GoodGreeter {
  name: string;
 
  constructor() {
    this.name = "hello";
  }
}

// readonly
class Greeter {
  readonly name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
 
  err() {
    this.name = "not ok";
// Cannot assign to 'name' because it is a read-only property.
  }
}
const g = new Greeter();
g.name = "also not ok";

// constructores
class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}

// methods
class Point {
  x = 10;
  y = 10;
 
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

// Getters / Setters
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

class Thing {
  _size = 0;
 
  get size(): number {
    return this._size;
  }
 
  set size(value: string | number | boolean) {
    let num = Number(value);
 
    // Don't allow NaN, Infinity, etc
 
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
 
    this._size = num;
  }
}

// implements and extends
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {
Class 'Ball' incorrectly implements interface 'Pingable'.
  // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}

class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);

// public
class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();

// protected
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName();

// private
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);

class A {
  private x = 10;
 
  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}

// static
class Foo {
    static #count = 0;
 
    get count() {
        return Foo.#count;
    }
 
    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
}
```

## modulos

recordemos que node js tiene dos formas de invocar modulos commonjs y es modulos en typescript nos ayuda de una forma especial para los commonjs, debido que es modulos no hay diferencia.

### es module

``` ts
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
 
export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}
 
// @filename: app.ts
import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;
```

### commonJS

``` ts
// @filename: maths.ts
function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
 
exports {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute,
};

// @filename: app.ts
import maths = require("maths");
maths.pi;
```

## decoradores

``` json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

``` ts
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}
```