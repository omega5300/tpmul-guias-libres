# metodologías CSS

en CSS tenemos forma de realizar nuestro codigo de forma agil existe las denominadas metodologías para se el codigo mas reutilizable, mantenible y sobre todo escalable.

hay varias metodologias de CSS como son:

## object-oriented CSS (OOCSS) 

en español CSS orientado a objetos esta metodologia desarrollada por Nicole Sullivan en 2008 y se basa en dos principios basicos

- separar la estructura del diseño.
  ``` css
  .button {
    width: 200px;
    height: 50px;
    padding: 10px;
  }
  
  .widget {
    width: 500px;
    min-height: 200px;
    overflow: auto;
  }
  .skin {
    border: solid 1px #ccc;
    background: linear-gradient(#ccc, #aaa);
    box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
  }
  ```
- separar contenedor del contenido
  ``` css
  h1{
    font-family: 'Roboto', Helvetica, sans-serif;
    color: #F44;
  }
  /* ... */
  h1, .h1-size { font-size: 2em;   }
  h2, .h2-size { font-size: 1.8em; } 
  h3, .h3-size { font-size: 1.5em; }
  /* ... */
  .transparente {
    opacity: 0.5;
    filter: alpha(opacity = 50);
  }
  ```

## block, element, modifier (BEM)

en español bloque elemento modificador: esta metodologia fue creado por el equipo de google rusia.

la idea detras de BEM es difrencirar clases CSS que cumplan diferentes funciones. esto se hace nombrando las clases de una manera especial.

``` css
.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}
```

## scalable and modular architeture for CSS (smacss)

Desarrollado en 2011 por Jonathan Snook, SMACSS funciona mediante organización de las reglas CSS en 5 categorías. (Base, Maquetación, Módulo, Estado y tema):

- base: Reglas básicas para elementos, atributos, pseudo-clases, etc… Normalize.css sería un ejemplo de reglas base
  ``` css
  h1 {
    font-size: 32px;
  }
  
  div {
    margin: 0 auto;
  }
  
  a {
    color: blue;
  }
  ```
  
- maquetación: 
  ``` css
  .layout-sidebar {
    width: 320px;
  }
  
  .l-comments {
    width: 640px;
  }
  ```
  
- modulos
  ``` css
  .call-to-action-button {
    text-transform: uppercase;
    color: #FFF200;
  }
  
  .search-form {
    display: inline-block;
    background-color: E1E1E1;
  }
  ```
  
- estados
  ``` css
  .is-hidden {
    display: none;
  }
  
  .is-highlighted {
    color: #FF0000;
    background-color: #F4F0BB;
    border: 1px solid #CBBD15;
  }
  ```