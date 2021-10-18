# elementos de SVG

en svg se puede graficos si usar programas como inkscape o ilustrator por ejemplo hay muchos elementos de svg que son los siguientes.

## a

funciona exactamente igual a la etiqueta a en HTML sirve para colocar link dentro de nuestro grafico vectorial

``` html
<a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35"/>
</a>
```

> no es necesario decir sus atributos debido que lo mismo en la etiqueta a en HTML

## animate

este elemento si para realizar animaciones

```html
<animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite" />
```

- animation timing atributes
  - begin
  - dur
  - end
  - min
  - max
  - restart
  - repeatCount
  - repeatDur
  - fill
- animation value attributes
  - calcMode
  - values
  - keyTimes
  - keySplines
  - from
  - to
  - by
- other animation attributes
  - attributeName
  - additive
  - accumulate
- animation event attributes
  - onbegin
  - onend
  - onrepeat

## animationMotion

elemento SVG proporciona una forma de definir cómo se mueve un elemento a lo largo de una trayectoria de movimiento.

``` html
<animateMotion dur="10s" repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
```

### atributos

- keypoints: This attribute indicate, in the range [0,1], how far is the object along the path for each keyTimes associated values. Value type: number; Default value: none; Animatable: no
- path: Este atributo define la ruta del movimiento, utilizando la misma sintaxis que el datributo. Tipo de valor: String; Default value: none; Animatable: no
- rotate: Este atributo define una rotación aplicada al elemento animado a lo largo de una ruta, generalmente para que apunte en la dirección de la animación. Tipo de valor: Number | auto| auto-reverse; Default value: 0; Animatable: no

## animateTransform

anima un atributo de transformación en su elemento de destino, lo que permite que las animaciones controlen la traducción, el escalado, la rotación y / o el sesgo.

``` html
<animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
```

> comparte algunos atributos de animate

## circle

es una forma básica SVG , que se utiliza para dibujar círculos basados ​​en un punto central y un radio.

``` html
<circle cx="50" cy="50" r="50"/>
```

### atributos

- cx: La coordenada del eje x del centro del círculo.
- cy: La coordenada del eje y del centro del círculo.
- r: El radio del círculo. Un valor menor o igual a cero inhabilita la representación del círculo.
- pathLength: La longitud total de la circunferencia del círculo, en unidades de usuario.

## clipPath

define un trazado de recorte, que será utilizado por la propiedad.

``` html
<clipPath id="myClip">
    <circle cx="40" cy="35" r="35" />
</clipPath>
```

### atributos

clipPathUnits
: Define el sistema de coordenadas para el contenido del clipPath elemento.

## defs

se utiliza para almacenar objetos gráficos que se utilizarán más adelante. Los objetos creados dentro de un defs elemento no se renderizan directamente. Para mostrarlos, debe hacer referencia a ellos (con un use elemento, por ejemplo).

``` html
<defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
</defs>
```

## desc

proporciona una descripción de texto extenso accesible de cualquier elemento contenedor o elemento gráfico de SVG.

``` html
<desc>
  I'm a circle and that description is here to
  demonstrate how I can be described, but is it
  really necessary to describe a simple circle
  like me?
</desc>
```

## elipse

se utiliza para crear elipses en función de una coordenada central y sus radios x e y.

``` html
<ellipse cx="100" cy="50" rx="100" ry="50" />
```

### atributos

- cx: La posición x de la elipse.
- cy: La posición y de la elipse.
- rx: El radio de la elipse en el eje x.
- ry: El radio de la elipse en el eje x.
- pathLength: Este atributo permite especificar la longitud total de la ruta, en unidades de usuario.

## feBlend

filtro primitivo de SVG compone dos objetos juntos regidos por un cierto modo de fusión. Esto es similar a lo que se conoce del software de edición de imágenes cuando se combinan dos capas. El modo está definido por el atributo mode

``` html
<feBlend in="SourceGraphic" in2="floodFill" mode="multiply"/>
```

### atrinuttos

- in
- in2
- mode

## feColorMatrix

filtro SVG cambia de color según una matriz de transformación. El valor de color de cada píxel [R,G,B,A]esmatriz multiplicadapor una matriz de color de 5 por 5 para crear un nuevo color [R',G',B',A'].

