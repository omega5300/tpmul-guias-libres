<template><h1 id="multimedia-en-html" tabindex="-1"><a class="header-anchor" href="#multimedia-en-html" aria-hidden="true">#</a> multimedia en HTML</h1>
<p>nos proporciona la a parte mas elementos de escuchar y ver que no sea simple textos pero no debemos sobrecargar de muchas multimedia para evitar que se vuelva lenta la pagina.</p>
<h2 id="etiqueta-figure" tabindex="-1"><a class="header-anchor" href="#etiqueta-figure" aria-hidden="true">#</a> etiqueta figure</h2>
<p>esta etiqueta para proporcionar un elemento auto-contenedor para las imágenes o ilustraciones que puede tener un caption de manera opcional.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>favicon-192x192.png<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>The beautiful MDN logo.<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="etiqueta-figcaption" tabindex="-1"><a class="header-anchor" href="#etiqueta-figcaption" aria-hidden="true">#</a> etiqueta figcaption</h2>
<p>esta etiqueta nos proporciona el titulo descriptivo de la imagen es una etiqueta opcional es usando por sitios informativos en ocasiones para realizar tarjetas.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>favicon-192x192.png<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>The beautiful MDN logo.<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">></span></span>MDN Logo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="etiqueta-img" tabindex="-1"><a class="header-anchor" href="#etiqueta-img" aria-hidden="true">#</a> etiqueta img</h2>
<p>esta etiqueta sirve para colocar imágenes y también un texto alternativo en caso que la imagen no cargue correctamente.</p>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>alt</td>
<td>este atributo es para el texto alternativo es obligatorio colocaron por motivos de seo y en caso que la pagina se vuelva lenta</td>
</tr>
<tr>
<td>src</td>
<td>es un atributo obligatorio para colocar la ruta de la imagen</td>
</tr>
<tr>
<td>loading</td>
<td>este atributo es utilizado para la carga de la imagen posee dos valores eager que es el valor predeterminado y lazy usando para la carga perezosa este atributo en experimental en ocasiones</td>
</tr>
<tr>
<td>height</td>
<td>es para declarar la altura de la imagen es recomendable usar CSS</td>
</tr>
<tr>
<td>width</td>
<td>es para declarar el ancho de la imagen al igual que el height también es recomendable usar CSS</td>
</tr>
<tr>
<td>sizes</td>
<td>es para indicar por comas los un tamaño acorde al minino o máximo ancho o alto de la imagen recomendable usar media-queries o otras medias no píxeles en CSS</td>
</tr>
<tr>
<td>srcset</td>
<td>es similar al atributo sizes cuya diferencia que mas accesible en usar varias imágenes acorde a la relación de aspecto</td>
</tr>
<tr>
<td>usemap</td>
<td>este atributo sirve para asociar con la etiqueta map pero la etiqueta img no debe estar dentro de la etiqueta a o button</td>
</tr>
<tr>
<td>align</td>
<td>es un atributo obsoleto que sirve para alinear la imagen se debe emplear con CSS</td>
</tr>
<tr>
<td>border</td>
<td>al igual con align también esta obsoleto sirve para dar bordes a la imagen se debe emplear con CSS</td>
</tr>
<tr>
<td>hspace</td>
<td>este atributo esta obsoleto que sirve para dar margenes de forma horizontal a la imagen se debe emplear con la propiedad margin de CSS</td>
</tr>
<tr>
<td>longdesc</td>
<td>este atributo fue eliminado en la versión 5.2 de HTML sirve para dar una descripción de la imagen</td>
</tr>
<tr>
<td>name</td>
<td>este atributo es obsoleto sirve para dar nombre al elemento se recomienda usar el atributo id</td>
</tr>
<tr>
<td>vspace</td>
<td>al igual que hspace también es un atributo obsoleto que sirve para colocar margenes verticales a la imagen se debe emplear con la propiedad margin de CSS</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>favicon-192x192.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>The beautiful MDN logo.<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="tipos-de-imagenes" tabindex="-1"><a class="header-anchor" href="#tipos-de-imagenes" aria-hidden="true">#</a> tipos de imagenes</h3>
<table>
<thead>
<tr>
<th>nombre</th>
<th>formato</th>
<th>compatible</th>
<th>no compatible</th>
</tr>
</thead>
<tbody>
<tr>
<td>Animated Portable Network Graphics</td>
<td>.anpg</td>
<td>todos los navegadores</td>
<td>Internet-Explorer</td>
</tr>
<tr>
<td>AV1 Image File Format</td>
<td>.avif</td>
<td>Chrome, Opera y Firefox</td>
<td>Edge, Internet-Explorer y Safari</td>
</tr>
<tr>
<td>Graphics Interchange Format</td>
<td>.gif</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
<tr>
<td>Joint Photographic Expert Group image</td>
<td>.jpg, .jpeg, .jfif, .pjpeg, .pjp</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
<tr>
<td>Portable Network Graphics</td>
<td>.png</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
<tr>
<td>Scalable Vector Graphics</td>
<td>.svg</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
<tr>
<td>Web Picture format</td>
<td>.webp</td>
<td>todos los navegadores</td>
<td>Internet-Explorer</td>
</tr>
</tbody>
</table>
<h3 id="otros-tipo-de-imagen" tabindex="-1"><a class="header-anchor" href="#otros-tipo-de-imagen" aria-hidden="true">#</a> otros tipo de imagen</h3>
<table>
<thead>
<tr>
<th>nombre</th>
<th>formato</th>
<th>compatible</th>
<th>no compatible</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bitmap file</td>
<td>.bmp</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
<tr>
<td>Microsoft Icon</td>
<td>.ico, cur</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
<tr>
<td>Tagged Image File Format</td>
<td>.tif, .tiff</td>
<td>Safari</td>
<td>todos los navegadores</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-source" tabindex="-1"><a class="header-anchor" href="#etiqueta-source" aria-hidden="true">#</a> etiqueta source</h2>
<p>esta etiqueta es usando para colocar los recursos dentro de las etiquetas picture, audio y video.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>diagram.svg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/svg+xml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>srcset</td>
<td>es similar al atributo sizes cuya diferencia que mas accesible en usar varias imágenes acorde a la relación de aspecto</td>
</tr>
<tr>
<td>sizes</td>
<td>es para indicar por comas los un tamaño de la imagen por unidades de medias y le uso de la relacion de aspecto</td>
</tr>
<tr>
<td>media</td>
<td>es utilizar para estipular una media query en caso que estas usando imagenes en la etiqueta picture</td>
</tr>
<tr>
<td>src</td>
<td>es un atributo obligatorio para colocar la ruta de medio a utilizar (audio o video)</td>
</tr>
<tr>
<td>type</td>
<td>este atributo es para especificar el formato de medio a colocar &quot;se debe emplear si estas usando la etiqueta audio o video&quot;</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-picture" tabindex="-1"><a class="header-anchor" href="#etiqueta-picture" aria-hidden="true">#</a> etiqueta picture</h2>
<p>esta etiqueta sirve para dar el concepto responsivo de imágenes sin el uso de CSS pero para que funcione debemos que colocar un fallback para navegadores como la etiqueta img.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdn-logo-wide.png<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 600px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdn-logo-narrow.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MDN<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="etiqueta-track" tabindex="-1"><a class="header-anchor" href="#etiqueta-track" aria-hidden="true">#</a> etiqueta track</h2>
<p>esta etiqueta es usada para dar subtítulos dentro de las etiquetas audio y video.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span>
       <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/media/cc0-videos/friday.mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>track</span> <span class="token attr-name">default</span>
           <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>captions<span class="token punctuation">"</span></span>
           <span class="token attr-name">srclang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span>
           <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/media/examples/friday.vtt<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    Sorry, your browser doesn't support embedded videos.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>Este atributo indica que la pista debe estar habilitada a menos que las preferencias del usuario indiquen que otra pista es más apropiada. Esto solo puede usarse en un elemento de pista por elemento multimedia.</td>
