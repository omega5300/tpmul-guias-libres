# partials

los partials son fragmentos que sirve para extender nuestro hoja de preprocesador nos ayuda a ahorrar hojas extra de css los frameworks como bulma o bootstrap usa esa practica para crear su frameworks

``` scss
// foundation/_code.scss
code {
  padding: .25em;
  line-height: 0;
}

// foundation/_lists.scss
ul, ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}

// style.scss
@import 'foundation/code', 'foundation/lists';

// la regla @import si esta permitido en los preprocesadores en producion no se vera
```

``` sass
// foundation/_code.sass
code 
  padding: .25em
  line-height: 0

// foundation/_lists.sass
ul, ol 
  text-align: left

  & & 
    padding: 
      bottom: 0
      left: 0

// style.sass
@import 'foundation/code', 'foundation/lists'

// la regla @import si esta permitido en los preprocesadores en producion no se vera
```

``` less
// library.less
@var: red;
@var: white;

@import "library";
```

``` stylus
// bar.styl
.bar
  width: 10px;

// foo.styl
.foo
  @import 'bar.styl'

@media screen and (min-width: 640px)
  @import 'bar.styl'
```