``` html
<feColorMatrix in="SourceGraphic"
        type="luminanceToAlpha" />
```

### atributos

- in
- type
- values

## feComponentTransfer

filtro SVG realiza la reasignación de datos por componentes de color para cada píxel. Permite operaciones como ajuste de brillo, ajuste de contraste, balance de color o umbralización.

``` html
<feComponentTransfer>
  <feFuncR type="identity"></feFuncR>
  <feFuncG type="identity"></feFuncG>
  <feFuncB type="identity"></feFuncB>
  <feFuncA type="identity"></feFuncA>
</feComponentTransfer>
```

> el unico atributo es in

## feComposite

filtro realiza primitivas la combinación de dos imágenes de entrada de píxel en el espacio de imagen utilizando una de las operaciones de composición Porter-Duff: , , , , , , o .

``` html
<feComposite in2="SourceGraphic" operator="over"/>
```

### atributos

- in: Primera entrada para la primitiva de filtro dada.
- in2: Segunda entrada para la primitiva de filtro dada (funciona igual que el inatributo).
- operator: over| in| out| atop| xor| lighter|arithmetic
- k1, k2, k3, k4: Los valores utilizados para calcular el resultado de píxeles en arithmetic operatorlas primitivas de filtro.

## feConvolveMatrix

aplica un efecto de filtro de convolución de matriz. Una convolución combina píxeles en la imagen de entrada con píxeles vecinos para producir una imagen resultante. Se puede lograr una amplia variedad de operaciones de imágenes a través de convoluciones, que incluyen desenfoque, detección de bordes, nitidez, relieve y biselado.

``` html
<feConvolveMatrix
  kernelMatrix="3 0 0
     0 0 0
     0 0 -3"/>
```

### atributos

- in
- order
- kernelMatrix
- divisor
- bias
- targetX
- targetY
- edgeMode
- kernelUnitLength
- preserveAlpha

## feDiffuseLighting

filtro SVG ilumina una imagen utilizando el canal alfa como mapa de relieve. La imagen resultante, que es una imagen opaca RGBA, depende del color de la luz, la posición de la luz y la geometría de la superficie del mapa de relieve de entrada.

``` html
<feDiffuseLighting in="SourceGraphic" result="light"
        lighting-color="white">
      <fePointLight x="150" y="60" z="20" />
</feDiffuseLighting>
```

### atributos

- in
- surfaceScale
- diffuseConstant
- kernelUnitLength

## feDisplacementMap

filtro SVG utiliza los valores de píxeles de la imagen desde para desplazar espacialmente la imagen.

``` html
<feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
```

### atributos

- in
- in2
- scale
- xChannelSelector
- yChannelSelector

## feDistantLight

primitiva de filtro define una fuente de luz distante que se puede utilizar dentro de una primitiva de filtro de iluminación: feDiffuseLighting o feSpecularLighting.

### atributos

- azimuth
- elevation

## feFlood

primitiva del filtro SVG llena la subregión del filtro con el color y la opacidad definidos por flood-colory flood-opacity.

``` html
<feFlood x="50" y="50" width="100" height="100"
          flood-color="green" flood-opacity="0.5"/>
```

### atributos

- flood-color
- flood-opacity

## feFunc

estos elementos representa de acuerdo a la ultima letra

- feFuncA: el canal alfa/alpha (transparencia)
- feFuncB: el canal blue (azul)
- feFuncG: el canal green (verde) 
- feFuncR: el canal red (rojo)

## feGaussianBlur

La primitiva del filtro SVG difumina la imagen de entrada en la cantidad especificada en stdDeviation, que define la curva de campana.

``` html
<feGaussianBlur in="SourceGraphic" stdDeviation="5" />
```

### atributos

- in
- stdDeviation
- edgeMode

## feImage

filtro SVG obtiene datos de imagen de una fuente externa y proporciona los datos de píxeles como salida (es decir, si la fuente externa es una imagen SVG, está rasterizada).

``` html
<feImage xlink:href="/files/6457/mdn_logo_only_color.png"/>
```

### atributos

- preserveAspectRatio
- xlink:href

