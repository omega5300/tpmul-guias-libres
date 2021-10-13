# polyfil

Un polyfill o polyfiller es un módulo de código más o menos extenso que hace que las funciones modernas de HTML, CSS o JavaScript estén disponibles en navegadores antiguos que ya no son compatibles con estas. En la mayoría de los casos, los polyfills están escritos en JavaScript, pero hay otros lenguajes de programación web que se pueden usar de base para estos scripts de llenado. Entre las funciones más importantes que pueden adaptarse a los navegadores con polyfills se incluyen componentes HTML5 como el canvas-element, basado en mapas de bits, para gráficos, diagramas y animaciones.

``` js
if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

## listado de polyfill

estas son algunas hay una gran variadad

- html5shiv
- css3pie
- css3-mediaqueries.js


## referencias

- (https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/polyfill/)[polfill explicacion]
- (https://javascript.info/polyfills)[ejemplo de polyfill]