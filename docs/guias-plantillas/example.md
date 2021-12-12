# ejemplos de los motores de plantillas

en la parte anterior hemos mencionado los motores de plantillas mas conocidos y a la vez usados en esta guia solo mencionamos los ejemplos de uso de cada motor de plantillas

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

``` handlebars
<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

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

``` mustache
<html>
  <body onload="renderHello()">
    <div id="target">Loading...</div>
    <script id="template" type="x-tmpl-mustache">
      Hello {{ name }}!
    </script>

    <script src="https://unpkg.com/mustache@latest"></script>
    <script src="render.js"></script>
  </body>
</html>

```