<template><h1 id="etiquetas-principales" tabindex="-1"><a class="header-anchor" href="#etiquetas-principales" aria-hidden="true">#</a> etiquetas principales</h1>
<p>los elementos principales son la estructura vital una pagina HTML son la que de información tanto para seo como también lo visual de la pagina.</p>
<h2 id="etiqueta-doctype" tabindex="-1"><a class="header-anchor" href="#etiqueta-doctype" aria-hidden="true">#</a> etiqueta doctype</h2>
<p>esta etiqueta cuya función es especificar la versión del documento HTML.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- version actual --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- version html 4 strict mode  --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD HTML 4.01//EN"</span>
<span class="token string">"http://www.w3.org/TR/html4/strict.dtd"</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- version html 4 transitional --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD HTML 4.01 Transitional//EN"</span>
<span class="token string">"http://www.w3.org/TR/html4/loose.dtd"</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- version html 4 frameset --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD HTML 4.01 Frameset//EN"</span>
<span class="token string">"http://www.w3.org/TR/html4/frameset.dtd"</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- version xhtml strict --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD XHTML 1.0 Strict//EN"</span>
<span class="token string">"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- version xhtml trasitional --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD XHTML 1.0 Transitional//EN"</span>
<span class="token string">"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- version xhtml frameset --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD XHTML 1.0 Frameset//EN"</span>
<span class="token string">"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote>
<p>se recomienda usar la versión mas reciente de HTML.</p>
</blockquote>
<h2 id="etiqueta-html" tabindex="-1"><a class="header-anchor" href="#etiqueta-html" aria-hidden="true">#</a> etiqueta html</h2>
<p>esta es la etiqueta raíz para la realización de la estructura de una pagina web.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>manifest</td>
<td>este atributo es para indica la política de cache uso no es recomendable debido que es un atributo desfasado</td>
</tr>
<tr>
<td>version</td>
<td>este atributo es usando para especificar la versión de HTML ahora es un atributo desfasado para dar prioridad al el doctype</td>
</tr>
<tr>
<td>xmlns</td>
<td>este atributo es opcional se usa para convertir a XHTML para se mas estricto **uso es poco debido a el standard html5+</td>
</tr>
<tr>
<td>lang</td>
<td>su uso es para especificar el idioma de documento de la pagina web</td>
</tr>
</tbody>
</table>
<blockquote>
<p>solo puede contener dentro una etiqueta head y una etiqueta body.</p>
</blockquote>
<h2 id="etiqueta-head" tabindex="-1"><a class="header-anchor" href="#etiqueta-head" aria-hidden="true">#</a> etiqueta head</h2>
<p>esta es la etiqueta se usa para los meta-datos del documento HTML.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>profile</td>
<td>este atributo sirve para dar uno o mas meta-datos este atributo fue obsoleto para favorecer a las etiquetas meta</td>
</tr>
</tbody>
</table>
<blockquote>
<p>la etiqueta head solo puede contener una etiqueta title, style y así como otras etiquetas: meta, link y script son de múltiple uso las etiqueta solo una vez.</p>
</blockquote>
<h2 id="etiqueta-body" tabindex="-1"><a class="header-anchor" href="#etiqueta-body" aria-hidden="true">#</a> etiqueta body</h2>
<p>esta es la etiqueta es para la visualización de los elementos de linea y bloque del documento su función es mostrar elementos que las personas lo pueda ver.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>alink</td>
<td>este se usar para colocar el color de una pagina visita es un atributo desfasado a favor de la pseudo clase :active</td>
</tr>
<tr>
<td>background</td>
<td>este atributo se utilizaba para color o imagen de fondo al el documento esta desfasado a favor de CSS por la propiedad background-color or background-image</td>
</tr>
<tr>
<td>bgcolor</td>
<td>este atributo se utilizaba para color de fondo al el documento esta desfasado a favor de CSS por la propiedad background-color</td>
</tr>
<tr>
<td>link</td>
<td>este atributo coloca el color a en los enlaces de las paginas no vistas fue desfasado a favor de la pseudo clase :link</td>
</tr>
<tr>
<td>bottommargin</td>
<td>este atributo sirve para colocar margenes inferiores el uso fue obsoleto a favor de margin-bottom</td>
</tr>
<tr>
<td>leftmargin</td>
<td>este atributo sirve para colocar margenes de lateral izquierdo el uso fue obsoleto a favor de margin-left</td>
</tr>
<tr>
<td>rightmargin</td>
<td>este atributo sirve para colocar margenes de lateral derecho el uso fue obsoleto a favor de margin-right</td>
</tr>
<tr>
<td>topmargin</td>
<td>este atributo sirve para colocar margenes superiores el uso fue obsoleto a favor de margin-top</td>
</tr>
<tr>
<td>text</td>
<td>el uso es para colocar el color al documento es un atributo desfasado a favor de la propiedad de CSS color</td>
</tr>
<tr>
<td>vlink</td>
<td>coloca el color a las paginas visitadas a los enlaces el uso es obsoleto al favor de la pseudo clase :visited</td>
</tr>
</tbody>
</table>
<blockquote>
<p>solo puede contener todos los elementos visuales también el uso de la etiqueta script y las etiquetas personalizadas de los webcompoents.</p>
</blockquote>
<h2 id="comentarios" tabindex="-1"><a class="header-anchor" href="#comentarios" aria-hidden="true">#</a> comentarios</h2>
<p>estas etiquetas no se muestra en las paginas web son utilizadas como guías para los desarrolladores.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- ejemplo de comentario --></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
