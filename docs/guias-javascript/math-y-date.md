# math y date

el javascript podemos utilizar funciones para manipular funciones matematicas, y la manipulación de fechas

## math

Mathes un objeto integrado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.

A diferencia de muchos otros objetos globales, Mathno es un constructor. Todas las propiedades y métodos de Mathson estáticos. Se refiere a la constante pi como Math.PIy llama a la función seno como Math.sin(x), donde xes el argumento del método. Las constantes se definen con la precisión total de números reales en JavaScript.

> no funciona con BigInt

``` js
Math.E // Constante de Euler y base de logaritmos naturales; aproximadamente 2.718

Math.LN2 // Logaritmo natural de 2; aproximadamente 0.693.

Math.LN10 // Logaritmo natural de 10; aproximadamente 2.303.

Math.LOG2E // Logaritmo en base 2 de E; aproximadamente 1.443.

Math.LOG10E // Logaritmo de base 10 de E; aproximadamente 0.434.

Math.PI // Relación entre la circunferencia de un círculo y su diámetro; aproximadamente 3.14159.

Math.SQRT1_2 // Raíz cuadrada de ½; aproximadamente 0.707.

Math.SQRT2 // Raíz cuadrada de 2; aproximadamente 1.414.

Math.abs(x) // devuelve el valor absoluto de x

Math.acos(x) // Devuelve el arcocoseno de x.

Math.acosh(x) // Devuelve el arcocoseno hiperbólico de x.

Math.asin(x) // Devuelve el arcoseno de x.

Math.asinh(x) // Devuelve el arcoseno hiperbólico de un número.

Math.atan(x) // Devuelve el arcotangente de x.

Math.atanh(x) // Devuelve el arcangente hiperbólico de x.

Math.atan2(y, x) // Devuelve el arcotangente del cociente de sus argumentos.

Math.cbrt(x) // Devuelve la raíz cúbica de x.

Math.ceil(x) // Devuelve el número entero más pequeño mayor o igual que x.

Math.clz32(x) // Devuelve el número de bits cero iniciales del entero de 32 bits x.

Math.cos(x) // Devuelve el coseno de x.

Math.cosh(x) // Devuelve el coseno hiperbólico de x.

Math.exp(x) // Devuelve e^x, donde xes el argumento y ees la constante de 
Euler ( 2.718…, la base del logaritmo natural).

Math.expm1(x) // Devuelve restando 1de exp(x).

Math.floor(x) // Devuelve el entero más grande menor o igual que x.

Math.fround(x) // Devuelve el más cercano precisión simplerepresentación 
flotante de x.

Math.hypot([x[, y[, ..]]]) // Devuelve la raíz cuadrada de la suma de cuadrados de sus argumentos.

Math.imul(x, y) // Devuelve el resultado de la multiplicación de enteros de 32 bits de xy y.

Math.log(x) // Devuelve el logaritmo natural (㏒ e ; también, ㏑) de x.

Math.log1p(x) // Devuelve el logaritmo natural (㏒ e ; también ㏑) de 1 + xpara el número x.

Math.log10(x) // Devuelve el logaritmo en base 10 de x.

Math.log2(x) // Devuelve el logaritmo en base 2 de x.

Math.max([x[, y[, ..]]]) // Devuelve el mayor de cero o más números.

Math.min([x[, y[, ..]]]) // Devuelve el menor de cero o más números.

Math.pow(x, y) // Devuelve la base xa la potencia del exponente y(es decir, x^y).

Math.random() // Devuelve un número pseudoaleatorio entre 0y 1.

Math.round(x) // Devuelve el valor del número xredondeado al entero más cercano.

Math.sign(x) // Devuelve el signo de x, que indica si xes positivo, negativo o cero.

Math.sin(x) // Devuelve el seno de x.

Math.sinh(x) // Devuelve el seno hiperbólico de x.

Math.sqrt(x) // Devuelve la raíz cuadrada positiva de x.

Math.tan(x) // Devuelve la tangente de x.

Math.tanh(x) // Devuelve la tangente hiperbólica de x.

Math.trunc(x) // Devuelve la parte entera de x, eliminando los dígitos fraccionarios.
```

## date

Los Date son objetos de JavaScript representan un único momento en el tiempo en un formato independiente de la plataforma. Datelos objetos contienen un Numberque representa milisegundos desde el 1 de enero de 1970 UTC.

> para su uso se debe emplear el operador new y mejor recomendacion que este almaceanda en una variable

```
// using date
const date = new Date(); // si el dato es vacio usar la fecha actual
```

### metodos

- Date.now(): Devuelve el valor numérico correspondiente a la hora actual: el número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC, con los segundos intercalares ignorados.

- Date.parse(): Analiza una representación de cadena de una fecha y devuelve el número de milisegundos desde el 1 de enero de 1970 a las 00:00:00 UTC, con los segundos intercalares ignorados.

- Date.UTC(): Acepta los mismos parámetros que la forma más larga del constructor (es decir, de 2 a 7) y devuelve el número de milisegundos desde el 1 de enero de 1970 a las 00:00:00 UTC, con los segundos intercalares ignorados.

- Date.prototype.getDate(): Devuelve el día del mes (1 - 31) para la fecha especificada según la hora local.

- Date.prototype.getDate(): Devuelve el día de la semana (0 - 6) para la fecha especificada según la hora local.

- Date.prototype.getFullYear(): Devuelve el año (4 dígitos para años de 4 dígitos) de la fecha especificada según la hora local.

