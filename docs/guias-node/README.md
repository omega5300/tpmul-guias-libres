# nodejs

nodejs o conocido tambíen como node o node.js es un etorno de ejecucción en javascript para realizar aplicaciones de lado de servidor como servidores, CLI, entre otros usar el motor v8 de google chrome (chromium) usando para ejecutar archivos js para el uso de la terminal

> ejemplo de uso de nodejs

``` js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## requisitos

para saber node debes conocer ciertos requisitos

- conocer javascript ["guia de javascript"](/guias-javascript/)
- conocer la terminal de sistema operativo ["guia de la terminal"](/guias-fundamentos/terminal.html)
- C/C++ (opcional)

## ejecucion de node

el node tenemos dos formas de ejecutar el etorno de ejecucción estas son las siguientes

``` sh
# ejecucción sin archivo
node

# ejecucion con archivo js
node [name].js
```

## modulos

un módulo es un conjunto de funciones y objetos de JavaScript que las aplicaciones externas pueden usar. La descripción de un fragmento de código como módulo se refiere menos a lo que es el código que a lo que hace; cualquier archivo de Node.js o colección de archivos puede considerarse un módulo si sus funciones y datos se pueden utilizar en programas externos.

los modulos son ejecutados de las siguientes formas no importa si es commonjs o es6 modules

``` js
/* sin exportar*/
require('os') // CJS
import 'os' // ESM

/* todo el modulo */
const path = require('path') // CJS
import path from 'path' // ESM

/* uso de destructuring */
const { join } = require('path') // CJS
import { join } from 'path' // ESM

/* archivo js no incluyo destrucring es la misma forma */ 
const example = require('./example') // CJS
import example from './example' // ESM
```

## ejecuccion

en la terminal dependiendo de sistema operativo hay dos forma de ejecutar node.js son las siguientes

``` sh
# sin archivos js
node

# con archivos js
node demo.js
```

## commonJS

commonJS o CJS son un sistema que uso modulos por fuera del navegador usando para aplicaciones de backend como web servers y apps de consola son compatible con ES module bajo el dynamic imports pero no de ES modules a CJS por falta de compatibilidad por el momento o hasta que lo resuelva.

las caracteristicas de los CJS son las siguientes:

- usa el objeto module
- usar el require
- tiene dos variables especiales para invocar el rutas y archivos

``` js
console.info(__dirname) // muestra la ruta actual de proyecto
console.info(__filename) // muestra la ruta mas el archivo

exports = {
 hello,
 world
} // es un equivalente a module.exports en version objecto

require('example') // invocando el modulo o archivo de js

// objecto module
module.exports = new EventEmitter();

const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;

const assert = require('assert');
const realFs = require('fs');

const fakeFs = {};
require.cache.fs = { exports: fakeFs };

assert.strictEqual(require('fs'), fakeFs);
assert.strictEqual(require('node:fs'), realFs);
```

## es modules

es module tambien conocidos como ecmascript modulos o ESM son la nueva forma de invocar modulos tanto el navegador como en node son nativos desde ES6 y node js de forma nativa.

> el uso de los es modules tiene una desventaja a usarlo debe colocar un parametro en el package.json "type":"module"

``` js
import 'dotenv' // import sin export
import { a } from 'example' // import con multiples exports
import React from 'react' // import con default
import('path') // dynamic import debes implementar promesas o top-level await

import.meta.url // eqivalente a __dirname y __pathname

export const sum = (a,b) => a + b; // export unico

export {
  fadeIn,
  fadeOut,
  hide,
  show
} // multi exports

export default example // export main module
```

## process

el objeto process proporciona información y control sobre el proceso actual de Node.js. Si bien está disponible como global, se recomienda acceder explícitamente a él a través de require o import:

``` js
// ESM
import process from 'process';

// CJS
const process = require('process');

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');


process.on('multipleResolves', (type, promise, reason) => {
  console.error(type, promise, reason);
  setImmediate(() => process.exit(1));
});

const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, promise) => {
  unhandledRejections.set(promise, reason);
});
process.on('rejectionHandled', (promise) => {
  unhandledRejections.delete(promise);
});

process.on('uncaughtException', (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`
  );
});

console.log('This processor architecture is', process.arch);

// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// usado para variable de entorno tanto por defecto como personalizados process.env.PORT
process.env 
```