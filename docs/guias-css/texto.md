# propiedades de texto

en CSS nos encontramos con muchas propiedades algunas de las mas comunes especiales como son los modos de escritura y las fuentes nos sirve de mucha ayuda para dar ciertos estilos a nuestra pagina entre estas se encuetra.

## hanging-punctuation

La propiedad CSS especifica si un signo de puntuación debe colgar al principio o al final de una línea de texto. La puntuación colgante se puede colocar fuera del recuadro de línea.

``` css
/* Keyword values */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: force-end;
hanging-punctuation: allow-end;

/* Two keywords */
hanging-punctuation: first force-end;
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last force-end;
hanging-punctuation: last allow-end;

/* Three keywords */
hanging-punctuation: first force-end last;
hanging-punctuation: first allow-end last;
```

## hyphens

La propiedad CSS especifica cómo deben dividirse las palabras cuando el texto se ajusta a varias líneas. Puede evitar la división por guiones por completo, dividir en puntos especificados manualmente dentro del texto o permitir que el navegador inserte guiones automáticamente cuando corresponda.

``` css
/* Keyword values */
hyphens: none;
hyphens: manual;
hyphens: auto;
```

## writing-mode

la propiedad *writing-mode* nos permite cambiar de un modo de escritura a otro. no require trabaja en un idioma en especifico se puede establecer tanto vertical como horizontal

### valores

| valor | descripcion |
| ----------- | ----------- |
| horizontal-tb | el contenido fluye horizontalmente de izquierda a derecha. Para los rtlscripts, el contenido fluye horizontalmente de derecha a izquierda. La siguiente línea horizontal se coloca debajo de la línea anterior. |
| vertical-rl | el contenido fluye verticalmente de arriba hacia abajo y la siguiente línea vertical se coloca a la izquierda de la línea anterior. Para los rtlscripts, el contenido fluye verticalmente de abajo hacia arriba y la siguiente línea vertical se coloca a la derecha de la línea anterior. |
| vertical-lr | el contenido fluye verticalmente de arriba a abajo y la siguiente línea vertical se coloca a la derecha de la línea anterior. Para los rtlscripts, el contenido fluye verticalmente de abajo hacia arriba y la siguiente línea vertical se coloca a la izquierda de la línea anterior. |

``` css
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;
```

## inline-size

esta define el tamaño horizontal o vertical del bloque de un elemento, dependiendo de su modo de escritura.

Si el modo de escritura está orientado verticalmente, el valor de se inline-size relaciona con la altura del elemento; de lo contrario, se relaciona con el ancho del elemento. Una propiedad relacionada es block-size, que define la otra dimensión del elemento.

``` css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

## block-size

esta propiedad CSS define el tamaño horizontal o vertical del bloque de un elemento, dependiendo de su modo de escritura. Corresponde a la propiedad o la propiedad, dependiendo del valor de .block-size widthheightwriting-mode

Si el modo de escritura está orientado verticalmente, el valor de se block-sizerelaciona con el ancho del elemento; de lo contrario, se relaciona con la altura del elemento. Una propiedad relacionada es inline-size, que define la otra dimensión del elemento.

``` css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

## text-transform
esta propiedad nos permite configurar la fuente que se transforme en los siguientes valores:
 
- none: Evita cualquier transformación.
- uppercase: Transforma TODO EL TEXTO EN MAYÚSCULAS.
- lowercase: Transforma todo el texto a minúsculas.
- capitalize: Transforma todas las palabras para que La Primera Letra Esté En Mayúscula.
- full-width: Transforma todos los glifos para que se escriban dentro de un cuadrado de ancho fijo , similar a una fuente monoespaciada, lo que permite alinear, por ejemplo, caracteres latinos junto con glifos de idiomas asiáticos (como chino, japonés, coreano).

``` css
text-transform: capitalize;
```

## text-decoration

Establece / desarma las decoraciones de texto en las fuentes (lo usará principalmente para desarmar el subrayado predeterminado en los enlaces al aplicarles estilo). Los valores disponibles son:

- none: Elimina las decoraciones de texto que ya están presentes.
- underline: Subraya el texto.
- overline: Le da al texto una línea superior.
- line-through: Tacha el texto.

``` css
text-decoration: underline;
```

## text-shadow

esta propiedad CSS agrega sombras al texto. Acepta una lista de sombras separadas por comas que se aplicarán al texto y a cualquiera de sus decorations. Cada sombra se describe mediante una combinación de compensaciones X e Y del elemento, el radio de desenfoque y el color.

``` css
text-shadow: #FC0 1px 0 10px;
```

## text-align

propiedad se utiliza para controlar cómo se alinea el texto dentro de su cuadro de contenido. Los valores disponibles se enumeran a continuación. Funcionan prácticamente de la misma manera que lo hacen en una aplicación de procesador de texto normal:

