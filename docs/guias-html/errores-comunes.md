# errores comunes del HTML

## usar mayúsculas en las etiquetas, atributos y valores excepto en algunos valores.

```html
<!-- bad -->
<P>errores comunes<P>
<A HREF="https://google.com" TARGET="_BLANK">errores comunes<a>

<!-- good -->
<p>errores comunes<p>
<a href="https://google.com" target="_blank">errores comunes<a>
```

## no usar la versión mas actualizada o reciente de HTML.
```html
<!-- bad -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- good -->
<!DOCTYPE html>
```

## no usar el charset moderno
```html
<!-- bad -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<!-- good -->
<meta charset="UTF-8">
```

## si la etiqueta es auto-cierre no es necesario la etiqueta de cierre.
```html
<!-- bad -->
<input type="text" value="X"></input>

<!-- good -->
<input type="text" value="X">
```

## usar estilos en linea al menos si se trata de javascript.
```html
<!-- bad -->
<div style="width: 332px; height: 127px">hello world</div>

<!-- good -->
<div class="box">hello world</div>
```

## usar atributos de eventos.
```html
<!-- bad -->
<button onclick="alert('hello')" >print alert</button>
```

### se recomienda utilizar javascript para los eventos.
```html
<!-- good -->
<button id="print-alert" >print alert</button>
```
```js
const printAlert = docuement.getElementById('print-alert');

printAlert.addEventListener('click', () => alert('hello'))
```

## usar etiquetas obsoletas, desfasados o no standard
```html
<acronym> <dir> <listing> <strike>
<applet> <font> <marquee> <xmp>
<basefont> <frame> <nobr> <menuitem>
<bgsound> <frameset> <plaintext> <keygen>
<blink> <hgroup> <shadow> <image>
<center> <isindex> <spacer> <content>
<rtc>
```

### usar atrinutos globales obsoletos, desfasados
- contextmenu
- x-ms-acceñeratorkey
- x-ms-formart-detection	

### atributos de inputs obsoletos o desfasados
- datetime

## mezclar el CSS y JS dentro de HTML.
```html
<!DOCTYPE html>
<!-- bad -->
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>example</title>
  <style>
    div {
      width: 332px; 
      height: 127px;
    }
  </style>
</head>
<body>
  <h1>hello world</h1>
  <div>hello world</div>
  <button onclick="helloWorld('hello')" >print alert</button>
  <script>
    function helloWorld(msg) {
      alert(msg)
    }
  </script>
</body>
</html>

<!-- good -->
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>hello world</h1>
  <div class="box">hello world</div>
  <button id="print-alert" >print alert</button>
  <script src="script.js"></script>
</body>
</html>
```