## feMerge

elemento SVG permite que los efectos de filtro se apliquen simultáneamente en lugar de secuencialmente. Esto se logra mediante otros filtros que almacenan su salida a través del resultatributo y luego acceden a él en un feMergeNode niño.

``` html
<feMerge>
  <feMergeNode in="blur2" />
  <feMergeNode in="SourceGraphic" />
</feMerge>
```

## feMergeNode

El feMergeNodetoma el resultado de otro filtro para ser procesado por su matriz feMerge

``` html
<feMergeNode in="blur2" />
```

> el unico atributo es in

## feMorphology

La primitiva de filtro SVG se utiliza para erosionar o dilatar la imagen de entrada. Su utilidad radica especialmente en efectos de engorde o adelgazamiento.

``` html
<feMorphology operator="dilate" radius="2"/>
```

### atributos

- in
- operator
- radius

## feOffset

filtro SVG permite compensar la imagen de entrada. La imagen de entrada en su conjunto está compensada por los valores especificados en los atributos dxy dy.

``` html
<feOffset in="SourceGraphic" dx="60" dy="60" />
```

### atributos

- in
- dx
- dy

## fePointLight

define una fuente de luz que permite crear un efecto de luz puntual. Se puede utilizar dentro de una primitiva de filtro de iluminación: feDiffuseLighting o feSpecularLighting.

``` html
<fePointLight x="50" y="50" z="220"/>
```

### atributos

- x
- y
- z

## feSpecularLighting

enciende un gráfico de origen utilizando el canal alfa como mapa de relieve. La imagen resultante es una imagen RGBA basada en el color de la luz. El cálculo de la iluminación sigue el componente especular estándar de feSpecularLighting el modelo de iluminación Phong. La imagen resultante depende del color de la luz, la posición de la luz y la geometría de la superficie del mapa de relieve de entrada. Se suma el resultado del cálculo de iluminación. La primitiva de filtro asume que el espectador está en el infinito en la dirección z.

``` html
<feSpecularLighting result="specOut"
        specularExponent="20" lighting-color="#bbbbbb">
  <fePointLight x="50" y="75" z="200"/>
</feSpecularLighting>
```

### atributos

- in
- surfaceScale
- specularConstant
- specularExponent
- kernelUnitLength

## feSpotLight

define una fuente de luz que permite crear un efecto de foco. Se puede utilizar dentro de una primitiva de filtro de iluminación.

``` html
<feSpotLight x="600" y="600" z="400" limitingConeAngle="5.5" />
```

### atributos

- x
- y
- z
- pointsAtX
- pointsAtY
- pointsAtZ
- specularExponent
- limitingConeAngle

## feTile

permite rellenar un rectángulo de destino con un patrón repetido en mosaico de una imagen de entrada.

``` html
<feTile in="SourceGraphic" x="50" y="50"
          width="100" height="100" />
<feTile/>
```

> el unico atributo es in

## feTurbulence

crea una imagen usando el feTurbulence Función de turbulencia de Perlin. Permite la síntesis de texturas artificiales como nubes o mármol. La imagen resultante llenará toda la subregión primitiva del filtro.

``` html
<feTurbulence type="turbulence" baseFrequency="0.05"
        numOctaves="2" result="turbulence"/>
```

### atributos

- baseFrequency
- numOctaves
- seed
- stitchTiles
- type

## filter

define un efecto de filtro personalizado agrupando primitivas de filtro atómico. Nunca se representa por sí mismo, pero debe ser utilizado por el atributo en elementos SVG o la propiedad CSS para elementos SVG / HTML.

``` html
<filter id="blurMe">
  <feGaussianBlur stdDeviation="5"/>
</filter>
```

### atributos

- x
- y
- width
- height
- filterRes
- filterUnits
- primitiveUnits
- xlink:href

## foreignObject

incluye elementos de un espacio de nombres XML diferente. En el contexto de un navegador, lo más probable es que sea (X) HTML.

``` html
```

### atributos

- height: La altura del ForeignObject.
- width: El ancho del ForeignObject.
- x: coordenada x del ForeignObject.
- y: coordenada y del ForeignObject.

## g

es un contenedor que se utiliza para agrupar otros elementos SVG.

