<template><h1 id="elementos-de-scripting" tabindex="-1"><a class="header-anchor" href="#elementos-de-scripting" aria-hidden="true">#</a> elementos de scripting</h1>
<p>los elementos de scripting son etiquetas que utilizamos para usar otros lenguajes como CSS y JavaScript</p>
<h2 id="etiqueta-style" tabindex="-1"><a class="header-anchor" href="#etiqueta-style" aria-hidden="true">#</a> etiqueta style</h2>
<p>esta etiqueta cuya función es para utilizar el lenguaje CSS es decir podemos estilizar los estilos a nuestra pagina web mas info visita la guia de <RouterLink to="/guias-css/">CSS</RouterLink>.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>sirve para especificar el formato es opcional debido que por valor predeterminado es text/css</td>
</tr>
<tr>
<td>media</td>
<td>este atributo sirve para especificar el media query del estilo CSS</td>
</tr>
</tbody>
</table>
<blockquote>
<p>esta etiqueta solo la recomiendo si trabajas con un solo archivo HTML o si usas webcomponents no es recomendable si es igual o superior a dos archivos HTML se debe emplear el uso de la etiqueta link</p>
</blockquote>
<h2 id="etiqueta-script" tabindex="-1"><a class="header-anchor" href="#etiqueta-script" aria-hidden="true">#</a> etiqueta script</h2>
<p>esta etiqueta se utilizar para escribir JavaScript dentro de html o llamar archivo JavaScript mas info visite la guia de <RouterLink to="/guias-javascript/">javascript</RouterLink></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- llamado un archivo externo de javascript --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- escribiendo javascript --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>async</td>
<td>atributo booleano sirve para cargar el JavaScript de forma asíncrona</td>
</tr>
<tr>
<td>defer</td>
<td>atributo booleano sirve para retrasar la carga de JavaScript es decir el JavaScript se carga después de finalizar la carga del documento HTML</td>
</tr>
<tr>
<td>nomodule</td>
<td>es para indicar que este documento no puede ejecutar los es modules &quot;módulos de EcmaScript&quot; para indicar que esta pagina no es compatible con la versiones de es6+</td>
</tr>
<tr>
<td>src</td>
<td>sirve para traer la ruta del archivo JavaScript</td>
</tr>
<tr>
<td>type</td>
<td>antes es usando para el type text/javascript ahora se usar para el un nuevo valor module para traer los módulos de EcmaScript</td>
</tr>
<tr>
<td>language</td>
<td>sirve para traer otros lenguajes de programación ahora es un atributo desfasado</td>
</tr>
<tr>
<td>charset</td>
<td>sirve para asignar una codificación de caracteres actualmente es un atributo desfasado</td>
</tr>
</tbody>
</table>
<blockquote>
<p>es recomendable para el uso de JavaScript externo si trabajas con múltiples documentos HTML pero si es un solo documento HTML si es recomendable usarlo solo en casos muy concretos</p>
</blockquote>
</template>
