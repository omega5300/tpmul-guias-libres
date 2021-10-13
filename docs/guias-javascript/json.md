# JSON

por su acronimo JavaScript Object Notation (JSON) es un formato de intercambio de datos. Aunque no es un subconjunto estricto, JSON se parece mucho a un subconjunto de la sintaxis de JavaScript . Aunque muchos lenguajes de programación admiten JSON, es especialmente útil para aplicaciones basadas en JavaScript, incluidos sitios web y extensiones de navegador.

## diferencias entre javascript y JSON

JSON es una sintaxis para serializar objetos, matrices, números, cadenas, valores booleanos y null. Se basa en la sintaxis de JavaScript, pero es diferente de ella: algunos JavaScript no son JSON.

- Objetos y matrices: Los nombres de propiedad deben ser cadenas entre comillas dobles; Las comas finales están prohibidas.

- numeros: Se prohíben los ceros iniciales. Un punto decimal debe ir seguido de al menos un dígito. NaNy Infinity no son compatibles.

``` json
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
```

### valores admitidos en JSON

- objects
- arrays
- strings
- numbers
- booleans
- null

## json methods

``` js
/*
  JSON.parse
  Analizar la cadena textcomo JSON, transformar opcionalmente el valor
  producido y sus propiedades y devolver el valor. Cualquier violación de la
  sintaxis JSON, incluidas las relacionadas con las diferencias entre
  JavaScript y JSON, provocará SyntaxErrorque se lance un. La reviver opción
  permite interpretar lo que replacerha utilizado para reemplazar otros tipos
  de datos.
*/
JSON.parse('{}'); // {}

/*
  JSON.stringify
  Devuelve una cadena JSON correspondiente al valor especificado, que
  opcionalmente incluye solo ciertas propiedades o reemplaza los valores de
  propiedad de una manera definida por el usuario. De forma predeterminada,
  todas las instancias de undefinedse reemplazan por nully se censuran otros
  tipos de datos nativos no compatibles. La replacer opción permite
  especificar otro comportamiento.
*/
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}

```