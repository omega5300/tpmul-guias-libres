# tablas

las tablas también son un elemento esencial que se conforma por filas y columnas por medio de celdas pero poco usadas sirve para aplicaciones web tipo CRUD, horarios de clases para colegios o para documentación.

## etiqueta table

esta etiqueta representa el esqueleto de la tabla para colocar el encabezado, el cuerpo y pie de pagina.

> todo los atributos de la etiqueta table no sera mencionadas son parecidos a los elementos multimedia y son empleados por medio de CSS.

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

## etiqueta thead

esta etiqueta en función semántica representa el encabezado de la tabla.

```html
<thead>
  <tr>
    <th scope="col">Items</th>
    <th scope="col">Expenditure</th>
  </tr>
</thead>
```

## etiqueta tbody

esta etiqueta en función semántica representa el cuerpo de la tabla.

```html
<tbody>
  <tr>
    <td scope="col">Items</td>
    <td scope="col">Expenditure</td>
  </tr>
</tbody>
```

## etiqueta tfoot

esta etiqueta en función semántica representa el pie de pagina de la tabla.

```html
<thead>
  <tr>
    <th scope="row">Totals</th>
    <td>21,000</td>
  </tr>
</thead>
```

## etiqueta tr

esta etiqueta en función semántica representa la fila de la tabla puede contener tanto th como td.

```html
<tr>
  <th scope="row">Totals</th>
  <td>21,000</td>
</tr>
```

## etiqueta th

esta etiqueta en función semántica representa dato importante de la tabla es usando mucho en los thead.

```html
<th scope="row">Totals</th>
```

| Atributos | Descripción |
| ----------- | ----------- |
| abbr | representa el valor de un acrónimo |
| colspan | representa el valor de columnas que quiera el campo el valor por predeterminado es 1 |
| headers | es un equivalente del atributo id pero en función de la id única para encabezados |
| rowspan | es parecido al colspan en filas |
| scope | especificar como se va a comportar de la etiqueta th |

## etiqueta td

esta etiqueta representa la celda de una tabla en pocas palabras una columna.

```html
<td>21,000</td>
```

> sus atributos son iguales al th excepto el atributo abbr que es un atributo obsoleto / desfasados.

## etiqueta caption

representa el titulo de la tabla o una descripción similar a figcaption se debe colocar dentro de la etiqueta table.

```html
<caption>Example Caption</caption>
```

## etiqueta colgroup

esta etiqueta define el grupo de columnas de una tabla para que funcione debe esta adentro de la etiqueta table.

```html
<colgroup>
  <col>
  <col span="2" class="batman">
  <col span="2" class="flash">
</colgroup>
```

## etiqueta col

esta etiqueta define cuantas columnas debe ocupar un th o td.

```html
<col span="2" class="batman">
```

| Atributos | Descripción |
| ----------- | ----------- |
| span | este atributo define el numero de columnas para ciertas celdas por defecto es 1 |