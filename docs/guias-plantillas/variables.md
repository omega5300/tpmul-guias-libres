# variables

una de las ventajas mas notables es la inclusion de variables para la ventaja el uso tanto nuevos como existentes en los servidores

``` erb
<%=name%>
<%- include('user/show', {user: user}); %>
```

``` handlebars
{{firstname}} {{lastname}}
```

``` pug
// soy un comentario html
- var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
//- soy un comentatio para pug

//-
    Comments for your template writers.
    Use as much text as you want.
  //
    Comments for your HTML readers.
    Use as much text as you want.
```

``` vue-html
* {{name}}
* {{age}}
* {{company}}
* {{{company}}}
```