Las transformaciones aplicadas al g element se realizan en sus elementos secundarios y sus atributos son heredados por sus elementos secundarios. También puede agrupar varios elementos para referenciarlos posteriormente con el use element.

``` html
<g fill="white" stroke="green" stroke-width="5">
  <circle cx="40" cy="40" r="25" />
  <circle cx="60" cy="60" r="25" />
</g>
```

## image

incluye imágenes dentro de documentos SVG. Puede mostrar archivos de imágenes rasterizadas u otros archivos SVG.

Los únicos formatos de imagen que debe admitir el software SVG son JPEG , PNG y otros archivos SVG. El comportamiento del GIF animado no está definido.

``` html
<image href="mdn_logo_only_color.png" height="200" width="200"/>
```

### atributos

- x: Coloca la imagen horizontalmente desde el origen.
- y: Coloca la imagen verticalmente desde el origen.
- width: El ancho en el que se renderiza la imagen. A diferencia de HTML img, este atributo es obligatorio.
-height: La altura a la que se representa la imagen. A diferencia de HTML img, este atributo es obligatorio.
- href y xlink:href: apunta a una URL para el archivo de imagen.
- preserveAspectRatio: Controla cómo se escala la imagen.
- crossorigin: Define el valor de la marca de credenciales para solicitudes CORS.

## line

elemento es una forma básica SVG que se utiliza para crear una línea que conecta dos puntos.

``` html
<line x1="0" y1="80" x2="100" y2="20" stroke="black" />
```

### atributos

- x1: Define la coordenada del eje x del punto inicial de la línea.

- x2: Define la coordenada del eje x del punto final de la línea.

- y1: Define la coordenada del eje y del punto inicial de la línea.

- y2: Define la coordenada del eje y del punto final de la línea.

- pathLength: Define la longitud total de la ruta en unidades de usuario.

## linearGradient

elemento permite a los autores definir gradientes lineales que se pueden aplicar para rellenar o trazar elementos gráficos.

``` html
<linearGradient id="myGradient" gradientTransform="rotate(90)">
  <stop offset="5%"  stop-color="gold" />
  <stop offset="95%" stop-color="red" />
</linearGradient>
```

### atributos

- gradientUnits: Este atributo define el sistema de coordenadas para los atributos x1, x2, y1, y2.
- gradientTransform: Este atributo proporciona una transformación adicional al sistema de coordenadas de degradado.
- href: Este atributo define una referencia a otro elemento linearGradient que se utilizará como plantilla.
- spreadMethod: Este atributo indica cómo se comporta el degradado si comienza o termina dentro de los límites de la forma que contiene el degradado.
- x1: Este atributo define la coordenada x del punto inicial del gradiente vectorial a lo largo del cual se dibuja el gradiente lineal.
- x2: Este atributo define la coordenada x del punto final del gradiente vectorial a lo largo del cual se dibuja el gradiente lineal.
- y1: Este atributo define la coordenada y del punto inicial del gradiente vectorial a lo largo del cual se dibuja el gradiente lineal.
- y2: Este atributo define la coordenada y del punto final del gradiente vectorial a lo largo del cual se dibuja el gradiente lineal.

## marker

elemento define el gráfico que se va a utilizar para la elaboración de puntas de flecha o polymarkers en un dado path, line, polyline o polygon.

``` html
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" />
</marker>
```

### atributos

- markerHeight
- markerUnits
- markerWidth
- orient
- preserveAspectRatio
- refX
- refY
- viewBox

## mask

elemento define una máscara alfa para componer el objeto actual en el fondo. Se hace referencia a una máscara usando la propiedad mask.

``` html
<mask id="myMask">
    <!-- Everything under a white pixel will be visible -->
    <rect x="0" y="0" width="100" height="100" fill="white" />

    <!-- Everything under a black pixel will be invisible -->
    <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="black" />
</mask>
```

### atributos

- height
- width
- maskCountentUnits
- maskUnits
- x
- y

## metadata

agrega metadatos al contenido SVG. Los metadatos son información estructurada sobre datos.

