# formularios

los formularios son elementos importantes para toda pagina o aplicación web son usando para el envío de datos hacia el servidor para consulta de información o envíos de datos para registro o inicio de sesión de una red social.

## etiqueta form

es la etiqueta vital para contener los inputs y otros elementos del formulario.

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
```

| Atributos | Descripción |
| ----------- | ----------- |
| action | este atributo se usar para redirigir la pagina es muy poco usado debido a la utilización de JavaScript |
| method | este atributo indica el método de envío de formulario GET, POST o dialog también es poco usado por la utilización de JavaScript con fetch o XHR |

## etiqueta fieldset

esta etiqueta en función semántica se usa para ser contenedores de los inputs, labels, texareas, legends y otros elementos de formulario.

```html
<fieldset>
  <legend>Simple fieldset</legend>
  <input type="radio" id="radio">
  <label for="radio">Spirit of radio</label>
</fieldset>
```

> este y en casi todos los elementos usar el atributo disabled de la etiqueta button.

## etiqueta legend

esta etiqueta representa el titulo del fieldset poco usado pero sirve para accesibilidad.

```html
<legend>Simple fieldset</legend>
```

## etiqueta input

etiqueta standard para la creación de formularios como textos, checkboxs y multiple checks.

```html
<input type="checkbox" name="cheese" id="cheese">
```

> la gran mayoría de atributos son parecidos a las demás etiquetas excepto algunas que son propias de la etiqueta.

| Atributos | Descripción |
| ----------- | ----------- |
| min | sirve para establecer el mínimo de números |
| max | sirve para establecer el máximo de números |
| minlength | sirve para asignar el mínimo de caracteres |
| maxlength | sirve para asignar el máximo de caracteres |
| multiple | atributo booleano que sirve para colocar mas de un correo o archivos en caso que usemos el tpye email o file |
| pattern | sirve para utilizar expresiones regulares es decir asignar un patrón de caracteres permitido |
| placeholder | sirve para colocar un texto de indicación para los inputs no se aplica para checkbox y radio buttons |
| readonly | atributo booleano que sirve para declarar como input de solo lectura y se deshabilitada su modificación |
| required | atributo booleano para indicar que el input es obligatorio |
| size | controlar el tamaño de los inputs de tipo email, text, password, tel |
| step | establecer el incremento para campos de tipo numérico |
| type | sirve para declarar el tipo de input si este atributo no se colocar por defecto es "type=text" |
| value | sirve para declarar el valor de la etiqueta input |
| checked | atributo booleano solo para checkbox y radio buttons para verificar que si el elemento es seleccionado si no lo tiene el atributo no existe |
| accept | es para uso del type file sirve para admitir el formato de archivo para subir |
| autocomplete | este atributo sirve para desactivar o no el auto-completado |
| list | este atributo sirve para especificar el datalist que queremos usar |
| autofocus | atributo booleano utilizado para la realización de foco es decir el primer input de formulario sera seleccionado automáticamente |

### tipos de input

| tipo | descripcion |
| ----------- | ----------- |
| button | sirve para colocar un botón si no posee un valor o no tienes colocando el atributo value por defecto es vacio "se opta mejor la etiqueta button" |
| checkbox | sirve crear un elemento de tipo seleccionable para seleccionar o des-seleccionar |
| color | sirve para el uso de selección de color en pocas palabras un color picker |
| date y datetime-local | estos atributos son para la asignaron de fecha el datatime-local adicional también la hora |
| email | es un campo de texto para colocar un correo electrónico |
| file | este input es para la realización de subida de archivos "el resto debe ser asignado por el lado de servidor y JavaScript para comunicación con el servidor" |
| hidden | es un input de tipo oculta "los datos se muestra desde la consola del desarrollador de los navegadores" |
| image | es para mostrar una imagen en el formulario "es poco usado no se sabe si lo va a dejar obsoleto" |
| month | es similar con datetime y datetime-local pero usado para la asignación de mes y año |
| number | campo de texto para uso numérico nada de letras |
| password | campo de texto para colocar la contraseña |
| radio | este funciona para la realización de inputs de tipo radio button |
| reset | es como el type button pero para limpiar los campos del formulario |
| search | es util para la realización de búsquedas |
| submit | este tipo de input se utilizaba para el envío de los datos de nuestro formulario al servidor "se opta mejor por el eitqueta button bajo el type submit" |
| tel | campo utilizado para el colocar el numero telefónico |
| text | es el tipo mas importante para colocar campos de texto normales |
| time | es un tipo de input que asignar la hora en formato 24h en ocasiones de 12h |
| url | input utilizado para colocar sitios web |
| week | es input es especial sirve para colocar el numero de la semana y el año |
| datetime | este tipo de input es un atributo obsoleto que sirve para la asignación de fecha y hora basada en la zona horario fue obsoleto por el uso del type date |
| range | sirve para uso de rangos en el input |

## etiqueta label

esta etiqueta sirve como función como etiqueta de ayuda para la etiqueta input también funciona como elementos de clic para ellos.

```html
<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>
```

| Atributos | Descripción |
| ----------- | ----------- |
| for | este atributo es muy esencial sirve para asociar el id único de la etiqueta input |

## etiqueta datalist

esta etiqueta sirve para el uso de lista de datos por medio de una id y el input por el atributo list.

```html
<label for="myBrowser">Choose a browser from this list:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
```

## etiqueta select

esta etiqueta provisional un menú selecionable para el formulario.

```html
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

