# placeholders

estos son mixins especiales para dar herencia a los selectores tambien sirve para evitar el DRY y es mas agil cuando se trabaja con propiedades heredadas

``` scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

``` sass
%message-shared
  border: 1px solid #ccc
  padding: 10px
  color: #333

.error
  @extend %message-shared
  border-color: red


.warning
  @extend %message-shared
  border-color: yellow
```

``` less
.placeholder-1() {
  foo: bar;
}

.placeholder-2() {
  baz: qux;
}

.include-placeholder-1 {
  .placeholder-1();
}
```

``` stylus
$placeholder-1
  foo: bar

$placeholder-2
  baz: qux

.include-placeholder-1
  @extend $placeholder-1
```