# ejemplos de los preprocesadores

en los preprocesadores tiene su forma unica comparte todas las propiedades de css pero la sintaxis tiene similitudes

## sass

``` sass
@mixin button-base()
  @include typography(button)
  @include ripple-surface
  @include ripple-radius-bounded

  display: inline-flex
  position: relative
  height: $button-height
  border: none
  vertical-align: middle

  &:hover
    cursor: pointer

  &:disabled
    color: $mdc-button-disabled-ink-color
    cursor: default
    pointer-events: none
```

``` scss
@mixin button-base() {
  @include typography(button);
  @include ripple-surface;
  @include ripple-radius-bounded;

  display: inline-flex;
  position: relative;
  height: $button-height;
  border: none;
  vertical-align: middle;

  &:hover { cursor: pointer; }

  &:disabled {
    color: $mdc-button-disabled-ink-color;
    cursor: default;
    pointer-events: none;
  }
}
```

## less

``` less
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

## stylus

``` stylus
body
  font: 12px Helvetica, Arial, sans-serif

a.button
  -webkit-border-radius: 5px
  -moz-border-radius: 5px
  border-radius: 5px
```