> todos los atributos de la etiqueta select son los mismo de la etiqueta input.

## etiqueta optgroup

sirve como un grupo de opciones dentro de la etiqueta select.

```html
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
    <optgroup label="Theropods">
        <option>Tyrannosaurus</option>
        <option>Velociraptor</option>
        <option>Deinonychus</option>
    </optgroup>
    <optgroup label="Sauropods">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
    </optgroup>
</select>
```

| Atributos | Descripción |
| ----------- | ----------- |
| label | este atributo sirve para dar el titulo al grupo de opciones |

> el atributo disabled se usa de forma igual como los inputs y buttons

## etiqueta option

esta etiqueta sirve para la asignación de valores dentro de la etiqueta select.

```html
<option>Apatosaurus</option>
```

| Atributos | Descripción |
| ----------- | ----------- |
| value | se usar para la asignación de un valor |


## etiqueta textarea

esta etiqueta también de los mas útiles para los formularios y también usando en comentarios.

```html
<textarea name="textarea" rows="10" cols="50">
  Write something here
</textarea>
```

| Atributos | Descripción |
| ----------- | ----------- |
| rows | establecer un limite determinado de columnas en el textarea |
| cols | establecer un limite determinado de filas en el textarea |

## etiqueta progress

esta etiqueta es una mejora de input bajo el type range que muesta un rango de números determinado.

```html
<progress value="70" max="100"></progress>
```

> los atributos de la etiqueta progress son los mismos de input bajo el type range

## etiqueta meter

este etiqueta es similar a la etiqueta progress con la diferencia que es mas detallado por rango de mínimo hasta el máximo

```html
<p>
  Heat the oven to 
  <meter min="200" max="500" value="350"></meter>.
</p>
```

| Atributos | Descripción |
| ----------- | ----------- |
| low | establece el valor mínimo se identifica con el color rojo |
| high | establece el valor aceptable se identifica con el color amarillo |
| optimum | establece el valor óptimo o excelente se identifica con el color verde |

## etiqueta output

esta etiqueta es muy especial sirve para dar un texto de salida al formulario

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

| Atributos | Descripción |
| ----------- | ----------- |
| name | indica el nombre de resultado |
| for | similar a la etiqueta label con la diferencia que pueda tener mas dos id única separados por espacios en blanco |