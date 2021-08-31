# listas

son elementos esenciales para las paginas web usado en diccionarios, carro de compras entre otras su uso mas esencial es para menús de navegación.

## etiqueta ul

esta etiqueta representa como lista desordenada no lleva un orden en especifico.

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

| Atributos | Descripción |
| ----------- | ----------- |
| type | este atributo sirve para cambiar la viñeta de la lista es actualmente un atributo obsoleto para favorecer al CSS |
| compact | es un atributo booleano que representa un estilo compacto a la lista no fue aprobado por todos los navegadores |

## etiqueta ol

esta etiqueta es lo opuesto de ul; representa una lista ordenada esta si lleva orden es utilizada para documentación o sitios como ejemplo Wikipedia.

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

| Atributos | Descripción |
| ----------- | ----------- |
| reversed | atributo booleano utilizado para dar orden en inverso |
| start | este atributo indica en donde comienza la lista por defecto siempre inicia en el primer valor de la lista |
| type | especificar el set conjuntos para lista ordenada el valor por defecto son números podemos usar los números romanos o letras de la a a la z tanto mayúsculas como minúsculas |

## etiqueta li

esta etiqueta es para item de la lista se colocar tanto en ul como ol y la etiqueta experimental menú.

```html
<li>Fum</li>
```

## etiqueta data

esta etiqueta representa una traducción al lenguaje maquina como el id o valor de un producto es poco usando y es recomendable.

```html
<p>New Products</p>
<ul>
 <li><data value="398">Mini Ketchup</data></li>
 <li><data value="399">Jumbo Ketchup</data></li>
 <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

| Atributos | Descripción |
| ----------- | ----------- |
| value | representa el valor escrito para la etiqueta data |

## etiqueta dl

esta etiqueta representa una lista de definiciones ideal para crear diccionarios es poco usada pero es ideal si vas a crear un diccionario web

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

## etiqueta dd

esta etiqueta sirve para dar la definición de un elemento para el diccionario
cada vez que creamos una lista de definiciones cada objeto siempre de empieza por un dt

```html
<dt>Firefox</dt>
```

## eitqueta dt

esta etiqueta es para dar descripción del cada elemento dd es decir representa la descripción de cada termino o objeto de nuestra lista de definiciones

```html
<dd>
  A free, open source, cross-platform,
  graphical web browser developed by the
  Mozilla Corporation and hundreds of
  volunteers.
</dd>
```

## etiqueta menu

esta etiqueta es experimental en función semántica representa el menú del navegación sirve como una alternativa a la etiqueta ul hasta que sea standard.

```html
<menu>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</menu>
```