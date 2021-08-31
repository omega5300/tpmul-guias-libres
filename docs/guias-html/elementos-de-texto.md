# etiquetas de texto
son etiquetas de linea que son complementarios a la etiqueta p estas etiquetas debe estar adentro de un elemento de bloque como div y p pero su uso no es por fuera de los elementos de bloque,

en ocasiones muchos desarrolladores usar los elementos de linea por fuera de los elementos de bloque como si fuera de linea

----------
*si quieres que un elemento de linea se comporte como elemento de bloque se debe utilizar CSS*.

## etiqueta br

esta etiqueta es para dar saltos de linea solo si estas utilizando una etiqueta p o si estas empleado 

```html
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
    Obcaecati quod qui enim repellendus nihil voluptatem incidunt
    soluta aspernatur, officiis ex perspiciatis, maxime odit autem <br>
    sint sapiente consectetur quos. Facilis, repudiandae!
</p>
```

## etiqueta wbr

esta etiqueta es similar a br con la diferencia que dar saltos de linea por palabras o también se conoce como saltos de linea oportunos.

```html
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<wbr>
    Obcaecati quod qui enim repellendus nihil voluptatem incidunt
    soluta aspernatur, officiis ex perspiciatis, maxime odit autem <wbr>
    sint sapiente consectetur quos. Facilis, repudiandae!
</p>
```
## etiqueta b

esta etiqueta representa para uso de llamado de atención como una negrita pero no es una negrita

```html
<b class="keywords">text-level</b>
```

## etiqueta strong

esta etiqueta es muy similar a la etiqueta b pero la diferencia radical que es mas para uso semántico ya que es una etiqueta de elemento importante.

es decir que tiene un valor mas importante para seo del sitio web y para resultar elementos importantes de un párrafo.

```html
<strong class="keywords">text-level</strong>
```

## etiqueta i

esta etiqueta representa el uso idiomático de un texto lo considera como cursiva pero no es una cursiva pura pero también es usado por las bibliotecas de iconos como font-awesome o los material iconos de Google.

```html
<i>Veni, vidi, vici</i>
```

## etiqueta em

esta etiqueta se representa mas como un elemento de énfasis eso quiere decir en nivel semántico es un etiqueta para resalta las énfasis de un párrafo de todo el documento como palabras o frase de alta prioridad

```html
<em>Veni, vidi, vici</em>
```

## etiqueta u

esta etiqueta representa para las anotaciones no articulas o subrayadas

```html
<u>speling</u>
```

## etiqueta s

esta etiqueta representa el subrayado como indica es mas que todo para representa un elemento no relevante.

```html
<s>Today's Special: Salmon</s> SOLD OUT
```

## etiquetas de resaltado de texto

estas etiquetas para uso semántico es resaltar los importante de un párrafo.

### etiqueta del

esta etiqueta cuyo es para cambios de una referencia de derechos de autor como si fuera un control de versiones.

```html
<del>This text has been deleted</del>
```

### etiqueta ins 

esta etiqueta es similar a la etiqueta u pero cuya diferencia es que en función semántica es el insertado de referencias.

```html
<ins>This text has been inserted</ins>
```

#### atributos de las etiquetas ins y del

| Atributos | Descripción |
| ----------- | ----------- |
| cite | este atributo es para colocar la URL donde se conseguido la nueva referencia |
| datetime | este atributo es para colocar la hora y fecha donde de modifico la referencia |

### etiqueta mark

esta etiqueta en función semántica es para resaltar partes importantes del párrafo de la pagina web es usado mas que todo en sitios web de concepto de investigación.

```html
<mark class="match">Imperial</mark>
```

## etiqueta q
esta etiqueta es parecido al blockqoute pero como elemento de linea es mas usando para frase cortas referente al sitios informativos.

```html
<q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q>
```

| Atributos | Descripción |
| ----------- | ----------- |
| cite | es similar a blockquote sirve para colocar la URL de referencia |

## etiqueta small

esta etiqueta cuya función sirve para el uso de letras pequeñas en textos legales y licencias de derechos de autor.

```html
<small>This whole sentence is in small letters.</small>
```

## etiquetas de script de texto

estas etiquetas son para uso alineación vertical con base a las formulas o también para notas de referencia.

### etiqueta sub

esta etiqueta cuya función sirve para la representación de sub-script usando comúnmente para formulas químicas o en las notas en sitios como Wikipedia.	

```html
<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>
```

### etiqueta sup

esta etiqueta cuya función sirve para la representación de suscriptor usando comúnmente para formulas matemáticas o también en las notas en sitios como Wikipedia.

```html
<p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>
```

## elementos de tipografía asiática 

estas que son ruby, rp y rt son para interpretar palabras de los países asiáticos como ejemplo japón.

```html
<ruby>
漢 <rp>(</rp><rt>kan</rt><rp>)</rp>
字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

## elementos de texto bidireccional

estas son etiquetas para el uso de idiomas no asiáticos como países de medio oriente ejemplo Egipto estas son:

### bdi: texto de isolacion bidireccional

esta etiqueta no posee el atributo dir y es para uso de persona con vista de izquierda a derecha pero se modifica con CSS.

```html
<bdi>اَلأَعْشَى</bdi>
```

### bdo: texto de anulación bidireccional

esta etiqueta es mas util que la bdi es usanda para accesibilidad de vision sin el uso de css es usando para paginas web que manejar con vista de derecha a izquierda también para el uso contrario.

```html
<bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
```

| Atributos | Descripción |
| ----------- | ----------- |
| dir | este atributo es para colocar la visibilidad del usuario acorde a su vista |

## etiqueta kbd

esta etiqueta tiene como propósito resalta las teclas de teclado.

```html
<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
```

## etiqueta var

esta etiqueta se usar representa variables matemáticas también esta relacionado con la etiqueta sup.

```html
<p>
   The variables <var>minSpeed</var> and <var>maxSpeed</var> control
   the minimum and maximum speed of the apparatus in revolutions
   per minute (RPM).
</p>
```