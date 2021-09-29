# ejemplos de CSS

vamos a mostrar un ejemplo de funciona CSS se empieza por un selector en este caso la etiqueta body se debe abrir parentesis dentro de los parentesis se colocar el nombre de la propiedad dos puntos ejemplo: "background:" espacio seguido de un valor finalizado por punto y coma "2px;"

``` css
body {
 --color: #555;
 font-size: 20px;
 color: var(--color);
}
```

## como utilizar el CSS

se puede utilizar el CSS de diferentes formas

- por medio de la etiqueta link 
  ``` html
  <link rel="stylesheet" href="style.css">
  ```
- por medio la etiqueta style
  ``` html
  <style>
    body {
      color: #f00;
    }
  </style>
  ```
  > solo es usando si trabajas solo con un archivo html en caso que son para diseñar un email o trabajando con web components.
  
- por estilos en linea 
  ``` html
  <p style="color: green;">hola mundo</p>
  ```
  > solo se usan estilos en linea si trata de estilos dinamicos por medio de javascript no se debe emplear si usas paginas estaticas eso los motores de busqueda te sanciona en los resultados