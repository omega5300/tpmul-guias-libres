# compatibilidad con navegadores antiguos

el CSS sale nuevas propiedades que en ocasiones es incompatible con todos los navegadores y debemos usar algunos metodos para dar compatibilidad

## uso de fallback

el fallback es util para caso que si no tenemos un prefijo propietario debemos emplear un fallback ejemplo:

``` css
* {box-sizing: border-box;}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
```

``` css
* {box-sizing: border-box;}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
  width: 33.333%;
}

@supports (display: grid) {
  .item {
      width: auto;
  }
}
```

## autoprefixer

el autoprefixer nos ayuda a que una propiedad nueva buscar su prefijo propietario como un fallback algo eficiente:

``` css
.example {
    display: -ms-grid;
    display: grid;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));
    background: -o-linear-gradient(top, white, black);
    background: linear-gradient(to bottom, white, black);
}
```