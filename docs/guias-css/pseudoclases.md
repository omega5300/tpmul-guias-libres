# pseudoclases

las pseudoclases son palabras claves para añadir un estado especial de nuestro selector de CSS por ejemplo la pseudoclase hover, :hover.

## sintasis

``` css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

## tipos de pseudoclases

| tipo | descripcion |
| ----------- | ----------- |
| :active | representa un elemento (tal como un botón) que está siendo activado por el usuario. Cuando se usa un mouse, la "activación" generalmente comienza cuando el usuario presiona el botón principal del mouse. |
| :any-link | representa un elemento que actúa como el ancla de origen de un hipervínculo, independientemente de si se ha visitado. En otras palabras, se corresponde con cualquier o elemento que tiene un atributo. solo es aplicado si usas la etiqueta a o area |
| :autofill | partidos cuando la etiqueta input elemento tiene su valor autocumplimentada por el navegador. La clase deja de coincidir si el usuario edita el campo. |
| :blank | esta pseudoclase es experimental permitirá a los desarrolladores resaltar de alguna manera los controles de entrada que no son necesarios, pero que aún no tienen contenido completo, tal vez como un recordatorio para los usuarios. |
| :checked | representa cualquier elemento de radio ( ), casilla de verificación ( ) u opción ( en a ) que esté marcado o cambiado a un estado. en activado. |
| :current | dimensión temporal que representa el elemento, o un antepasado del elemento, que se muestra actualmente. Por ejemplo, en un video con subtítulos que WebVTT muestra  |
| :default | selecciona forman elementos que son el valor predeterminado en un grupo de elementos relacionados. |
| :defined | representa cualquier elemento que se ha definido. Esto incluye cualquier elemento estándar integrado en el navegador y elementos personalizados que se hayan definido correctamente (es decir, con el método). |
| :dir() | esta pseudoclase sirve para dar estilos de texto basados en direccionalidad del texto tanto rlt como ltr |
| :disabled | representa cualquier elemento deshabilitado. Un elemento está deshabilitado si no se puede activar (seleccionar, hacer clic, escribir, etc.) o aceptar el enfoque. El elemento también tiene un estado habilitado, en el que se puede activar o aceptar el foco. |
| :empty | representa cualquier elemento que no tiene hijos. Los elementos secundarios pueden ser nodos de elementos o texto (incluidos los espacios en blanco). Los comentarios, las instrucciones de procesamiento y CSS no afectan si un elemento se considera vacío. |
| :enabled | representa cualquier elemento permitido. Un elemento está habilitado si se puede activar (seleccionar, hacer clic en, teclear, etc.) o aceptar el foco. El elemento también tiene un estado deshabilitado, en el que no se puede activar ni aceptar el foco. |
| :first | esta pseudoclase se utiliza con la  regla en- , representa la primera página de un documento impreso. (Consulte el primer elemento general de un nodo). ejemplo: @page :first |
| :first-child | representa el primer elemento de entre un grupo de elementos de hermanos. |
| :first-of-type | representa el primer elemento de este tipo entre un grupo de elementos de hermanos. |
| :fullscreen | esta pseudoclase se utiliza para que coincide con todos los elementos que actualmente se encuentra en el modo de pantalla completa. Si se han puesto varios elementos en modo de pantalla completa, esto los selecciona a todos. |
| :future | esta pseudoclase se utiliza para dar una dimensión temporal que coincidirá con cualquier elemento que aparezca completamente después de un elemento que coincida . Por ejemplo, en un video con subtítulos que WebVTT muestra. |
| :focus | representa un elemento (tal como un formulario de entrada) que ha recibido el foco. Generalmente se activa cuando el usuario hace clic o toca un elemento o lo selecciona con la tecla del teclado. |
| :focus-visible | esta pseudoclase se aplica mientras un elemento coincide con la :focuspseudoclase y el UA ( agente de usuario ) determina mediante heurística que el enfoque debe hacerse evidente en el elemento. Este selector es útil para proporcionar un indicador de enfoque diferente según la modalidad de entrada del usuario (mouse o teclado). |
| :focus-within | esta pseudoclase coincide con un elemento si el elemento o cualquiera de sus descendientes se centran. En otras palabras, representa un elemento que a su vez coincide con la pseudoclase o tiene un descendiente que coincide con . (Esto incluye descendientes en árboles de sombra ). |
| :has() | representa un elemento si cualquiera de los selectores pasados como parámetros (en relación con la :scopedel elemento dado) coincide con al menos un elemento. |
| :host | esta pseudoclase sirve para selecciona el anfitrión sombra del DOM sombra que contiene el CSS se utiliza dentro - en otras palabras, esto le permite seleccionar un elemento personalizado desde el interior del shadow DOM. |
| :host() | esta pseudoclase de tipo función selecciona el host de sombra del DOM de sombra que contiene el CSS que se usa en su interior (para que pueda seleccionar un elemento personalizado desde dentro de su shadow DOM), pero solo si el selector dado como parámetro de la función coincide con el host de sombra. |
| :host-context() | esta pseudoclase de función permite que un elemento personalizado, o cualquier cosa dentro del DOM de sombra de ese elemento personalizado, aplique diferentes estilos según su posición dentro del DOM externo o clases / atributos aplicados a elementos ancestros. |
| :hover | esta pseudoclase permite que el usuario interactúa con un elemento con un dispositivo señalador, pero no necesariamente lo activan. Generalmente se activa cuando el usuario se desplaza sobre un elemento con el cursor (puntero del mouse). |
| :indeterminate | representa cualquier elemento de formulario cuyo estado es indeterminado, como casillas de verificación que tienen su HTML conjunto atributo a , botones de radio que son miembros de un grupo en el que todos los botones de radio son sin marcar, y indeterminadas elementos. |
| :in-range | representa un elemento cuyo valor actual está dentro de los límites del rango especificado por el y atributos. |
| :invalid | representa cualquier input o otro elemento de formurario lo marque si el campo es invalido |
| :is() | esta pseudoclase de función sirve para toma una lista de selectores como argumento y selecciona cualquier elemento que pueda ser seleccionado por uno de los selectores en esa lista. Esto es útil para escribir selectores grandes en una forma más compacta. |
| :lang() | esta pseudoclase de función sirve para que coincida los elementos basados en el idioma que están determinados al elemento HTML |
| :last-child | representa-of-typemo eleme:lefte entre un grupo de elementos de hermanos. |
| :last-of-type | representa el último elemento de este tipo entre un grupo de elementos de hermanos. |
| :left | esta pseudoclase sirve para se utiliza con la regla de CSS @page representa todas las páginas de la izquierda de un documento impreso. |
| :link | representa un elemento que aún no ha sido visitado. Coincide con todos los no visitados o elemento que tiene un atributo. |
| :local-link | representa un enlace con el mismo documento. Por lo tanto, un elemento que es el ancla de origen de un hipervínculo cuya URL absoluta de destino coincide con la URL del documento del propio elemento. |
| :not() | representa los elementos que no coinciden con una lista de selectores. Dado que evita que se seleccionen elementos específicos, se conoce como la pseudoclase de negación. |
| :ntn-child() | esta pseudoclases representa la coincidencia con los elementos en funcion de la posicion de un grupo de hermanos |
| :ntn-last-child() | esta pseudoclase coincide con elementos en función de su posición dentro de un grupo de hermanos, a contar desde el final. |
| :ntn-col() | esta pseudoclases es experimental esta diseñada para las tablas y cuadrículas. Acepta la notación An + B como se usa con el selector, usándola para apuntar a cada enésima columna. Los valores pares e impares también son válidos. |
| :ntn-last-col() | esta pseudoclase es experimental está diseñada para las tablas y cuadrículas. Acepta la notación An + B como se usa con el selector, usándola para apuntar a cada enésima columna anterior, por lo tanto, contando hacia atrás desde el final del conjunto de columnas. Los valores pares e impares también son válidos. |
| :nth-last-of-type() | esta pseudoclase sirve para que coincide con elementos de un tipo dado, en función de su posición entre un grupo de hermanos, contando desde el extremo. |
| :nth-of-type | esta pseudoclase sirve para que coincide con elementos de un tipo dado (nombre de la etiqueta), basado en su posición entre un grupo de hermanos. |
| :only-child | representa un elemento sin hermanos. Es lo mismo que :first-child:last-childo :nth-child(1):nth-last-child(1), pero con menor especificidad. |
| :only-of-type | representa un elemento que no tiene hermanos del mismo tipo. |
| :optional | representa cualquier etiqueta input, select o textarea que no tenga el atributo required |
| :out-of-range | representa un elemento input cuyos valores esta por de los rangos permitidos de los atributos min y max |
| :past | es una pseudo-clase de dimensión temporal que coincidirá con cualquier elemento que aparezca completamente antes de un elemento que coincida . Por ejemplo, en un video con subtítulos que WebVTT muestra. |
| :picture-in-picture | esta pseudoclase le permite configurar sus hojas de estilo para ajustar automáticamente el tamaño, el estilo o el diseño del contenido cuando un video cambia entre los modos de presentación tradicional y de imagen en imagen. |
| :placeholder-shown | representa cualquier o elemento input o textarea que se muestra actualmente texto del marcador . |
| :paused | esta pseudoclase es experimental, es una pseudo-clase de estado de recurso que coincidirá con un recurso de audio, video o similar que se pueda "reproducir" o "pausar", cuando ese elemento está "en pausa". |
| :playing | esta pseudoclase es experimental, es una pseudo-clase de estado de recurso que coincidirá con un recurso de audio, video o similar que es capaz de ser "reproducido" o "pausado", cuando ese elemento se está "reproduciendo". |
| :read-only |  representa un elemento (tal como input o textarea ) que no es editable por el usuario. |
| :read-write | representa un elemento (tal como input o textarea ) que es editable por el usuario. |
| :required | representa cualquier elemento de tipo input, select o textarea que posea el atributo required |
| :right | esta pseudo clase se debe utilizar junto con la regla @page, representa todas las páginas de la derecha de un documento impreso. |
| :root | coincide con el elemento raíz de un árbol que representa el documento. En HTML, representa el html elemento y es idéntico al selector , excepto que su especificidad es mayor. |
| :scope | representa elementos que son un punto de referencia para los selectores para que coincida en contra. |
| :target | representa un elemento único (el elemento de destino) con una identificación que coincide con el fragmento de la URL. |
| :target-within | esta pseudoclase es experimental, representa un elemento que es un elemento objetivo o contiene un elemento que es un objetivo. Un elemento de destino es un elemento único con una identificación que coincide con el fragmento de la URL. En otras palabras, representa un elemento que a su vez coincide con la pseudoclase: target o tiene un descendiente que coincide con: target. |
| :user-invalid | La pseudoclase: user-invalid debe coincidir con un elemento: invalid,: out-of-range, o blank-but: required entre el momento en que el usuario ha intentado enviar el formulario y antes de que el usuario haya interactuado nuevamente con el elemento del formulario . |
| :valid | representa cualquier input u otro form elemento cuyo contenido se valida correctamente. Esto permite que los campos válidos adopten fácilmente una apariencia que ayude al usuario a confirmar que sus datos están formateados correctamente. |
| :visited | representa enlaces que el usuario ya ha visitado. Por motivos de privacidad, los estilos que se pueden modificar con este selector son muy limitados. |
| :where | La función toma una lista de selectores como argumento y selecciona cualquier elemento que pueda ser seleccionado por uno de los selectores en esa lista. |