</tr>
<tr>
<td>kind</td>
<td>Cómo se debe utilizar la pista de texto. Si se omite, el tipo predeterminado son los subtítulos. Si el atributo contiene un valor no válido, utilizará meta-datos (las versiones de Chrome anteriores a la 52 trataban un valor no válido como subtítulos). Se permiten las siguientes palabras clave: subtitles, captions, descriptions, chapters y metadata</td>
</tr>
<tr>
<td>label</td>
<td>Un título legible por el usuario de la pista de texto que utiliza el navegador al enumerar las pistas de texto disponibles.</td>
</tr>
<tr>
<td>src</td>
<td>se utiliza para colocar la ruta de subtitulo bajo el formato vtt</td>
</tr>
<tr>
<td>srclang</td>
<td>Idioma de los datos de texto de la pista. Debe ser una etiqueta de idioma BCP 47 válida. Si el atributo kind se establece en subtítulos, entonces se debe definir srclang.</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-audio-y-video" tabindex="-1"><a class="header-anchor" href="#etiqueta-audio-y-video" aria-hidden="true">#</a> etiqueta audio y video</h2>
<ul>
<li>audio: sirve para colocar sonidos usando utilizando en paginas tipo emisoras de radio, o plataformas como Spotify.</li>
<li>video: sirve para colocar vídeos usando en sitios como YouTube, Vimeo o similares.</li>
</ul>
<blockquote>
<p>ambas si no tiene el atributo controls están ocultos de forma predeterminada.</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myAudio.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/mpeg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myAudio.ogg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/ogg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Your browser doesn't support HTML5 audio. Here is
     a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myAudio.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>link to the audio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> instead.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myVideo.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myVideo.webm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/webm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Your browser doesn't support HTML5 video. Here is
     a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myVideo.mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>link to the video<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> instead.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>autoplay</td>
