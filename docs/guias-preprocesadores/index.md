# preprocesadores

En pocas palabras, un preprocesador te permite escribir CSS en un idioma alternativo (no te preocupes, es muy parecido al CSS nativo) y ofrece funciones avanzadas como variables, funciones y la posibilidad de incluir archivos. En resumen, te ayudan a escribir de manera más simple para organizar mejor tu código, evitando al mismo tiempo las repeticiones.

Una vez que el código CSS esté escrito en este nuevo idioma, se compilará para volver a transformarse en CSS nativo, el único que los navegadores web pueden entender. Esta característica de los preprocesadores es clave: aportan nuevas formas de escribir código a través de un idioma alternativo pero, en última instancia, el código enviado al navegador sigue siendo CSS nativo. Los preprocesadores no aportan nuevas funciones a CSS, pero lo hacen más eficiente.

## preprocesadores existen

hasta el dia de hoy existe solo cuatro preprocesadores estos son:

- preprocesadores
  - sass (el mas antiguo)
  - less (el segundo mas antiguo)
  - stylus (el mas joven inspirado en la sintaxis sass)
- post-procesador
  - postCSS
  
### sass

es el preprocesador mas antiguo y pionero de todos creado en el 2006 usando ruby como base actualmente usa dart como implementador principal tambien cuenta con muchas modulos para diversos lenguajes de backend como java, node.js hasta ruby.

### less

es otro preprocesador lanzado en el año 2009 siendo el primer preprocesador en implementar una libreria especial para el navegador tambien se uso ruby luego se pasado a javascript como implementador princial y tambien inspiró a sass para crear la sintasis scss pionero que bootstrap utilice este preprocesador hasta la version 3 debido que la version 4 usar a su hermano mayor sass.

### stylus

este preprocesador es el mas joven por 1 año a lees y mucho mas que sass se inspirar mucho de la sintaxis sass y añade exclusividas al preprocesador su implementador principal es node.js y tambien posee sus propios plugins.

### postCSS

es un post-procesador basado en plugins de javascript usando mas que todo en los administradores de tareas y empaquetadores de modulos tambien usando como autoprefixer.<br>
usando en su gran parte para probar nuevas mejoras de css antes de realizar compatibilidad total.