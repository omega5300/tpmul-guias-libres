# administradores de paquetes

los administradores de paquetes son repositorios remotos que podemos descargar para utilizar en nuestros proyectos ademas tambien podemos crear tambien nuestros proyectos y/o tambien conocido como modulos o depedencias.

## tipo de modulos o depedencias

existe por el momento dos tipos modulos o depedencias:
- produccion: son la que usamos para nuestros proyectos
- desarrollo: son para usar en nuestro proyectos pero no son subidos a produccion

### tipo de administradores de paquetes.

existe varios administradores de paquetes por cada lenguaje de programacion y estos son los siguientes:

- javascript/node:
  npm (node packger manager): administrador por defecto usando en node
  yarn: usar los mismo de npm creado por Facebook ahora Meta
- python:
  PyPi
  pip (el mas usado)
  easyinstall
  PyPM
  Anaconda
- php
  PEAR
  Composer
  
> esto son algunos imposible mencionados todos en esta guia son les muestro los mas populares

## npm y yarn

npm por su acronimo node package manager fue creado por los desarrolladores de node y adquirido por github es la base de todos los modulos para yarn y derivados

| desc | npm | yarn |
| ----------- | ----------- | ----------- |
| crear projecto | npm init | yarn init |
| ejecutar commandos extrenos | npm run | yarn run |
| commando de testeo | npm test | yarn test |
| inicio y cierre de sesion | npm login (and logout) | yarn login (and logout) |
| publicar proyectos | npm publish | yarn publish |
| limpiar cache | npm cache clean | yarn cache clean |
| instalar depedencias | npm install] | yarn |
| instalar modulo | npm install [package] | yarn add [package] |
| instalar modulo de desarrollo | npm install --save-dev [] | yarn add --dev [package] |
| desinstalar modulo | npm uninstall [package] | yarn remove [package] |
| desinstalar modulo de desarrollo | npm uninstall --save-dev [package] | yarn remove [package] |
| actualizar depedencias | npm update | yarn upgrade |
| actualizar modulo | npm update [package] | yarn upgrade [package] |
| instalar paquetes globales | npm install --global [package] | yarn global add [package] |
| desintalar paquetes globales | npm uninstall --global [package] | yarn global remove [package] |
| ejecutar modulos externos sin instalar | npx [package] | no hay equivalente por el momento |
| mostrar version | npm --version | yarn --version |

::: tip dato de npm
tambien es valido los siguientes para npm
npm i [package]
npm i -D [package]
npm i -g [package]
npm -v
:::

## composer

composer es el gestor de paquetes mas usando en PHP a igual que npm con una diferencia composer se descargar y se instalar por aparte en php CLI su archivo "llamado composer.json"

| descripcion | commando |
| ----------- | ----------- |
| instalar modulo | composer require [vendor]/[package] |
| actualizar modulos | composer update o composer outdated |
| iniciar un proyecto | composer init |
| instalar modulos | composer install |
| instalar modulo de desarrollo | composer require --dev [vendor]/[package] |
| desintalar modulo | composer remove [vendor]/[package] |
| buscar modulo | composer search [package] |
| mostar los modulos actuales | composer show |

## pip

pip es el gestor de paquetes mas usados en python lo traer por defecto en python 3.4 y python 2.7.9 conocido como python 2 su uso de para llamar es pip o pip3 en caso que posea ambos python si tienes solo uno de los dos solo se usa el comando "pip" para tener sus modulos a la mano debes posee un archivo en sus proyectos llamado requirements.txt a diferencia de los anteriores este si lo debes escribir a mano

| descripcion | commando |
| ----------- | ----------- |
| instalar modulo | pip install [package] |
| instalar modulo con version | pip install [package]==1.4 |
| actualizar modulo | pip install --upgrade [package] |
| desinstalar modulo | pip uninstall [package] |
| instalar modulos | pip install -r requirements.txt |