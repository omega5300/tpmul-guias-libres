<template><h1 id="etiquetas-especiales-en-html" tabindex="-1"><a class="header-anchor" href="#etiquetas-especiales-en-html" aria-hidden="true">#</a> etiquetas especiales en HTML</h1>
<p>son etiquetas para usar de texto formateados y/o otros propósitos su uso son especiales para ciertos sitios pero son vitales para ciertos casos</p>
<h2 id="etiqueta-pre" tabindex="-1"><a class="header-anchor" href="#etiqueta-pre" aria-hidden="true">#</a> etiqueta pre</h2>
<p>esta etiqueta representa el texto pre formateado es un elemento de bloque útil si es para muestra de guiones de cine o licencias de software libre o código abierto</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="etiqueta-code" tabindex="-1"><a class="header-anchor" href="#etiqueta-code" aria-hidden="true">#</a> etiqueta code</h2>
<p>esta etiqueta en función semántica es para mostrar ejemplo de código pero es recomendable usaron dentro de la etiqueta pre en caso que uses ejemplos de HTML debido que si no tienes la etiqueta pre dentro lo interpreta como elementos HTML</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>selectAll()<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="etiqueta-noscript" tabindex="-1"><a class="header-anchor" href="#etiqueta-noscript" aria-hidden="true">#</a> etiqueta noscript</h2>
<p>esta etiqueta es especial es utilizado si el navegador no soportar ciertas versiones de JavaScript o el JavaScript esta desactivado no es compatible con XHTML.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- anchor linking to external file --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.mozilla.com/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>External Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>es una buena para avisar que ciertas características de la pagina web no esté compatible o el navegador este desactivado el JavaScript</p>
</blockquote>
<h2 id="etiqueta-samp" tabindex="-1"><a class="header-anchor" href="#etiqueta-samp" aria-hidden="true">#</a> etiqueta samp</h2>
<p>esta etiqueta funciona de igual que la etiqueta pre cuya diferencia que es un elemento de linea representa una salida similar a la fuentes de notepad (bloc de notas) en Windows</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>samp</span><span class="token punctuation">></span></span>Keyboard not found <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>Press F1 to continue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>samp</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
