# layouts

en terminos para motores de plantillas son piezas de rompecabezas para recrear el mismo diseño sin escribir mucho codigo, para aumentar la productividad en escribir 5 paginas html de mismo estilo solo las mismas paginas herendado los layout pero aplicando su contenido exclusicvo

## ejs

> head
``` ejs
<meta charset="UTF-8">
<title>EJS Is Fun</title>

<!-- CSS (load bootstrap from a CDN) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
<style>
    body { padding-top:50px; }
</style>
```

> header
``` ejs
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">EJS Is Fun</a>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">About</a>
    </li>
  </ul>
</nav>
```

> footer
``` ejs
<p class="text-center text-muted">© Copyright 2020 The Awesome People</p>
```

> index
``` ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <%- include('../partials/head'); %>
</head>
<body class="container">

<header>
    <%- include('../partials/header'); %>
</header>

<main>
    <div class="jumbotron">
        <h1>This is great</h1>
        <p>Welcome to templating using EJS</p>
    </div>
</main>

<footer>
    <%- include('../partials/footer'); %>
</footer>

</body>
</html>
```

## handlebars

::: tip
ĺa confuracion de los paritals es por medio de lenguaje backend
por ejemplo node JS
:::

> template partial
``` handlebars
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>title</title>
    <style>
    </style>
  </head>
  <body>
    <main class="flexbox">
      <div class="flexbox container paper">{{> @partial-block }}</div>
    </main>
  </body>
</html>
```

> index.html
``` handlebars
{{#> base extra_headers="" }}
<header style="width: inherit;">
  <h1 style="text-align: center;"> I'm your template 😊</h1>
</header>
{{/base }}
```

## pug

> includes
``` pug
//- index.pug
doctype html
html
  include includes/head.pug
  body
    h1 My Site
    p Welcome to my super lame site.
    include includes/foot.pug
```

``` pug
//- includes/head.pug
head
  title My Site
  script(src='/javascripts/jquery.js')
  script(src='/javascripts/app.js'
```

``` pug
//- includes/foot.pug
footer#footer
  p Copyright (c) foobar
```

> extends and block
``` pug
//- layout.pug
html
  head
    title My Site - #{title}
    block scripts
      script(src='/jquery.js')
  body
    block content
    block foot
      #footer
        p some footer content
```

``` pug
//- page-a.pug
extends layout.pug

block scripts
  script(src='/jquery.js')
  script(src='/pets.js')

block content
  h1= title
  - var pets = ['cat', 'dog']
  each petName in pets
    include pet.pug
```

``` pug
//- pet.pug
p= petName
```

> mixins
``` pug
//- Declaration
mixin list
  ul
    li foo
    li bar
    li baz
//- Use
+list
+list
```

``` pug
mixin pet(name)
  li.pet= name
ul
  +pet('cat')
  +pet('dog')
  +pet('pig')
```

## mustache

> base
``` mustache
base.mustache:
<h2>Names</h2>
{{#names}}
  {{> user}}
{{/names}}

user.mustache:
<strong>{{name}}</strong>
```

> single extend
``` mustache
<h2>Names</h2>
{{#names}}
  <strong>{{name}}</strong>
{{/names}}
```