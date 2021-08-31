# elementos de scripting

los elementos de scripting son etiquetas que utilizamos para usar otros lenguajes como CSS y JavaScript

## etiqueta style

esta etiqueta cuya función es para utilizar el lenguaje CSS es decir podemos estilizar los estilos a nuestra pagina web mas info visita la guia de [CSS](/guias-css/).

```html
<style>
  p {
    color: red;
  }
</style>
```
| Atributos | Descripción |
| ----------- | ----------- |
| type | sirve para especificar el formato es opcional debido que por valor predeterminado es text/css |
| media | este atributo sirve para especificar el media query del estilo CSS |

> esta etiqueta solo la recomiendo si trabajas con un solo archivo HTML o si usas webcomponents no es recomendable si es igual o superior a dos archivos HTML se debe emplear el uso de la etiqueta link

## etiqueta script

esta etiqueta se utilizar para escribir JavaScript dentro de html o llamar archivo JavaScript mas info visite la guia de [javascript](/guias-javascript/)

```html
<!-- llamado un archivo externo de javascript -->
<script src="javascript.js"></script>

<!-- escribiendo javascript -->
<script>
  alert("Hello World!");
</script>
```

| Atributos | Descripción |
| ----------- | ----------- |
| async | atributo booleano sirve para cargar el JavaScript de forma asíncrona |
| defer | atributo booleano sirve para retrasar la carga de JavaScript es decir el JavaScript se carga después de finalizar la carga del documento HTML |
| nomodule | es para indicar que este documento no puede ejecutar los es modules "módulos de EcmaScript" para indicar que esta pagina no es compatible con la versiones de es6+ |
| src | sirve para traer la ruta del archivo JavaScript |
| type | antes es usando para el type text/javascript ahora se usar para el un nuevo valor module para traer los módulos de EcmaScript |
| language | sirve para traer otros lenguajes de programación ahora es un atributo desfasado |
| charset | sirve para asignar una codificación de caracteres actualmente es un atributo desfasado |

> es recomendable para el uso de JavaScript externo si trabajas con múltiples documentos HTML pero si es un solo documento HTML si es recomendable usarlo solo en casos muy concretos