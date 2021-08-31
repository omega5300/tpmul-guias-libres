# multimedia en HTML

nos proporciona la a parte mas elementos de escuchar y ver que no sea simple textos pero no debemos sobrecargar de muchas multimedia para evitar que se vuelva lenta la pagina.

## etiqueta figure

esta etiqueta para proporcionar un elemento auto-contenedor para las imágenes o ilustraciones que puede tener un caption de manera opcional.

```html
<figure>
  <img
  src="favicon-192x192.png"
  alt="The beautiful MDN logo.">
</figure>
```

## etiqueta figcaption

esta etiqueta nos proporciona el titulo descriptivo de la imagen es una etiqueta opcional es usando por sitios informativos en ocasiones para realizar tarjetas.

```html
<figure>
  <img
  src="favicon-192x192.png"
  alt="The beautiful MDN logo.">
  <figcaption>MDN Logo</figcaption>
</figure>
```

## etiqueta img

esta etiqueta sirve para colocar imágenes y también un texto alternativo en caso que la imagen no cargue correctamente.

| Atributos | Descripción |
| ----------- | ----------- |
| alt | este atributo es para el texto alternativo es obligatorio colocaron por motivos de seo y en caso que la pagina se vuelva lenta |
| src | es un atributo obligatorio para colocar la ruta de la imagen |
| loading | este atributo es utilizado para la carga de la imagen posee dos valores eager que es el valor predeterminado y lazy usando para la carga perezosa este atributo en experimental en ocasiones |
| height | es para declarar la altura de la imagen es recomendable usar CSS |
| width | es para declarar el ancho de la imagen al igual que el height también es recomendable usar CSS |
| sizes | es para indicar por comas los un tamaño acorde al minino o máximo ancho o alto de la imagen recomendable usar media-queries o otras medias no píxeles en CSS |
| srcset | es similar al atributo sizes cuya diferencia que mas accesible en usar varias imágenes acorde a la relación de aspecto |
| usemap | este atributo sirve para asociar con la etiqueta map pero la etiqueta img no debe estar dentro de la etiqueta a o button |
| align | es un atributo obsoleto que sirve para alinear la imagen se debe emplear con CSS |
| border | al igual con align también esta obsoleto sirve para dar bordes a la imagen se debe emplear con CSS |
| hspace | este atributo esta obsoleto que sirve para dar margenes de forma horizontal a la imagen se debe emplear con la propiedad margin de CSS |
| longdesc | este atributo fue eliminado en la versión 5.2 de HTML sirve para dar una descripción de la imagen |
| name | este atributo es obsoleto sirve para dar nombre al elemento se recomienda usar el atributo id |
| vspace | al igual que hspace también es un atributo obsoleto que sirve para colocar margenes verticales a la imagen se debe emplear con la propiedad margin de CSS |

```html
<img src="favicon-192x192.png" alt="The beautiful MDN logo.">
```

### tipos de imagenes

| nombre | formato | compatible | no compatible |
| ----------- | ----------- | ----------- | ----------- |
| Animated Portable Network Graphics | .anpg | todos los navegadores | Internet-Explorer |
| AV1 Image File Format | .avif | Chrome, Opera y Firefox | Edge, Internet-Explorer y Safari |
| Graphics Interchange Format | .gif | todos los navegadores | ninguno |
| Joint Photographic Expert Group image | .jpg, .jpeg, .jfif, .pjpeg, .pjp | todos los navegadores | ninguno |
| Portable Network Graphics | .png | todos los navegadores | ninguno |
| Scalable Vector Graphics | .svg | todos los navegadores | ninguno |
| Web Picture format | .webp | todos los navegadores | Internet-Explorer |

### otros tipo de imagen

| nombre | formato | compatible | no compatible |
| ----------- | ----------- | ----------- | ----------- |
| Bitmap file | .bmp | todos los navegadores | ninguno |
| Microsoft Icon | .ico, cur | todos los navegadores | ninguno |
| Tagged Image File Format | .tif, .tiff | Safari | todos los navegadores |

## etiqueta source

esta etiqueta es usando para colocar los recursos dentro de las etiquetas picture, audio y video.