<td>atributo booleano que sirve para el inicia automáticamente después que cargue por completo la pagina web</td>
</tr>
<tr>
<td>controls</td>
<td>atributo booleano que sirve para mostrar los controles multimedia</td>
</tr>
<tr>
<td>loop</td>
<td>atributo booleano para indicar que después que termine vuelve a repetir desde el principio</td>
</tr>
<tr>
<td>muted</td>
<td>atributo booleano para indicar que la pista que silenciado si no la tiene colocado por defecto tiene sonido</td>
</tr>
<tr>
<td>preload</td>
<td>este atributo sirve para dar una precarga o carga al audio o video por defecto es none sus otro valores son meta-data y auto</td>
</tr>
<tr>
<td>src</td>
<td>es similar a la etiqueta img</td>
</tr>
<tr>
<td>contolslist</td>
<td>atributo experimental exclusivo de la etiqueta video para la selección de nuestro set de controles sus valores son: nodownload, nofullScreen y noremoteplayback</td>
</tr>
<tr>
<td>height</td>
<td>atributo exclusivo de video para establecer la altura de vídeo recomendable usar CSS</td>
</tr>
<tr>
<td>width</td>
<td>atributo exclusivo de vídeo para establecer el ancho de vídeo recomendable usar CSS</td>
</tr>
<tr>
<td>playsinline</td>
<td>atributo booleano excluso para reproducir en linea</td>
</tr>
<tr>
<td>poster</td>
<td>atributo exclusivo de vídeo para colocar la ruta de la imagen antes de iniciar el vídeo en caso que no tenga el atributo autoplay</td>
</tr>
</tbody>
</table>
<h3 id="tipos-de-audio" tabindex="-1"><a class="header-anchor" href="#tipos-de-audio" aria-hidden="true">#</a> tipos de audio</h3>
<table>
<thead>
<tr>
<th>formato</th>
<th>compatible</th>
<th>no compatible</th>
</tr>
</thead>
<tbody>
<tr>
<td>.aac</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
<tr>
<td>.flac</td>
<td>todos los navegadores</td>
<td>Internet-explorer</td>
</tr>
<tr>
<td>.ogg</td>
<td>todos los navegadores (Safari de forma parcial)</td>
<td>Internet Explorer</td>
</tr>
<tr>
<td>.mp3</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
<tr>
<td>.wav</td>
<td>todos los navegadores</td>
<td>Internet Explorer</td>
</tr>
</tbody>
</table>
<h3 id="tipos-de-videos" tabindex="-1"><a class="header-anchor" href="#tipos-de-videos" aria-hidden="true">#</a> tipos de vídeos</h3>
<table>
<thead>
<tr>
<th>formato</th>
<th>compatible</th>
<th>no compatible</th>
</tr>
</thead>
<tbody>
<tr>
<td>.avi</td>
<td>todos los navegadores</td>
<td>Internet Explorer y safari</td>
</tr>
<tr>
<td>.webm</td>
<td>todos los navegadores (safari de forma parcial)</td>
<td>Internet Explorer</td>
</tr>
<tr>
<td>.ogg (video)</td>
<td>todos los navegadores</td>
<td>safari</td>
</tr>
<tr>
<td>.mp4</td>
<td>todos los navegadores</td>
<td>ninguno</td>
</tr>
</tbody>
</table>
<h2 id="eitqueta-canvas" tabindex="-1"><a class="header-anchor" href="#eitqueta-canvas" aria-hidden="true">#</a> eitqueta canvas</h2>
<p>esta sirve para la creación de gráficos o animaciones mediante la api de canvas o web GL en JavaScript</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  An alternative text describing what your canvas displays.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>los atributos width y height son iguales a las demás etiquetas etiquetas el otro detalle es la utilización de DOM para manejo de canvas</p>
</blockquote>
<h2 id="etiqueta-embed" tabindex="-1"><a class="header-anchor" href="#etiqueta-embed" aria-hidden="true">#</a> etiqueta embed</h2>
<p>esta etiqueta es usar para traer contenido externo a la pagina web antiguamente utilizado para vídeo ahora casi no se usar mucho para usarlo debes tener ciertos plugins de navegador</p>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>ruta del archivo donde vas a colocar</td>
</tr>
<tr>
<td>type</td>
<td>tipo de formato dependiendo de plugin instalado</td>
</tr>
<tr>
<td>width</td>
<td>ancho de la etiqueta embed</td>
</tr>
<tr>
<td>height</td>
<td>ancho de la etiqueta embed</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-iframe" tabindex="-1"><a class="header-anchor" href="#etiqueta-iframe" aria-hidden="true">#</a> etiqueta iframe</h2>
<p>etiqueta utilizada para mostrar contenido un sitio web externo como ejemplo youtube o archivos HTML de tu sitio</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.org<span class="token punctuation">"</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iframe Example 1<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>los atributos son los mismo a la etiqueta img  excepto el alt pero con algunos de la propia etiqueta mas sus atributo obsoleto. <br>
se recomienda usar un iframe debido que cuanto mas iframes tenga mas lento se vuelve el sitio web. <br>
el atributo es name también es usando también en formularios botones y la etiqueta a</p>
</blockquote>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>atributo esencial para motivos de seo es colocar un titulo al iframe</td>
</tr>
<tr>
<td>allow</td>
<td>atributo booleano para la habilitación de los permiso dependiendo de las api de navegador</td>
</tr>
<tr>
<td>allowfullscreen</td>
<td>atributo booleano para la pantalla completa <strong>atributo legacy</strong></td>
</tr>
<tr>
<td>allowpaymentrequest</td>
<td>atributo booleano para pagos <strong>tambien es un legacy</strong></td>
</tr>
<tr>
<td>sanbox</td>
<td>este atributo es para aplicar restricciones extras al iframe</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-map" tabindex="-1"><a class="header-anchor" href="#etiqueta-map" aria-hidden="true">#</a> etiqueta map</h2>
<p>esta etiqueta es especial es para interacción con la imagen por medio de enlaces por coordenadas</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>75,75,75<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>275,75,75<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">usemap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#primary<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://via.placeholder.com/350x150<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>350 x 150 pic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>atribulo equivalente a un id para la etiqueta map para que la etiqueta img use el atributo usemap</td>
</tr>
</tbody>
</table>
<blockquote>
<p>esta etiqueta funciona si la imagen no esté dentro de la etiqueta a o button</p>
</blockquote>
<h2 id="etiqueta-area" tabindex="-1"><a class="header-anchor" href="#etiqueta-area" aria-hidden="true">#</a> etiqueta area</h2>
<p>esta etiqueta sirve para las coordenadas del enlace a donde quiere dirigir.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>75,75,75<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>alt</td>
<td>sirve para colocar textos alternativos</td>
</tr>
<tr>
<td>coords</td>
<td>sirve para colocar coordenadas basada en px ejemplo: 50,66 shape rect o dependiendo del atributo shape</td>
</tr>
<tr>
<td>shape</td>
<td>define el valor de una figura geométrica para las coordenadas</td>
</tr>
<tr>
<td>href</td>
<td>establecer un link sea de archivo o sitio web externo</td>
</tr>
<tr>
<td>download</td>
<td>atributo utilizado para descargar archivos</td>
</tr>
<tr>
<td>target</td>
<td>sirve para la redirección igual con la etiqueta a</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-object" tabindex="-1"><a class="header-anchor" href="#etiqueta-object" aria-hidden="true">#</a> etiqueta object</h2>
<p>esta etiqueta es similar a embed también usando para elementos externos.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>application/pdf<span class="token punctuation">"</span></span>
    <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/media/examples/In-CC0.pdf<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>casi los atributos son iguales a las etiquetas audio y video con un excepción del atributo data. <br> al igual que iframe y embed evitar el sobre-uso de estas etiquetas recomendable uno por pagina &quot;considerable&quot;.</p>
</blockquote>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>similar a los atributos href y src es para traer el archivo de nuestra pagina web</td>
</tr>
</tbody>
</table>
</template>