``` html
<metadata>
    <rdf:Description about="#CableA">
      <connect:ends rdf:resource="#socket1"/>
      <connect:ends rdf:resource="#ComputerA"/>
    </rdf:Description>
</metadata>
```

## mpath

subelemento del animateMotion elemento proporciona la capacidad de hacer referencia a un path elemento externo como la definición de una trayectoria de movimiento.

``` html
<mpath xlink:href="#path1"/>
```

> el unico atributo es xlink:href

## path

elemento genérico para definir una forma. Todas las formas básicas se pueden crear con un elemento de ruta.

``` html
<path d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z"/>
```

### atributos

- d
- pathLength

## pattern

define un objeto gráfico que se puede volver a dibujar en intervalos repetidos de coordenadas x e y ("en mosaico") para cubrir un área.

``` html
<pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
  <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/>
</pattern>
```

### atributos

- height: Este atributo determina la altura del mosaico de patrón.

- href: Este atributo hace referencia a un patrón de plantilla que proporciona valores predeterminados para los atributos.

- patternContentUnits: Este atributo define el sistema de coordenadas para el contenido del pattern.

- patternTransform: Este atributo contiene la definición de una transformación adicional opcional del sistema de coordenadas del patrón al sistema de coordenadas de destino.

- patternUnits: Este atributo define el sistema de coordenadas para los atributos x, y, width , y height.

- preserveAspectRatio: Este atributo define cómo se debe deformar el fragmento SVG si está incrustado en un contenedor con una relación de aspecto diferente.

- viewBox: Este atributo define el límite de la ventana gráfica SVG para el fragmento de patrón.

- width: Este atributo determina el ancho del mosaico del patrón.

- x: Este atributo determina el desplazamiento de la coordenada x del mosaico del patrón.

- y: Este atributo determina el desplazamiento de la coordenada y del mosaico del patrón.

## polygon

elemento define una forma cerrada que consta de un conjunto de segmentos de línea recta conectados. El último punto está conectado con el primer punto.

``` html
<polygon points="0,100 50,25 50,75 100,0" />
```

### atributos

- points: Este atributo define la lista de puntos (pares de x,ycoordenadas absolutas) necesarios para dibujar el polígono. 

- pathLength: Este atributo permite especificar la longitud total de la ruta, en unidades de usuario.

## polyline

forma básica de SVG que crea líneas rectas que conectan varios puntos. Normalmente, se utiliza para crear formas abiertas, ya que el último punto no tiene que estar conectado al primer punto.

``` html
<polyline points="0,100 50,25 50,75 100,0" />
```

> son los mismos atributos de polygon

## radialGradient

permite a los autores definir degradados radiales que se pueden aplicar para rellenar o trazar elementos gráficos.

``` html
<radialGradient id="myGradient">
    <stop offset="10%" stop-color="gold" />
    <stop offset="95%" stop-color="red" />
</radialGradient>
```

### atributos

- cx: Este atributo define la coordenada x del círculo final del degradado radial.

- cy: Este atributo define la coordenada y del círculo final del degradado radial.

- fr: Este atributo define el radio del círculo inicial del degradado radial. El gradiente se dibujará de manera que el 0% stop se asigne al perímetro del círculo de inicio.

- fx: Este atributo define la coordenada x del círculo inicial del degradado radial.

- fy: Este atributo define la coordenada y del círculo inicial del degradado radial.

- gradientUnits: Este atributo define el sistema de coordenadas para los atributos cx, cy, r, fx, fy, fr

- gradientTransform: Este atributo proporciona una transformación adicional al sistema de coordenadas de degradado.

- href: Este atributo define una referencia a otro elemento radialGradient que se utilizará como plantilla.

- r: Este atributo define el radio del círculo final del degradado radial. El gradiente se dibujará de manera que el 100% stop se asigne al perímetro del círculo final.

- spreadMethod: Este atributo indica cómo se comporta el degradado si comienza o termina dentro de los límites de la forma que contiene el degradado.

## rect

 forma SVG básica que dibuja rectángulos, definidos por su posición, ancho y alto. Los rectángulos pueden tener sus esquinas redondeadas.

``` html
<rect x="120" width="100" height="100" rx="15" />
```

### atributos

- x
- y
- width
- height
- rx
- ry
- pathLength

## script

