# animaciones

Las animaciones CSS permiten animar las transiciones de una configuración de estilo CSS a otra. Las animaciones constan de dos componentes, un estilo que describe la animación CSS y un conjunto de fotogramas clave que indican los estados de inicio y finalización del estilo de la animación, así como posibles puntos intermedios.

## ventajas de animaciones

Hay tres ventajas clave de las animaciones CSS sobre las técnicas de animación tradicionales basadas en secuencias de comandos:

. Son fáciles de usar para animaciones simples; puede crearlos sin siquiera tener que saber JavaScript.
. Las animaciones funcionan bien, incluso con una carga moderada del sistema. Las animaciones simples a menudo pueden funcionar mal en JavaScript. El motor de renderizado puede utilizar saltos de fotogramas y otras técnicas para mantener el rendimiento lo más fluido posible.
. Dejar que el navegador controle la secuencia de animación permite que el navegador optimice el rendimiento y la eficiencia, por ejemplo, reduciendo la frecuencia de actualización de las animaciones que se ejecutan en pestañas que no están visibles actualmente.

## animation

La propiedad CSS abreviada aplica una animación entre estilos. Es una abreviatura de animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.

``` css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes name | duration | easing-function | delay */
animation: slidein 3s linear 1s;

/* @keyframes name | duration */
animation: slidein 3s;
```

### animation-name

propiedad especifica los nombres de uno o más @keyframes at-rules que describen la animación o animaciones que se aplicarán al elemento.

``` css
/* Single animation */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* Multiple animations */
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;
```

### animation-duration

La propiedad establece el tiempo que tarda una animación en completar un ciclo.

``` css
/* Single animation */
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;
```

### animation-timing-function

La propiedad establece cómo progresa una animación a lo largo de la duración de cada ciclo.

``` css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Function values */
animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
animation-timing-function: steps(4, end);

/* Steps Function keywords */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* Multiple animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);
```

### animation-delay

La propiedad especifica la cantidad de tiempo que se debe esperar desde que se aplica la animación a un elemento antes de comenzar a realizar la animación. La animación puede comenzar más tarde, inmediatamente desde su inicio, o inmediatamente y a la mitad de la animación.

``` css
/* Single animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;
```

### animation-iteration-count

esta propiedad establece el número de veces que se debe reproducir una secuencia de animación antes de detenerse.

Si se especifican varios valores, cada vez que se reproduce la animación se usa el siguiente valor en la lista, volviendo al primer valor después de que se usa el último.

``` css
/* Keyword value */
animation-iteration-count: infinite;

/* <number> values */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* Multiple values */
animation-iteration-count: 2, 0, infinite;
```

### animation-direction

property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

``` css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;
```

### animation-fill-mode

La propiedad establece cómo una animación CSS aplica estilos a su destino antes y después de su ejecución.

``` css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```

### animation-play-state

La propiedad establece si una animación se está ejecutando o en pausa. La reanudación de una animación en pausa iniciará la animación desde donde se detuvo en el momento en que se pausó, en lugar de comenzar desde el principio de la secuencia de animación.

``` css
/* Single animation */
animation-play-state: running;
animation-play-state: paused;

/* Multiple animations */
animation-play-state: paused, running, running;
```
## transitions

Las transiciones CSS proporcionan una forma de controlar la velocidad de la animación al cambiar las propiedades de CSS. En lugar de que los cambios de propiedad entren en vigencia de inmediato, puede hacer que los cambios en una propiedad tengan lugar durante un período de tiempo. Por ejemplo, si cambia el color de un elemento de blanco a negro, normalmente el cambio es instantáneo. Con las transiciones CSS habilitadas, los cambios ocurren en intervalos de tiempo que siguen una curva de aceleración, todos los cuales se pueden personalizar.

se usar bajo la propiedad shorthand trasition.

``` css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | easing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | easing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;
```

### transition-property

esta propiedad establece las propiedades CSS a las que se debe aplicar un efecto de transición.

``` css
/* Keyword values */
transition-property: none;
transition-property: all;

/* <custom-ident> values */
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

/* Multiple values */
transition-property: test1, animation4;
transition-property: all, height, color;
transition-property: all, -moz-specific, sliding;
```

### transition-duration

esta propiedad establece el tiempo que debe tardar una animación de transición en completarse. De forma predeterminada, el valor es 0, lo que significa que no se producirá ninguna animación.

``` css
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;
```

### transition-timing-function

esta propiedad establece cómo se calculan los valores intermedios para las propiedades CSS que se ven afectadas por un efecto de transición.

``` css
/* Keyword values */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* Function values */
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);

/* Steps Function keywords */
transition-timing-function: steps(4, jump-start);
transition-timing-function: steps(10, jump-end);
transition-timing-function: steps(20, jump-none);
transition-timing-function: steps(5, jump-both);
transition-timing-function: steps(6, start);
transition-timing-function: steps(8, end);

/* Multiple timing functions */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);
```

### transition-delay

esta propiedad especifica la duración de la espera antes de iniciar el efecto de transición de una propiedad cuando cambia su valor.

``` css
/* <time> values */
transition-delay: 3s;
transition-delay: 2s, 4ms;
```