- left (por defecto): Justifica el texto a la izquierda.
- right: Justifica el texto a la derecha.
- center: Centra el texto.
- justify: Hace que el texto se extienda, variando los espacios entre las palabras para que todas las líneas de texto tengan el mismo ancho.

``` css
text-align: center;
```

## text-indent

La propiedad CSS establece la longitud del espacio vacío (sangría) que se coloca antes de las líneas de texto en un bloque.

``` css
/* <length> values */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> value
   relative to the containing block width */
text-indent: 15%;

/* Keyword values */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;
```

## text-justify

La propiedad CSS establece qué tipo de justificación se debe aplicar al texto cuando text-align: justify; se establece en un elemento.

``` css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* Deprecated value */
```

## text-size-adjust

esta propiedad es experimental permite controlar el algoritmo de inflación de texto utilizado en algunos teléfonos inteligentes y tabletas. Otros navegadores ignorarán esta propiedad.

``` css
/* Keyword values */
text-size-adjust: none;
text-size-adjust: auto;

/* <percentage> value */
text-size-adjust: 80%;
```

## line-height

propiedad establece la altura de cada línea de texto. Esta propiedad no solo puede tomar la mayoría de las unidades de longitud y tamaño , sino que también puede tomar un valor sin unidades, que actúa como un multiplicador y generalmente se considera la mejor opción.

``` css
line-height: 1.6;
```

## letter-spacing y word-spacing

Las propiedades letter-spacingy le word-spacingpermiten establecer el espacio entre letras y palabras en su texto. No los usará con mucha frecuencia, pero puede encontrarles un uso para obtener un aspecto específico o para mejorar la legibilidad de una fuente particularmente densa. Pueden tomar la mayoría de unidades de longitud y tamaño.

``` css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

## line-break

La propiedad CSS establece cómo dividir líneas de texto en chino, japonés o coreano (CJK) cuando se trabaja con signos de puntuación y símbolos.

``` css
/* Keyword values */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;
line-break: anywhere;
```

## overflow-wrap

La propiedad CSS se aplica a los elementos en línea, estableciendo si el navegador debe insertar saltos de línea dentro de una cadena que de otro modo sería irrompible para evitar que el texto se desborde en su cuadro de línea.

``` css
/* Keyword values */
overflow-wrap: normal;
overflow-wrap: break-word;
overflow-wrap: anywhere;
```

## tab-size

La propiedad CSS se utiliza para personalizar el ancho de los caracteres de tabulación (U + 0009).

``` css
/* <integer> values */
tab-size: 4;
tab-size: 0;

/* <length> values */
tab-size: 10px;
tab-size: 2em;
```

## fuentes

las fuentes son otro de los elementos mas esenciales en CSS para cambiar el estilo de letras o dar otro apescto como texto en cursivo en estas propiedades tenemos:

### font-family

esta propiedad CSS especifica una lista priorizada de uno o más nombres de familias de fuentes y / o nombres de familias genéricos para el elemento seleccionado.

siempre hay que tener un fallback una fuente de respaldo recomendable las fuentes de sistema operativo como fallback separado por comas

``` css
font-family: "Gill Sans", sans-serif;
```

fuentes para fallback

- sans-serif
  - Arial
  - Trebuchet MS
  - Verdana
- monospace
  - Courier New
- serif
  - Times New Roman
  - Georgia
  
### font-size

esta propiedad especificar el tamaño que va adquirir la pagina web

``` css
font-size: 2em;
```

### font-style

Se utiliza para activar o desactivar el texto en cursiva. Los valores posibles son los siguientes (rara vez usará esto, a menos que desee desactivar algunos estilos de cursiva por alguna razón):

- normal: stablece el texto en la fuente normal.
- italic: Establece que el texto utilice la versión en cursiva de la fuente , si está disponible; si no, simulará cursiva con oblicua en su lugar.
- Establece que el texto utilice una versión simulada de una fuente en cursiva, creada inclinando la versión normal.

``` css
font-style: oblique;
```

### font-weight

Establece el grado de negrita del texto. Esto tiene muchos valores disponibles en caso de que tenga muchas variantes disponibles de fuentes (como -luz , -normal , -Bold , -extrabold , -negro , etc.), pero siendo realistas Rara vez se utiliza cualquiera de ellos a excepción de normaly bold:
- normal || bold: Peso de fuente normal y negrita
- lighter || bolder: Establece la negrita del elemento actual para que sea un paso más ligera o más pesada que la negrita de su elemento principal.
- 100 -900: Valores numéricos de negrita que proporcionan un control más detallado que las palabras clave anteriores, si es necesario.

``` css
font-weight: 500;
```