```html
<source srcset="diagram.svg" type="image/svg+xml">
```

| Atributos | Descripción |
| ----------- | ----------- |
| srcset | es similar al atributo sizes cuya diferencia que mas accesible en usar varias imágenes acorde a la relación de aspecto |
| sizes | es para indicar por comas los un tamaño de la imagen por unidades de medias y le uso de la relacion de aspecto |
| media | es utilizar para estipular una media query en caso que estas usando imagenes en la etiqueta picture |
| src | es un atributo obligatorio para colocar la ruta de medio a utilizar (audio o video) |
| type | este atributo es para especificar el formato de medio a colocar "se debe emplear si estas usando la etiqueta audio o video" |

## etiqueta picture

esta etiqueta sirve para dar el concepto responsivo de imágenes sin el uso de CSS pero para que funcione debemos que colocar un fallback para navegadores como la etiqueta img.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```

## etiqueta track

esta etiqueta es usada para dar subtítulos dentro de las etiquetas audio y video.

```html
<video controls
       src="/media/cc0-videos/friday.mp4">
    <track default
           kind="captions"
           srclang="en"
           src="/media/examples/friday.vtt" />
    Sorry, your browser doesn't support embedded videos.
</video>
```

| Atributos | Descripción |
| ----------- | ----------- |
| default | Este atributo indica que la pista debe estar habilitada a menos que las preferencias del usuario indiquen que otra pista es más apropiada. Esto solo puede usarse en un elemento de pista por elemento multimedia. |
| kind | Cómo se debe utilizar la pista de texto. Si se omite, el tipo predeterminado son los subtítulos. Si el atributo contiene un valor no válido, utilizará meta-datos (las versiones de Chrome anteriores a la 52 trataban un valor no válido como subtítulos). Se permiten las siguientes palabras clave: subtitles, captions, descriptions, chapters y metadata |
| label | Un título legible por el usuario de la pista de texto que utiliza el navegador al enumerar las pistas de texto disponibles. |
| src | se utiliza para colocar la ruta de subtitulo bajo el formato vtt |
| srclang | Idioma de los datos de texto de la pista. Debe ser una etiqueta de idioma BCP 47 válida. Si el atributo kind se establece en subtítulos, entonces se debe definir srclang. |

## etiqueta audio y video

- audio: sirve para colocar sonidos usando utilizando en paginas tipo emisoras de radio, o plataformas como Spotify.
- video: sirve para colocar vídeos usando en sitios como YouTube, Vimeo o similares.

> ambas si no tiene el atributo controls están ocultos de forma predeterminada.

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg">
  <source src="myAudio.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio. Here is
     a <a href="myAudio.mp3">link to the audio</a> instead.</p>
</audio>

<video controls>
  <source src="myVideo.mp4" type="video/mp4">
  <source src="myVideo.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="myVideo.mp4">link to the video</a> instead.</p>
</video>
```

| Atributos | Descripción |
| ----------- | ----------- |
| autoplay | atributo booleano que sirve para el inicia automáticamente después que cargue por completo la pagina web |
| controls | atributo booleano que sirve para mostrar los controles multimedia |
| loop | atributo booleano para indicar que después que termine vuelve a repetir desde el principio |
| muted | atributo booleano para indicar que la pista que silenciado si no la tiene colocado por defecto tiene sonido |
| preload | este atributo sirve para dar una precarga o carga al audio o video por defecto es none sus otro valores son meta-data y auto |
| src | es similar a la etiqueta img |
| contolslist | atributo experimental exclusivo de la etiqueta video para la selección de nuestro set de controles sus valores son: nodownload, nofullScreen y noremoteplayback |
| height | atributo exclusivo de video para establecer la altura de vídeo recomendable usar CSS |
| width | atributo exclusivo de vídeo para establecer el ancho de vídeo recomendable usar CSS
| playsinline | atributo booleano excluso para reproducir en linea |
| poster | atributo exclusivo de vídeo para colocar la ruta de la imagen antes de iniciar el vídeo en caso que no tenga el atributo autoplay |

### tipos de audio

