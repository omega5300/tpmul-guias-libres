# encabezado y meta-datos

estas etiquetas sirve para el seo y meta información al la pagina web 
para posicionamiento y nombre de la pagina.

## eitqueta title

esta importante para la pagina web y fundamental para el seo "posicionamiento de los motores de búsqueda"

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```
## etiqueta base

esta etiqueta especificar la ruta actual para caso de seo y/o prioridad de JavaScript y apoyo para el protocolo OpenGraph.

```html
<base href="https://www.example.com/">
<base target="_blank">
<base target="_top" href="https://example.com/">
```

> sus atributos son iguales a la etiqueta a.

## etiqueta meta

esta etiqueta representa los meta-datos de la pagina web

```html
<meta charset="utf-8">

<!-- Redirect page after 3 seconds -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org">
```

| Atributos | Descripción |
| ----------- | ----------- |
| charset | sirve para especificar la codificación de caracteres de la pagina web |
| content | utilizado para declarar contenido para seo y OpenGraph |
| http-equiv | define una directiva de directiva es muy poco usado por las políticas de CORS |
| name | sirve para especificar el parámetro de la opción de seo y OpenGraph |

### tipo de http-equiv

| Tipo | Descripción |
| ----------- | ----------- |
| content-security-policy | Permite a los autores de la página definir una política de contenido para la página actual. Las políticas de contenido especifican principalmente orígenes de servidor permitidos y puntos finales de secuencias de comandos que ayudan a proteger contra ataques de secuencias de comandos entre sitios. |
| content-type | Declara el tipo MIME y la codificación de caracteres del documento. Si se especifica, el contentatribute debe tener el valor " text/html; charset=utf-8". Esto es equivalente a un <meta>elemento con el  charsetatribute especificado y tiene la misma restricción de ubicación dentro del documento. Nota: Solo se puede utilizar en documentos servidos con un text/html- no en documentos servidos con un tipo XML MIME. |
| default-style | Establece el nombre del conjunto de hojas de estilo CSS predeterminado |
| x-ua-compatible | i se especifica, el contentatribute debe tener el valor " IE=edge". Los agentes de usuario deben ignorar este pragma. "es poco usado" |
| refresh | Esta instrucción especifica:
El número de segundos hasta que se debe volver a cargar la página, solo si el contentatribute contiene un número entero positivo.
El número de segundos hasta que la página debe redirigirse a otra, solo si el contentatribute contiene un número entero positivo seguido de la cadena " ;url=" y una URL válida. |

### tipos meta names

| Tipo de metedatos | Descripción |
| ----------- | ----------- |
| keywords | sirve para la asignación de palabras clave debe esta separados por una comas |
| referer | sirve para el envío de solicitudes cuyos valores de content son: no-referrer, origin, no-referrer-when-downgrade, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-URL |
| theme-color | funciona para como el color de barra de titulo si esta en un navegador móvil o PWA |
| color-scheme | especifica uno o mas esquemas de color compatible cuyo valores de content son: normal, dark light, only light |
| viewport | este tipo de meta tag es lo vital para el manejo de paginas responsivas con sus siguientes de content: width, height, initial-scale(0.0 y 10.0), maximum-scale, minimum-scale, user-scalabe(yes or no), viewport-fit(auto, contain or cover) |
| creator | especifica el creador de la pagina u organización |
| googlebot | sirve para utilizar los bots de Google por motivos de seo |
| publisher | el nombre para el editor de documento |
| robots | sirve para estipular el valor para la indexación de la pagina para los motores de búsqueda sus valores son: index, noindex, follow, nofollow, all, none, noarchive, noimageindex, nocache |

## etiqueta link

esta etiqueta es otra de las mas esenciales sirve para traer recursos externos usado mucho para enlanzar archivos CSS uso de favicons.

```html
<link rel="icon" href="favicon.ico">
<link href="main.css" rel="stylesheet">
```

| Atributos | Descripción |
| ----------- | ----------- |
| as | este atributo solo se ultiliza si esta bajo los valores de rel preload o prefetch bajo los siguientes valores: audio, document, embed, fetch, font, image, object, script, style, track, video, worker |
| href | utilizado para los favicons y CSS |
| rel | sirve para especificar que tipo de relacion tiene sus valores mas comunes son: stylesheet, icon los otros son: alternate, archives (obsoleto), author, bookmark, canonical, external, first, help, index (obsoleto), last (obsoleto), license, manifest "uso para PWA", modulepreload, next, pingback, preconnect, prefecth, preload, prev, search, shortlink, sidebar (no aprobado por el standard), up |

**Descripcion mas detalle por este link:** [tipos de link](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)