es parecido al HTML con diferencias en los atributos

``` html
<script>
// <![CDATA[
window.addEventListener('DOMContentLoaded', () => {
  function getColor () {
    const R = Math.round(Math.random() * 255).toString(16).padStart(2,'0')
    const G = Math.round(Math.random() * 255).toString(16).padStart(2,'0')
    const B = Math.round(Math.random() * 255).toString(16).padStart(2,'0')
    return `#${R}${G}${B}`
  }

  document.querySelector('circle').addEventListener('click', (e) => {
    e.target.style.fill = getColor()
  })
})
// ]]>
</script>
```

### atributos

- crossorigin
- href
- type

## set

proporciona un medio simple de simplemente establecer el valor de un atributo para una duración específica.

Admite todos los tipos de atributos, incluidos aquellos que no se pueden interpolar razonablemente, como cadenas y valores booleanos.

``` html
<set attributeName="class" to="round" begin="me.click" dur="2s" />
```

### atributos

- to

## stop

define un color y su posición para usar en un degradado.

``` html
<stop offset="5%"  stop-color="gold" />
```

### atributos

- offset
- stop-color
- stop-opacity

## style

parecido a HTML enfocado en SVG

``` html
<style>
circle {
   fill: gold;
   stroke: maroon;
   stroke-width: 2px;
}
</style>
```

> no es necesario decirlo debido que son los mismo en HTML

## svg

en el esqueleto y elemento principal que se compone nuestro grafico vectorial

``` html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
</svg>
```

### atributos

- height
- preserveAspectRatio
- viewBox
- width
- x
- y

## switch

evalúa cualquier atributo , y en sus elementos secundarios directos en orden, y luego representa el primer elemento secundario en el que estos atributos se evalúan como verdaderos.

``` html
<switch>
  <text systemLanguage="ar">مرحبا</text>
  <text systemLanguage="de,nl">Hallo!</text>
  <text>☺</text>
</switch>
```

## symbol

elemento se utiliza para definir objetos de plantilla gráfica que pueden ser instanciados por un elemento use.

El uso de symbol elementos para gráficos que se usan varias veces en el mismo documento agrega estructura y semántica. Los documentos que son ricos en estructura se pueden representar gráficamente, como voz o como Braille, y así promover la accesibilidad.

``` html
<symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
  <circle cx="1" cy="1" r="1" />
</symbol>
```

### atributos

- height
- preserveAspectRatio
- refX
- refy
- viewBox
- width
- x
- y

## text

dibuja un elemento gráfico que consta de texto. Es posible aplicar un degradado, patrón, trazado de recorte, máscara o filtro text, como cualquier otro elemento gráfico SVG.

``` html
<text x="20" y="35" class="small">My</text>
```

### atributos

- x
- y
- dx
- dy
- rotate
- lengthAdjust
- textLength

## textPath

Para representar texto con la forma de a path, encierre el texto en un elemento textPath que tenga un atributo href con una referencia al elemento path.

``` html
<textPath href="#MyPath">
  Quick brown fox jumps over the lazy dog.
</textPath>
```

### atributos

- href
- lengthAdjust
- method
- path
- side
- spacing
- startOffset
- textLength

## title

elemento proporciona una descripción de texto breve accesible de cualquier elemento contenedor SVG o elemento gráfico.

``` html
<title>I'm a square</title>
```

## tspan

elemento SVG define un subtexto dentro de un elemento text u otro tspan elemento. Permite ajustar el estilo y / o la posición de ese subtexto según sea necesario.

``` html
<text x="10" y="30" class="small">
  You are
  <tspan>not</tspan>
  a banana!
</text>
```

### atributos

- x
- y
- dx
- dy
- rotate
- lengthAdjust
- textLength

## use

toma nodos del documento SVG y los duplica en otro lugar.

``` html
<use href="#myCircle" x="10" fill="blue"/>
```

### atributos

- href
- x
- y
- width
- height

## view

Una vista es una forma definida de ver la imagen, como un nivel de zoom o una vista de detalle.

``` html
<view id="one" viewBox="0 0 100 100" />
```

### atributos

- viewBox
- preserveAspectRatio
- zoomAndPan
- viewTarget