| formato | compatible | no compatible |
| ----------- | ----------- | ----------- |
| .aac | todos los navegadores | ninguno |
| .flac | todos los navegadores | Internet-explorer |
| .ogg | todos los navegadores (Safari de forma parcial) | Internet Explorer |
| .mp3 | todos los navegadores | ninguno |
| .wav | todos los navegadores | Internet Explorer |

### tipos de vídeos

| formato | compatible | no compatible |
| ----------- | ----------- | ----------- |
| .avi | todos los navegadores | Internet Explorer y safari |
| .webm | todos los navegadores (safari de forma parcial) | Internet Explorer |
| .ogg (video) | todos los navegadores | safari |
| .mp4 | todos los navegadores | ninguno |

## eitqueta canvas

esta sirve para la creación de gráficos o animaciones mediante la api de canvas o web GL en JavaScript

```html
<canvas width="300" height="300">
  An alternative text describing what your canvas displays.
</canvas>

```

> los atributos width y height son iguales a las demás etiquetas etiquetas el otro detalle es la utilización de DOM para manejo de canvas

## etiqueta embed

esta etiqueta es usar para traer contenido externo a la pagina web antiguamente utilizado para vídeo ahora casi no se usar mucho para usarlo debes tener ciertos plugins de navegador

| Atributos | Descripción |
| ----------- | ----------- |
| src | ruta del archivo donde vas a colocar |
| type | tipo de formato dependiendo de plugin instalado |
| width | ancho de la etiqueta embed |
| height | ancho de la etiqueta embed |

## etiqueta iframe

etiqueta utilizada para mostrar contenido un sitio web externo como ejemplo youtube o archivos HTML de tu sitio

```html
<iframe src="https://example.org"
            title="iframe Example 1" width="400" height="300">
</iframe>
```

> los atributos son los mismo a la etiqueta img  excepto el alt pero con algunos de la propia etiqueta mas sus atributo obsoleto. <br>
se recomienda usar un iframe debido que cuanto mas iframes tenga mas lento se vuelve el sitio web. <br>
el atributo es name también es usando también en formularios botones y la etiqueta a

| Atributos | Descripción |
| ----------- | ----------- |
| title | atributo esencial para motivos de seo es colocar un titulo al iframe |
| allow | atributo booleano para la habilitación de los permiso dependiendo de las api de navegador |
| allowfullscreen | atributo booleano para la pantalla completa **atributo legacy** |
| allowpaymentrequest | atributo booleano para pagos **tambien es un legacy** |
| sanbox | este atributo es para aplicar restricciones extras al iframe |

## etiqueta map 

esta etiqueta es especial es para interacción con la imagen por medio de enlaces por coordenadas

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html">
  <area shape="circle" coords="275,75,75" href="right.html">
</map>
<img usemap="#primary" src="https://via.placeholder.com/350x150" alt="350 x 150 pic">
```
| Atributos | Descripción |
| ----------- | ----------- |
| name | atribulo equivalente a un id para la etiqueta map para que la etiqueta img use el atributo usemap |

> esta etiqueta funciona si la imagen no esté dentro de la etiqueta a o button

## etiqueta area

esta etiqueta sirve para las coordenadas del enlace a donde quiere dirigir.

```html
<area shape="circle" coords="75,75,75" href="left.html">
```

| Atributos | Descripción |
| ----------- | ----------- |
| alt | sirve para colocar textos alternativos |
| coords | sirve para colocar coordenadas basada en px ejemplo: 50,66 shape rect o dependiendo del atributo shape |
| shape | define el valor de una figura geométrica para las coordenadas |
| href | establecer un link sea de archivo o sitio web externo |
| download | atributo utilizado para descargar archivos |
| target | sirve para la redirección igual con la etiqueta a |

## etiqueta object

esta etiqueta es similar a embed también usando para elementos externos.

```html
<object type="application/pdf"
    data="/media/examples/In-CC0.pdf"
    width="250"
    height="200">
</object>
```

> casi los atributos son iguales a las etiquetas audio y video con un excepción del atributo data. <br> al igual que iframe y embed evitar el sobre-uso de estas etiquetas recomendable uno por pagina "considerable".

| Atributos | Descripción |
| ----------- | ----------- |
| data | similar a los atributos href y src es para traer el archivo de nuestra pagina web  |