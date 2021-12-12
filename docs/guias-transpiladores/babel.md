# babel

babel es un transpilador de javascript que permite converti codigo de es6+ a es5 perimitiendo la compatibilidad total con los navegadores antiguos y también permite la traducion de tecnologias como JSX de react, los single file components de vue e incluso la libreria de tipados como flow js

## codigo morderno

``` js
// codigo es6+
const hide = el => (el.style.display = 'none');
```

## codigo para navegadores antiguos

``` js
// codigo es5
var hide = function hide(el) {
  return el.style.display = 'none';
};
```