# pseudoelementos

son palabras claves que son añadirla a un los selectores para dar estilos a una parte especifica al elemento seleccionado por ejemplo ::first-line

## sintasis

``` css
selector::pseudo-element {
  property: value;
}
```

solo se puede usar un solo pseudo elemento en un selector

::: warning diferencias
las reglas de los pseudoelementos se diferencia se uso el doble dospuntos ( :: ) y las pseudo clases solo se un el dospuntos solo ( : )
:::

## tipos de pseudoelementos

| tipo | descripcion |
| ----------- | ----------- |
| ::after | este pseudoelemeto te crear un elemento hijo al final para que funcione debes colocar la propiedad obligatoria content comunmente lo usar de esta forma content: ""; |
| ::before | este pseudoelemeto funciona de forma similar con ::after la difirencia es que se crear un elemento al comienzo |
| ::backdrop | este un pseudoelemento de tamaño de viewport que renderiza la pantalla completa usando la api de fullscreen o por medio de la etiqueta de dialog |
| ::cue | señala las pistas de texto WebVTT dentro del elemento seleccionado. Esto puede ser usado para estilizar subtítulos y otras pistas de texto multimedia con pistas de texto. |
| ::cue-region | funciona igual que el pseudo elemento ::cue pero hay que aclarar que es un pseudo elemento experimental. se puede dar estilos a los otros subtitulos. |
| ::first-letter | este pseudoelemento le da estilos a la primera letra de un parrafo |
| ::first-line | este pseudoelemento le da estilos a la primera linea de todo el parrafo |
| ::file-selector-button | representa el boton de un input bajo el type file |
| ::grammar-error | este pseudoelemento es experimental representa el resaltado de un error gramatico si estamos escriendo mal ciertas palabras. |
| ::marker | este pseudoelemento es experimental representa el resaltado de palabras sin utilizar la etiqueta de solo si elementos de lista o la etiqueta summary |
| ::part() | este pseudoelemento es experimental epresenta cualquier elemento dentro de un árbol de sombra (shadow DOM) que tenga un atributo coincidente . |
| ::placeholder | representa el texto del marcador de posición solo se utilizar para inputs y texarea |
| ::selection | aplica estilos a la parte de un documento que el usuario ha resaltado (como hacer clic y arrastrar el mouse por el texto). |
| ::slotted() | este pseudoelemento es utilizado por los webcomponents epresenta cualquier elemento que se haya colocado en una ranura dentro de una plantilla de webcomponents solo es aplicado en shadow DOM el DOM normal no funciona. |
| ::spelling-error | este pseudoelemento es experimental epresenta un segmento de texto que el agente de usuario ha marcado como incorrectamente escrito |
| ::target-text | este pseudoelemento es experimental representa el texto al que se ha desplazado si el navegador admite fragmentos de desplazamiento al texto. Permite a los autores elegir cómo resaltar esa sección de texto. |