# etiquetas principales

los elementos principales son la estructura vital una pagina HTML son la que de información tanto para seo como también lo visual de la pagina.

## etiqueta doctype
esta etiqueta cuya función es especificar la versión del documento HTML.

```html
<!-- version actual -->
<!DOCTYPE html>

<!-- version html 4 strict mode  -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!-- version html 4 transitional -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!-- version html 4 frameset -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"
"http://www.w3.org/TR/html4/frameset.dtd">

<!-- version xhtml strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- version xhtml trasitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!-- version xhtml frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

> se recomienda usar la versión mas reciente de HTML.

## etiqueta html

esta es la etiqueta raíz para la realización de la estructura de una pagina web.

```html
<html></html>
```

| Atributos | Descripción |
| ----------- | ----------- |
| manifest | este atributo es para indica la política de cache uso no es recomendable debido que es un atributo desfasado |
| version | este atributo es usando para especificar la versión de HTML ahora es un atributo desfasado para dar prioridad al el doctype |
| xmlns | este atributo es opcional se usa para convertir a XHTML para se mas estricto **uso es poco debido a el standard html5+ |
| lang | su uso es para especificar el idioma de documento de la pagina web |

> solo puede contener dentro una etiqueta head y una etiqueta body.

## etiqueta head

esta es la etiqueta se usa para los meta-datos del documento HTML.

```html
<head></head>
```

| Atributos | Descripción |
| ----------- | ----------- |
| profile | este atributo sirve para dar uno o mas meta-datos este atributo fue obsoleto para favorecer a las etiquetas meta |

> la etiqueta head solo puede contener una etiqueta title, style y así como otras etiquetas: meta, link y script son de múltiple uso las etiqueta solo una vez.

## etiqueta body

esta es la etiqueta es para la visualización de los elementos de linea y bloque del documento su función es mostrar elementos que las personas lo pueda ver.

```html
<body></body>
```

| Atributos | Descripción |
| ----------- | ----------- |
| alink | este se usar para colocar el color de una pagina visita es un atributo desfasado a favor de la pseudo clase :active |
| background | este atributo se utilizaba para color o imagen de fondo al el documento esta desfasado a favor de CSS por la propiedad background-color or background-image |
| bgcolor | este atributo se utilizaba para color de fondo al el documento esta desfasado a favor de CSS por la propiedad background-color |
| link | este atributo coloca el color a en los enlaces de las paginas no vistas fue desfasado a favor de la pseudo clase :link  |
| bottommargin | este atributo sirve para colocar margenes inferiores el uso fue obsoleto a favor de margin-bottom |
| leftmargin | este atributo sirve para colocar margenes de lateral izquierdo el uso fue obsoleto a favor de margin-left |
| rightmargin | este atributo sirve para colocar margenes de lateral derecho el uso fue obsoleto a favor de margin-right |
| topmargin | este atributo sirve para colocar margenes superiores el uso fue obsoleto a favor de margin-top |
| text | el uso es para colocar el color al documento es un atributo desfasado a favor de la propiedad de CSS color |
| vlink | coloca el color a las paginas visitadas a los enlaces el uso es obsoleto al favor de la pseudo clase :visited |

> solo puede contener todos los elementos visuales también el uso de la etiqueta script y las etiquetas personalizadas de los webcompoents.


## comentarios

estas etiquetas no se muestra en las paginas web son utilizadas como guías para los desarrolladores.

```html
<!-- ejemplo de comentario -->
```