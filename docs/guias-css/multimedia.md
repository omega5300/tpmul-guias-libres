# elementos multimedia y formulario

en estos elementos son especiales para imagenes y otros: Las imágenes y el video se describen como elementos reemplazados . Esto significa que CSS no puede afectar el diseño interno de estos elementos, solo su posición en la página entre otros elementos. Sin embargo, como veremos, hay varias cosas que CSS puede hacer con una imagen.

Ciertos elementos reemplazados, como imágenes y video, también se describen como que tienen una relación de aspecto . Esto significa que tiene un tamaño en las dimensiones horizontal (x) y vertical (y), y se mostrará utilizando las dimensiones intrínsecas del archivo de forma predeterminada.

## min and max

son propiedades especiales para declarar el minimo y maximo para evitar desbordamientos de la imagen entre ellas tenemos

``` css
min-width: 10%; /* declarar la anchura minima */
min-height: 10%; /* declarar la altura minima */
max-width: 100%; /* declarar la anchura maxima */
max-height: 100%; /* declarar la altura maxima */
```

## object-fit

esta propiedad CSS establece cómo se debe cambiar el tamaño del contenido de un elemento reemplazado , como un o , para que se ajuste a su contenedor. tanto imagenes como video,

| valores | descripcion |
| ----------- | ----------- |
| contain | El contenido reemplazado se escala para mantener su relación de aspecto mientras se ajusta al cuadro de contenido del elemento. Todo el objeto está hecho para llenar el cuadro, conservando su relación de aspecto, por lo que el objeto será"formato de pantalla ancha" si su relación de aspecto no coincide con la relación de aspecto de la caja. |
| cover | El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena todo el cuadro de contenido del elemento. Si la relación de aspecto del objeto no coincide con la relación de aspecto de su caja, el objeto se recortará para que se ajuste. |
| fill | El contenido reemplazado se dimensiona para llenar el cuadro de contenido del elemento. Todo el objeto llenará completamente la caja. Si la relación de aspecto del objeto no coincide con la relación de aspecto de su caja, entonces el objeto se estirará para ajustarse. |
| none | El contenido reemplazado no cambia de tamaño. |
| scale-down | El contenido se dimensiona como si se especificara noneo containse especificara, lo que resulte en un tamaño de objeto concreto más pequeño. |

``` css
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;
```

## background-blend-mode

La propiedad establece cómo deben combinarse las imágenes de fondo de un elemento entre sí y con el color de fondo del elemento. Los modos de fusión deben definirse en el mismo orden que la propiedad background-image.

``` css
/* One value */
background-blend-mode: normal;

/* Two values, one per background */
background-blend-mode: darken, luminosity;
```

## isolation

La propiedad determina si un elemento debe crear un nuevo stacking context.

``` css
isolation: auto;
isolation: isolate;
```

## mix-blend-mode

La propiedad establece cómo el contenido de un elemento debe combinarse con el contenido del elemento principal y el del elemento background.

``` css
mix-blend-mode: normal;
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: hard-light;
mix-blend-mode: soft-light;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: saturation;
mix-blend-mode: color;
mix-blend-mode: luminosity;
```

## image methods

en css tenemos algunas opciones poco conocidas por los desarrolladores entre ellas tenenos

| propiedades | descripcion |
| ----------- | ----------- |
| image-orientation | La propiedad especifica una corrección independiente del diseño de la orientación de una imagen. |
| image-rendering | La propiedad establece un algoritmo de escalado de imágenes. La propiedad se aplica a un elemento en sí, a cualquier imagen establecida en sus otras propiedades y a sus descendientes. |
| image-resolution | propiedad especifica la resolución intrínseca de todas las imágenes ráster utilizadas en o sobre el elemento. Afecta a las imágenes de contenido, como los elementos reemplazados y el contenido generado, y las imágenes decorativas, como las imágenes de fondo. |

``` css
image-orientation: none;
image-orientation: from-image;
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;
image-resolution: from-image;
image-resolution: 300dpi;
image-resolution: from-image 300dpi;
image-resolution: 300dpi snap;
```

## drop-shadow

La función CSS aplica un efecto de sombra paralela a la imagen de entrada. Su resultado es una función-filtro.

``` css
/* Black shadow with 10px blur */
drop-shadow(16px 16px 10px black)
```

## backdrop-filter

La propiedad CSS le permite aplicar efectos gráficos como desenfoque o cambio de color al área detrás de un elemento. Debido a que se aplica a todo lo que está detrás del elemento, para ver el efecto debe hacer que el elemento o su fondo sean al menos parcialmente transparentes.

``` css
/* Keyword value */
backdrop-filter: none;

/* URL to SVG filter */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> values */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Multiple filters */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);
```

## filter

La propiedad CSS aplica efectos gráficos como desenfoque o cambio de color a un elemento. Los filtros se utilizan comúnmente para ajustar la representación de imágenes, fondos y bordes.

En el estándar CSS se incluyen varias funciones que logran efectos predefinidos. También puede hacer referencia a un filtro SVG con una URL a un elemento de filtro SVG.

``` css
/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Use no filter */
filter: none;
```

> estas funciones tiene casi la compatibilidad total con todos los navegadores en svg solo en firefox