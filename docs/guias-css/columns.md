# sistema de columnas

La especificación de diseño de varias columnas le proporciona un método para distribuir el contenido en columnas, como puede ver en un periódico. Este artículo explica cómo utilizar esta función.

Exploremos cómo utilizar el diseño de varias columnas, a menudo denominado multicol . Puedes seguirlodescargar el archivo de punto de inicio multicoly agregando el CSS en los lugares apropiados. En la parte inferior de la sección, puede ver un ejemplo de cómo debería verse el código final.

Nuestro archivo de punto de partida contiene HTML muy simple: un contenedor con una clase de container, dentro del cual hay un encabezado y algunos párrafos.

la etiqueta div con una clase de contenedor se convertirá en nuestro contenedor multicol. Habilitamos multicol usando una de dos propiedades: column-counto column-width. La column-countpropiedad toma un número como valor y crea ese número de columnas. Si agrega el siguiente CSS a su hoja de estilo y vuelve a cargar la página, obtendrá tres columnas:

``` html
<div class="container">
  <h1>Simple multicol example</h1>

  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

``` css
.container {
  column-count: 3;
}
```