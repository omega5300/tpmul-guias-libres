# nesting

el nesting en los preprocesadores son la principal razon para que los diseñadores puede implementar de una forma mas accesible o agrable segun su gusto

``` scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

``` sass
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

``` less
#header {
  color: black;
}

#header .navigation {
  font-size: 12px;
}

#header .logo {
  width: 300px;
}
```

``` stylus
body {
  font: 14px/1.5 Helvetica, arial, sans-serif;
  #logo {
    border-radius: 5px;
  }
}
```