# variables

las variables son el concepto fundamental en los preprocesadores nos ayuda en ocasionaes para evitar el concepto DRY que significa repeti valores.

``` scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

``` sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

``` less
@width: 10px;
@height: @width + 10px;

.header {
  width: @width;
  height: @height;
}
```

``` stylus
font-size = 14px
font-stack = "Lucida Grande", Arial, sans-serif

body
  font font-size font-stack
  
$font-size = 14px
h1 {
  font: $font-size sans-serif;
}
```