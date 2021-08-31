<template><h1 id="formularios" tabindex="-1"><a class="header-anchor" href="#formularios" aria-hidden="true">#</a> formularios</h1>
<p>los formularios son elementos importantes para toda pagina o aplicación web son usando para el envío de datos hacia el servidor para consulta de información o envíos de datos para registro o inicio de sesión de una red social.</p>
<h2 id="etiqueta-form" tabindex="-1"><a class="header-anchor" href="#etiqueta-form" aria-hidden="true">#</a> etiqueta form</h2>
<p>es la etiqueta vital para contener los inputs y otros elementos del formulario.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Enter your name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Enter your email: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Subscribe!<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>action</td>
<td>este atributo se usar para redirigir la pagina es muy poco usado debido a la utilización de JavaScript</td>
</tr>
<tr>
<td>method</td>
<td>este atributo indica el método de envío de formulario GET, POST o dialog también es poco usado por la utilización de JavaScript con fetch o XHR</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-fieldset" tabindex="-1"><a class="header-anchor" href="#etiqueta-fieldset" aria-hidden="true">#</a> etiqueta fieldset</h2>
<p>esta etiqueta en función semántica se usa para ser contenedores de los inputs, labels, texareas, legends y otros elementos de formulario.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">></span></span>Simple fieldset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Spirit of radio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>este y en casi todos los elementos usar el atributo disabled de la etiqueta button.</p>
</blockquote>
<h2 id="etiqueta-legend" tabindex="-1"><a class="header-anchor" href="#etiqueta-legend" aria-hidden="true">#</a> etiqueta legend</h2>
<p>esta etiqueta representa el titulo del fieldset poco usado pero sirve para accesibilidad.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">></span></span>Simple fieldset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="etiqueta-input" tabindex="-1"><a class="header-anchor" href="#etiqueta-input" aria-hidden="true">#</a> etiqueta input</h2>
<p>etiqueta standard para la creación de formularios como textos, checkboxs y multiple checks.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cheese<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cheese<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>la gran mayoría de atributos son parecidos a las demás etiquetas excepto algunas que son propias de la etiqueta.</p>
</blockquote>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>min</td>
<td>sirve para establecer el mínimo de números</td>
</tr>
<tr>
<td>max</td>
<td>sirve para establecer el máximo de números</td>
</tr>
<tr>
<td>minlength</td>
<td>sirve para asignar el mínimo de caracteres</td>
</tr>
<tr>
<td>maxlength</td>
<td>sirve para asignar el máximo de caracteres</td>
</tr>
<tr>
<td>multiple</td>
<td>atributo booleano que sirve para colocar mas de un correo o archivos en caso que usemos el tpye email o file</td>
</tr>
<tr>
<td>pattern</td>
<td>sirve para utilizar expresiones regulares es decir asignar un patrón de caracteres permitido</td>
</tr>
<tr>
<td>placeholder</td>
<td>sirve para colocar un texto de indicación para los inputs no se aplica para checkbox y radio buttons</td>
</tr>
<tr>
<td>readonly</td>
<td>atributo booleano que sirve para declarar como input de solo lectura y se deshabilitada su modificación</td>
</tr>
<tr>
<td>required</td>
<td>atributo booleano para indicar que el input es obligatorio</td>
</tr>
<tr>
<td>size</td>
<td>controlar el tamaño de los inputs de tipo email, text, password, tel</td>
</tr>
<tr>
<td>step</td>
<td>establecer el incremento para campos de tipo numérico</td>
</tr>
<tr>
<td>type</td>
<td>sirve para declarar el tipo de input si este atributo no se colocar por defecto es &quot;type=text&quot;</td>
</tr>
<tr>
<td>value</td>
<td>sirve para declarar el valor de la etiqueta input</td>
</tr>
<tr>
<td>checked</td>
<td>atributo booleano solo para checkbox y radio buttons para verificar que si el elemento es seleccionado si no lo tiene el atributo no existe</td>
</tr>
<tr>
<td>accept</td>
<td>es para uso del type file sirve para admitir el formato de archivo para subir</td>
</tr>
<tr>
<td>autocomplete</td>
<td>este atributo sirve para desactivar o no el auto-completado</td>
</tr>
<tr>
<td>list</td>
<td>este atributo sirve para especificar el datalist que queremos usar</td>
</tr>
<tr>
<td>autofocus</td>
<td>atributo booleano utilizado para la realización de foco es decir el primer input de formulario sera seleccionado automáticamente</td>
</tr>
</tbody>
</table>
<h3 id="tipos-de-input" tabindex="-1"><a class="header-anchor" href="#tipos-de-input" aria-hidden="true">#</a> tipos de input</h3>
<table>
<thead>
<tr>
<th>tipo</th>
<th>descripcion</th>
</tr>
</thead>
<tbody>
<tr>
<td>button</td>
<td>sirve para colocar un botón si no posee un valor o no tienes colocando el atributo value por defecto es vacio &quot;se opta mejor la etiqueta button&quot;</td>
</tr>
<tr>
<td>checkbox</td>
<td>sirve crear un elemento de tipo seleccionable para seleccionar o des-seleccionar</td>
</tr>
<tr>
<td>color</td>
<td>sirve para el uso de selección de color en pocas palabras un color picker</td>
</tr>
<tr>
<td>date y datetime-local</td>
<td>estos atributos son para la asignaron de fecha el datatime-local adicional también la hora</td>
</tr>
<tr>
<td>email</td>
<td>es un campo de texto para colocar un correo electrónico</td>
</tr>
<tr>
<td>file</td>
<td>este input es para la realización de subida de archivos &quot;el resto debe ser asignado por el lado de servidor y JavaScript para comunicación con el servidor&quot;</td>
</tr>
<tr>
<td>hidden</td>
<td>es un input de tipo oculta &quot;los datos se muestra desde la consola del desarrollador de los navegadores&quot;</td>
</tr>
<tr>
<td>image</td>
<td>es para mostrar una imagen en el formulario &quot;es poco usado no se sabe si lo va a dejar obsoleto&quot;</td>
</tr>
<tr>
<td>month</td>
<td>es similar con datetime y datetime-local pero usado para la asignación de mes y año</td>
</tr>
<tr>
<td>number</td>
<td>campo de texto para uso numérico nada de letras</td>
</tr>
<tr>
<td>password</td>
<td>campo de texto para colocar la contraseña</td>
</tr>
<tr>
<td>radio</td>
<td>este funciona para la realización de inputs de tipo radio button</td>
</tr>
<tr>
<td>reset</td>
<td>es como el type button pero para limpiar los campos del formulario</td>
</tr>
<tr>
<td>search</td>
<td>es util para la realización de búsquedas</td>
</tr>
<tr>
<td>submit</td>
<td>este tipo de input se utilizaba para el envío de los datos de nuestro formulario al servidor &quot;se opta mejor por el eitqueta button bajo el type submit&quot;</td>
</tr>
<tr>
<td>tel</td>
<td>campo utilizado para el colocar el numero telefónico</td>
</tr>
<tr>
<td>text</td>
<td>es el tipo mas importante para colocar campos de texto normales</td>
</tr>
<tr>
<td>time</td>
<td>es un tipo de input que asignar la hora en formato 24h en ocasiones de 12h</td>
</tr>
<tr>
<td>url</td>
<td>input utilizado para colocar sitios web</td>
</tr>
<tr>
<td>week</td>
<td>es input es especial sirve para colocar el numero de la semana y el año</td>
</tr>
<tr>
<td>datetime</td>
<td>este tipo de input es un atributo obsoleto que sirve para la asignación de fecha y hora basada en la zona horario fue obsoleto por el uso del type date</td>
</tr>
<tr>
<td>range</td>
<td>sirve para uso de rangos en el input</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-label" tabindex="-1"><a class="header-anchor" href="#etiqueta-label" aria-hidden="true">#</a> etiqueta label</h2>
<p>esta etiqueta sirve como función como etiqueta de ayuda para la etiqueta input también funciona como elementos de clic para ellos.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Do you like peas?
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>peas<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>for</td>
<td>este atributo es muy esencial sirve para asociar el id único de la etiqueta input</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-datalist" tabindex="-1"><a class="header-anchor" href="#etiqueta-datalist" aria-hidden="true">#</a> etiqueta datalist</h2>
<p>esta etiqueta sirve para el uso de lista de datos por medio de una id y el input por el atributo list.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myBrowser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Choose a browser from this list:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>browsers<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myBrowser<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myBrowser<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>browsers<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Chrome<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Firefox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Internet Explorer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Opera<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Safari<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Microsoft Edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="etiqueta-select" tabindex="-1"><a class="header-anchor" href="#etiqueta-select" aria-hidden="true">#</a> etiqueta select</h2>
<p>esta etiqueta provisional un menú selecionable para el formulario.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>choice<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>first<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First Value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>second<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>Second Value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>third<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Third Value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>todos los atributos de la etiqueta select son los mismo de la etiqueta input.</p>
</blockquote>
<h2 id="etiqueta-optgroup" tabindex="-1"><a class="header-anchor" href="#etiqueta-optgroup" aria-hidden="true">#</a> etiqueta optgroup</h2>
<p>sirve como un grupo de opciones dentro de la etiqueta select.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dino-select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Choose a dinosaur:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dino-select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optgroup</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Theropods<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Tyrannosaurus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Velociraptor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Deinonychus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optgroup</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optgroup</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sauropods<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Diplodocus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Saltasaurus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Apatosaurus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optgroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>este atributo sirve para dar el titulo al grupo de opciones</td>
</tr>
</tbody>
</table>
<blockquote>
<p>el atributo disabled se usa de forma igual como los inputs y buttons</p>
</blockquote>
<h2 id="etiqueta-option" tabindex="-1"><a class="header-anchor" href="#etiqueta-option" aria-hidden="true">#</a> etiqueta option</h2>
<p>esta etiqueta sirve para la asignación de valores dentro de la etiqueta select.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Apatosaurus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>se usar para la asignación de un valor</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-textarea" tabindex="-1"><a class="header-anchor" href="#etiqueta-textarea" aria-hidden="true">#</a> etiqueta textarea</h2>
<p>esta etiqueta también de los mas útiles para los formularios y también usando en comentarios.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Write something here
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>rows</td>
<td>establecer un limite determinado de columnas en el textarea</td>
</tr>
<tr>
<td>cols</td>
<td>establecer un limite determinado de filas en el textarea</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-progress" tabindex="-1"><a class="header-anchor" href="#etiqueta-progress" aria-hidden="true">#</a> etiqueta progress</h2>
<p>esta etiqueta es una mejora de input bajo el type range que muesta un rango de números determinado.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progress</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>70<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>progress</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>los atributos de la etiqueta progress son los mismos de input bajo el type range</p>
</blockquote>
<h2 id="etiqueta-meter" tabindex="-1"><a class="header-anchor" href="#etiqueta-meter" aria-hidden="true">#</a> etiqueta meter</h2>
<p>este etiqueta es similar a la etiqueta progress con la diferencia que es mas detallado por rango de mínimo hasta el máximo</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
  Heat the oven to 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meter</span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>350<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>meter</span><span class="token punctuation">></span></span>.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>low</td>
<td>establece el valor mínimo se identifica con el color rojo</td>
</tr>
<tr>
<td>high</td>
<td>establece el valor aceptable se identifica con el color amarillo</td>
</tr>
<tr>
<td>optimum</td>
<td>establece el valor óptimo o excelente se identifica con el color verde</td>
</tr>
</tbody>
</table>
<h2 id="etiqueta-output" tabindex="-1"><a class="header-anchor" href="#etiqueta-output" aria-hidden="true">#</a> etiqueta output</h2>
<p>esta etiqueta es muy especial sirve para dar un texto de salida al formulario</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">oninput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>result.value=parseInt(a.value)+parseInt(b.value)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> +
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> =
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>output</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>result<span class="token punctuation">"</span></span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>60<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>output</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>indica el nombre de resultado</td>
</tr>
<tr>
<td>for</td>
<td>similar a la etiqueta label con la diferencia que pueda tener mas dos id única separados por espacios en blanco</td>
</tr>
</tbody>
</table>
</template>
