# core modules

son modulos por defecto que trae node esos modulos no require instalación por parte de npm ya esta instalados desde el sistema operativo.

diferencias de los core modules con los otros tipos de modulos:
- core modules: por defecto de node
- User-created/local modules: son nuestros archivos de js creados por el usuario
- Third-party modules: son modulos compartidos desde npm

> nota: aplica para ambos tanto CJS como ESM

## os module

el modulo os se usa para revisar el hardware y software de nuestro equipo esta compuesto de muchas funciones estas son las siguientes:

``` js
const os = require('os');

// informacion de cpus
os.cpus();

// arquitectura de sistema
os.arch();

// mostar el sistema operativo
os.platform();

// mostarar nombre de sistema
os.type()

// memoria total en bytes
os.totalmem()

// memoria libre en bytes
os.freemem();

// system uptime
os.uptime();
```

## fs module

el modulo fs o conocido como file system se para realizar lectura y escritura de archivos.

``` js
const fs = reuqire('fs');

fs.readFile('./text.txt', (error, data) => {
  error ? console.error(error) : console.log(data.toString());
});

fs.writeFile('./test.txt', 'Node.js is awesome again', (error, data) => {
  error console.error(error) : console.log('Data has been wirtten');
});
```

## http

es modulo es usado para la creación de servidores web sin la necesidad de usar apache o nginx para el desarrollo de apps de server o web

``` js
const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Node.js is awesome</h1>');
  res.end
})
  .listen(3000);
```