- Date.prototype.getHours(): Devuelve la hora (0 - 23) de la fecha especificada según la hora local.

- Date.prototype.getMilliseconds(): Devuelve los milisegundos (0 - 999) en la fecha especificada según la hora local.

- Date.prototype.getMinutes(): Devuelve los minutos (0 - 59) de la fecha especificada según la hora local.

- Date.prototype.getMonth(): Devuelve el mes (0 - 11) en la fecha especificada según la hora local.

- Date.prototype.getSeconds: Devuelve los segundos (0 - 59) en la fecha especificada según la hora local.

- Date.prototype.getTime(): Devuelve el valor numérico de la fecha especificada como el número de milisegundos desde el 1 de enero de 1970 a las 00:00:00 UTC. (Los valores negativos se devuelven para tiempos anteriores).

- Date.prototype.getTimezoneOffset(): Devuelve el desplazamiento de la zona horaria en minutos para la configuración regional actual.

- Date.prototype.GetUTCDate(): Devuelve el día (fecha) del mes (1 - 31) en la fecha especificada según la hora universal.

- Date.prototype.getUTCDay(): Devuelve el día de la semana (0 - 6) en la fecha especificada según la hora universal.

- Date.prototype.getUTCFullYear(): Devuelve el año (4 dígitos para años de 4 dígitos) en la fecha especificada según la hora universal.

- Date.prototype.getUTCHours(): Devuelve las horas (0 - 23) en la fecha especificada según la hora universal.

- Date.prototype.getUTCMilliseconds(): Devuelve los milisegundos (0 - 999) en la fecha especificada según la hora universal.

- Date.prototype.getUTCMinutes(): Devuelve los minutos (0 - 59) de la fecha especificada según la hora universal.

- Date.prototype.getUTCMonth(): Devuelve el mes (0 - 11) en la fecha especificada según la hora universal.

- Date.prototype.getUTCSeconds(): Devuelve los segundos (0 - 59) de la fecha especificada según la hora universal.

- Date.prototype.getYear(): Devuelve el año (normalmente de 2 a 3 dígitos) en la fecha especificada según la hora local. Úselo en su lugar getFullYear().

- Date.prototype.setDate(): Establece el día del mes para una fecha específica según la hora local.

- Date.prototype.setFullYear(): Establece el año completo (por ejemplo, 4 dígitos para años de 4 dígitos) para una fecha específica de acuerdo con la hora local.

- Date.prototype.setHours(): Establece las horas de una fecha específica según la hora local.

- Date.prototype.setMilliseconds(): Establece los milisegundos para una fecha específica según la hora local.

- Date.prototype.setMinutes(): Establece los minutos para una fecha específica según la hora local.

- Date.prototype.setMonth(): Establece el mes para una fecha específica según la hora local.

- Date.prototype.setSeconds(): Establece los segundos para una fecha específica según la hora local.

- Date.prototype.setTime(): Establece el Dateobjeto en la hora representada por varios milisegundos desde el 1 de enero de 1970 a las 00:00:00 UTC. Utilice números negativos para tiempos anteriores.

- Date.prototype.setUTCDate(): Establece el día del mes para una fecha específica según la hora universal.

- Date.prototype.setUTCFullYear(): Establece el año completo (por ejemplo, 4 dígitos para años de 4 dígitos) para una fecha especificada de acuerdo con la hora universal.

- Date.prototype.setUTCHours(): Establece la hora de una fecha específica según la hora universal.

- Date.prototype.setUTCMilliseconds(): Establece los milisegundos para una fecha especificada según la hora universal.

- Date.prototype.setUTCMinutes(): Establece los minutos de una fecha específica según la hora universal.

- Date.prototype.setUTCMonth(): Establece el mes para una fecha especificada según la hora universal.

- Date.prototype.setUTCSeconds(): Establece los segundos para una fecha específica según la hora universal.

- Date.prototype.setYear(): Establece el año (normalmente de 2 a 3 dígitos) para una fecha específica según la hora local. Úselo en su lugar setFullYear().

- Date.prototype.toDateString(): Devuelve la parte de la "fecha" Datecomo una cadena legible por humanos como 'Thu Apr 12 2018'.

- Date.prototype.toISOString(): Convierte una fecha en una cadena siguiendo el formato extendido ISO 8601.

- Date.prototype.toJSON(): Devuelve una cadena que representa el Dateuso toISOString(). Destinado a ser utilizado por JSON.stringify().

- Date.prototype.toGMTString(): Devuelve una cadena que representa el Datebasado en la zona horaria GMT (UTC). Úselo en su toUTCString()lugar.

- Date.prototype.toLocaleDateString(): Devuelve una cadena con una representación sensible a la localidad de la parte de la fecha de esta fecha según la configuración del sistema.

- Date.prototype.toLocaleString(): Devuelve una cadena con una representación sensible a la localidad de esta fecha. Anula el método Object.prototype.toLocaleString().

- Date.prototype.toLocaleTimeString(): Devuelve una cadena con una representación sensible a la localidad de la parte de tiempo de esta fecha, según la configuración del sistema.

- Date.prototype.toString(): Devuelve una cadena que representa el Dateobjeto especificado. Anula el método Object.prototype.toString().

- Date.prototype.toTimeString(): Devuelve la parte de "tiempo" de Datecomo una cadena legible por humanos.

- Date.prototype.toUTCString(): Convierte una fecha en una cadena utilizando la zona horaria UTC.

- Date.prototype.valueOf(): Devuelve el valor primitivo de un Dateobjeto. Anula el método Object.prototype.valueOf().