# errores comunes

en CSS gran parte cometemos errores al momento de escribir codigo CSS y encontramos ciertas malas practicas que algunas ocasiones son dificiles de evitar estas son: 

- abuso de ID: el selector id se usa muy poco en CSS sobre-utilizarlo aumentar la especificidad de nuestra hoja CSS recomendable usar clases y poco o sin selectores de ID

- evitar los estilos de linea: una mala práctica es definir estilos CSS a nivel de documento o, peor aún, por etiqueta HTML.

El valor del CSS es lograr separar la gestión gráfica de la estructura semántica del documento. Así, si en algún momento se requiere ajustar la apariencia del sitio web no hay necesidad de afectar los contenidos. recomendable si vas a utilizar estilos en linea debes empleado desde javascript si se trata de estilos dinamicos.
  ``` html
  <p style="color: green;">hola mundo</p>
  ```

- declaración !important: Y profundizando aún más, está la declaración !important.

Esta permite es ignorar cualquier instrucción previa, independiente si está en un CSS externo, en el HEAD o a nivel de línea HTML.

Con !important se está forzando al navegador a definir una declaración CSS.

Su uso puede dificultar la gestión futura de los estilos y, cuando menos, demuestra errores en la construcción semántica de los documentos.

Personalmente, esta declaración la utilizo como último recurso y en productos de terceros. Cuando se trata de diseños propios, para mí, es evidencia que algo estoy haciendo mal.
  ``` css
  p {
    color: #df4 !important;
  }
  ```
- modificar un componente en funciòn de otro: Es una práctica habitual dentro de los nuevos desarrolladores de CSS (en ocasiones incluso los experimentados) modificar uno o más componentes en base a un padre único escribiendo una nueva regla para gestionarlo, como en este ejemplo
  ``` css
  .card {
    max-width: 80%;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
  }
  
  #post .card {
    max-width: 35%;
    border-color: #999;
    background-color: #e5e5e5;
  }
  
  .home .card {
    background-color: #333;
    color: #fff;
  }
  ```
  
- selectores complejos: Todos sabemos que podemos usar selectores de etiqueta sin recurrir a clases o IDs y con ellos crear selectores sencillos y complejos. Un selector de etiquetas complejo resultar ser muy vinculado al código HTML.
  ``` css
  #navbar nav ul li div a { ... }
  
  #main article p:first-child { ... }
  
  #footer > div > p ~ ul { ... }
  ```
  
- no repita el mismo codigo: en todos los lenguajes CSS no se salva es comun encontrar con ciertos selectores que se repite las mismas propiedades eso se conoce como DRY (don't repeat yourself) en español no te repitas por si (solo/mismo)
  ``` css
  /* bad */
  h1 {
    color: #555;
  }
  
  p {
    color: #555;
  }
  
  /* good */
  p, h1 {
    color: #555;
  }
  ```
  
- usar mal el selector universal: es comun que se mal acostrumbre a utiizar el selector universal para quitar los margin y paddings por defecto es un error y a la vez perdida de tiempo colocar elemento por elemento y resulta problematico
  ``` css
  * {
    margin: 0;
    padding: 0;
  }
  ```
  
- no comentar el codigo: en no comentar resulta que el desarrollador se pueda perder facilmente si no tiene ayudas necesarias para mejorar o corregir. 