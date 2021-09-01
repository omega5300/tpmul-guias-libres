<template><h1 id="encabezado-y-meta-datos" tabindex="-1"><a class="header-anchor" href="#encabezado-y-meta-datos" aria-hidden="true">#</a> encabezado y meta-datos</h1>
<p>estas etiquetas sirve para el seo y meta información al la pagina web
para posicionamiento y nombre de la pagina.</p>
<h2 id="eitqueta-title" tabindex="-1"><a class="header-anchor" href="#eitqueta-title" aria-hidden="true">#</a> eitqueta title</h2>
<p>esta importante para la pagina web y fundamental para el seo &quot;posicionamiento de los motores de búsqueda&quot;</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Grandma's Heavy Metal Festival Journal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="etiqueta-base" tabindex="-1"><a class="header-anchor" href="#etiqueta-base" aria-hidden="true">#</a> etiqueta base</h2>
<p>esta etiqueta especificar la ruta actual para caso de seo y/o prioridad de JavaScript y apoyo para el protocolo OpenGraph.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.example.com/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_top<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>sus atributos son iguales a la etiqueta a.</p>
</blockquote>
<h2 id="etiqueta-meta" tabindex="-1"><a class="header-anchor" href="#etiqueta-meta" aria-hidden="true">#</a> etiqueta meta</h2>
<p>esta etiqueta representa los meta-datos de la pagina web</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Redirect page after 3 seconds --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3;url=https://www.mozilla.org<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>charset</td>
<td>sirve para especificar la codificación de caracteres de la pagina web</td>
</tr>
<tr>
<td>content</td>
<td>utilizado para declarar contenido para seo y OpenGraph</td>
</tr>
<tr>
<td>http-equiv</td>
<td>define una directiva de directiva es muy poco usado por las políticas de CORS</td>
</tr>
<tr>
<td>name</td>
<td>sirve para especificar el parámetro de la opción de seo y OpenGraph</td>
</tr>
</tbody>
</table>
<h3 id="tipo-de-http-equiv" tabindex="-1"><a class="header-anchor" href="#tipo-de-http-equiv" aria-hidden="true">#</a> tipo de http-equiv</h3>
<table>
<thead>
<tr>
<th>Tipo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>content-security-policy</td>
<td>Permite a los autores de la página definir una política de contenido para la página actual. Las políticas de contenido especifican principalmente orígenes de servidor permitidos y puntos finales de secuencias de comandos que ayudan a proteger contra ataques de secuencias de comandos entre sitios.</td>
</tr>
<tr>
<td>content-type</td>
<td>Declara el tipo MIME y la codificación de caracteres del documento. Si se especifica, el contentatribute debe tener el valor &quot; text/html; charset=utf-8&quot;. Esto es equivalente a un <meta>elemento con el  charsetatribute especificado y tiene la misma restricción de ubicación dentro del documento. Nota: Solo se puede utilizar en documentos servidos con un text/html- no en documentos servidos con un tipo XML MIME.</td>
</tr>
<tr>
<td>default-style</td>
<td>Establece el nombre del conjunto de hojas de estilo CSS predeterminado</td>
</tr>
<tr>
<td>x-ua-compatible</td>
<td>i se especifica, el contentatribute debe tener el valor &quot; IE=edge&quot;. Los agentes de usuario deben ignorar este pragma. &quot;es poco usado&quot;</td>
</tr>
<tr>
<td>refresh</td>
<td>Esta instrucción especifica:</td>
</tr>
<tr>
<td>El número de segundos hasta que se debe volver a cargar la página, solo si el contentatribute contiene un número entero positivo.</td>
<td></td>
</tr>
<tr>
<td>El número de segundos hasta que la página debe redirigirse a otra, solo si el contentatribute contiene un número entero positivo seguido de la cadena &quot; ;url=&quot; y una URL válida.</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="tipos-meta-names" tabindex="-1"><a class="header-anchor" href="#tipos-meta-names" aria-hidden="true">#</a> tipos meta names</h3>
<table>
<thead>
<tr>
<th>Tipo de metedatos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>keywords</td>
<td>sirve para la asignación de palabras clave debe esta separados por una comas</td>
</tr>
<tr>
<td>referer</td>
<td>sirve para el envío de solicitudes cuyos valores de content son: no-referrer, origin, no-referrer-when-downgrade, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-URL</td>
</tr>
<tr>
<td>theme-color</td>
<td>funciona para como el color de barra de titulo si esta en un navegador móvil o PWA</td>
</tr>
<tr>
<td>color-scheme</td>
<td>especifica uno o mas esquemas de color compatible cuyo valores de content son: normal, dark light, only light</td>
</tr>
<tr>
<td>viewport</td>
<td>este tipo de meta tag es lo vital para el manejo de paginas responsivas con sus siguientes de content: width, height, initial-scale(0.0 y 10.0), maximum-scale, minimum-scale, user-scalabe(yes or no), viewport-fit(auto, contain or cover)</td>
</tr>
<tr>
<td>creator</td>
<td>especifica el creador de la pagina u organización</td>
</tr>
<tr>
<td>googlebot</td>
<td>sirve para utilizar los bots de Google por motivos de seo</td>
</tr>
<tr>
<td>publisher</td>
<td>el nombre para el editor de documento</td>
</tr>
<tr>
<td>robots</td>
<td>sirve para estipular el valor para la indexación de la pagina para los motores de búsqueda sus valores son: index, noindex, follow, nofollow, all, none, noarchive, noimageindex, nocache</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-link" tabindex="-1"><a class="header-anchor" href="#etiqueta-link" aria-hidden="true">#</a> etiqueta link</h2>
<p>esta etiqueta es otra de las mas esenciales sirve para traer recursos externos usado mucho para enlanzar archivos CSS uso de favicons.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>favicon.ico<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>as</td>
<td>este atributo solo se ultiliza si esta bajo los valores de rel preload o prefetch bajo los siguientes valores: audio, document, embed, fetch, font, image, object, script, style, track, video, worker</td>
</tr>
<tr>
<td>href</td>
<td>utilizado para los favicons y CSS</td>
</tr>
<tr>
<td>rel</td>
<td>sirve para especificar que tipo de relacion tiene sus valores mas comunes son: stylesheet, icon los otros son: alternate, archives (obsoleto), author, bookmark, canonical, external, first, help, index (obsoleto), last (obsoleto), license, manifest &quot;uso para PWA&quot;, modulepreload, next, pingback, preconnect, prefecth, preload, prev, search, shortlink, sidebar (no aprobado por el standard), up</td>
</tr>
</tbody>
</table>
<p><strong>Descripcion mas detalle por este link:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank" rel="noopener noreferrer">tipos de link<OutboundLink/></a></p>
</template>
