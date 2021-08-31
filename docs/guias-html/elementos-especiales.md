# etiquetas especiales en HTML

son etiquetas para usar de texto formateados y/o otros propósitos su uso son especiales para ciertos sitios pero son vitales para ciertos casos

## etiqueta pre

esta etiqueta representa el texto pre formateado es un elemento de bloque útil si es para muestra de guiones de cine o licencias de software libre o código abierto

```html
<pre>
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
</pre>
```

## etiqueta code

esta etiqueta en función semántica es para mostrar ejemplo de código pero es recomendable usaron dentro de la etiqueta pre en caso que uses ejemplos de HTML debido que si no tienes la etiqueta pre dentro lo interpreta como elementos HTML

```html
<pre>
 <code>selectAll()</code>
</pre>
```

## etiqueta noscript

esta etiqueta es especial es utilizado si el navegador no soportar ciertas versiones de JavaScript o el JavaScript esta desactivado no es compatible con XHTML.

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="https://www.mozilla.com/">External Link</a>
</noscript>
```

> es una buena para avisar que ciertas características de la pagina web no esté compatible o el navegador este desactivado el JavaScript

## etiqueta samp

esta etiqueta funciona de igual que la etiqueta pre cuya diferencia que es un elemento de linea representa una salida similar a la fuentes de notepad (bloc de notas) en Windows

```html
<p><samp>Keyboard not found <br>Press F1 to continue</samp></p>
```