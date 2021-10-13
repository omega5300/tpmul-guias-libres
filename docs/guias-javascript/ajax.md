# ajax

ajax por su acronimo (Asynchronous JavaScript and XML) aunque no es una tecnología en sí misma, es un término acuñado en 2005 por Jesse James Garrett, que describe un enfoque "nuevo" para el uso de una serie de tecnologías existentes juntos, incluyendo HTML o XHTML , CSS , JavaScript , DOM , XML , XSLT y, lo más importante, elXMLHttpRequestobjeto.

Cuando estas tecnologías se combinan en el modelo Ajax, las aplicaciones web pueden realizar actualizaciones incrementales y rápidas en la interfaz de usuario sin recargar toda la página del navegador. Esto hace que la aplicación sea más rápida y responda mejor a las acciones del usuario.

Aunque X en Ajax significa XML, JSON se prefiere sobre XML hoy en día debido a sus muchas ventajas, como ser parte de JavaScript, por lo que es más liviano. Tanto JSON como XML se utilizan para empaquetar información en el modelo Ajax.

## callbacks

una función es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

``` js
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

El ejemplo anterior es una devolución de llamada sincrónica , ya que se ejecuta inmediatamente.

Sin embargo, tenga en cuenta que las devoluciones de llamada se utilizan a menudo para continuar la ejecución del código después de que se haya completado una operación asincrónica ; se denominan devoluciones de llamada asincrónicas. Un buen ejemplo son las funciones de devolución de llamada ejecutadas dentro de un .then()bloque encadenado al final de una promesa después de que esa promesa se cumple o se rechaza. Esta estructura se utiliza en muchas API web modernas, como fetch().

::: warning dato importante
el sobreuso de callback puede ser riesgoso al usar muchos callback puedes generar la famosa piramide de la muerte o conocido como el callback hell se recomienda el menor uso posible
:::

## XMLHTTPRequest

XMLHttpRequest Los objetos (XHR) se utilizan para interactuar con los servidores. Puede recuperar datos de una URL sin tener que actualizar la página completa. Esto permite que una página web actualice solo una parte de una página sin interrumpir lo que está haciendo el usuario.

el el pionero en la implementacion de ajax propuesto por microsoft

``` js
function reqListener () {
  console.log(this.responseText);
}

function ajax() {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://www.example.org/example.txt");
  oReq.send();
}
```

- XMLHttpRequest(): El constructor inicializa un XMLHttpRequest. Debe llamarse antes que cualquier otro método.

- XMLHttpRequest.onreadystatechange: Un controlador de eventos al que se llama cada vez que readyStatecambia el atributo.

- XMLHttpRequest.readyState: Devuelve un unsigned short, el estado de la solicitud.

- XMLHttpRequest.reponse: Devuelve una ArrayBuffer, Blob, Document, objeto de JavaScript, o una DOMString, dependiendo del valor de XMLHttpRequest.responseType, que contiene el cuerpo de la entidad respuesta.

- XMLHttpRequest.reponseText: Devuelve un DOMStringque contiene la respuesta a la solicitud como texto, o nullsi la solicitud no tuvo éxito o aún no se ha enviado.

- XMLHttpRequest.responseType: Es un valor enumerado que define el tipo de respuesta.

- XMLHttpRequest.responseURL: Devuelve la URL serializada de la respuesta o la cadena vacía si la URL es nula.

- XMLHttpRequest.responseXML: Devuelve un que Documentcontiene la respuesta a la solicitud, o nullsi la solicitud no tuvo éxito, aún no se ha enviado o no se puede analizar como XML o HTML. No disponible en trabajadores.

- XMLHttpRequest.status: Devuelve un unsigned shortcon el estado de la respuesta de la solicitud.

- XMLHttpRequest.statusText: Devuelve un que DOMStringcontiene la cadena de respuesta devuelta por el servidor HTTP. A diferencia XMLHttpRequest.status, esto incluye el texto completo del mensaje de respuesta (" 200 OK", por ejemplo).

- XMLHttpRequest.timeout: Es una unsigned longque representa el número de milisegundos que una solicitud puede tomar antes de ser terminado automáticamente.

- XMLHttpRequest.ontimeout: Es un controlador de eventos al que se llama cada vez que se agota el tiempo de espera de la solicitud.

- XMLHttpRequest.upload: Es un XMLHttpRequestUpload, que representa el proceso de carga.

- XMLHttpRequest.withCredentials: Es un valor booleano que indica si las Access-Controlsolicitudes entre sitios deben realizarse utilizando credenciales como cookies o encabezados de autorización.

- XMLHttpRequest.abort(): Anula la solicitud si ya se ha enviado.

- XMLHttpRequest.getAllResponseHeaders(): Devuelve todos los encabezados de respuesta, separados por CRLF , como una cadena, o nullsi no se ha recibido respuesta.

- XMLHttpRequest.getResponseHeader(): Devuelve la cadena que contiene el texto del encabezado especificado, o nullsi la respuesta aún no se ha recibido o el encabezado no existe en la respuesta.

- XMLHttpRequest.open(): Inicializa una solicitud.

- XMLHttpRequest.overrideMimeType(): Reemplaza el tipo MIME devuelto por el servidor.

- XMLHttpRequest.send(): Envía la solicitud. Si la solicitud es asincrónica (que es el valor predeterminado), este método regresa tan pronto como se envía la solicitud.

- XMLHttpRequest.setRequestHeader(): Establece el valor de un encabezado de solicitud HTTP. Debes llamar setRequestHeader() después open(), pero antes send().

- XMLHttpRequest.addEventListener(): similar a los addEventListener de DOM con diferencias solo enfocados a XMLHttpRequest
  - abort: Se activa cuando se cancela una solicitud, por ejemplo, porque el programa llamó XMLHttpRequest.abort(). También disponible a través de la propiedad onabort.
  - error: Se activa cuando la solicitud encontró un error. También disponible a través de la propiedad onerror.
  - load: Se activa cuando una XMLHttpRequesttransacción se completa con éxito. También disponible a través de la propiedad onload.
  - loadend: Se activa cuando se completa una solicitud, ya sea con éxito (después load) o sin éxito (después aborto error). También disponible a través de la propiedad onloadend.
  - loadstart: Se activa cuando una solicitud ha comenzado a cargar datos. También disponible a través de la propiedad onloadstart.
  - progress: Se activa periódicamente cuando una solicitud recibe más datos. También disponible a través de la propiedad onprogress.
  - timeout: Se dispara cuando el progreso finaliza debido a que expira el tiempo preestablecido. También disponible a través de la propiedad ontimeout.

## promesas

El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

A Promisees un proxy de un valor que no se conoce necesariamente cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o la razón del fracaso de una acción asincrónica. Esto permite que los métodos asincrónicos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asincrónico devuelve una promesa de proporcionar el valor en algún momento en el futuro.

una promise o Promise está en uno de estos estados:
- pending: estado inicial, ni cumplido ni rechazado.
- fulfilled: significa que la operación se completó con éxito.
- rejected: significa que la operación falló.

### metodos de promesas e metodos de interacción

para la interacion debemos usar la instacia de Promise

``` js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr.statusText)
    xhr.send()
  });
}
```

- Promise.all(iterable): Espere a que se resuelvan todas las promesas o que alguna sea rechazada.

Si la promesa devuelta se resuelve, se resuelve con una matriz agregada de los valores de las promesas resueltas, en el mismo orden que se define en el iterable de múltiples promesas.

Si rechaza, se rechaza con el motivo de la primera promesa en el iterable que fue rechazado.
  ``` js
  const p1 = Promise.resolve(3);
  const p2 = 1337;
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 100);
  });
  
  Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // [3, 1337, "foo"]
  });
  ```
- Promise.allSettled(iterable): Espere hasta que todas las promesas se hayan resuelto (cada una puede resolverse o rechazar).

Devuelve una Promesa que se resuelve después de que todas las promesas dadas se cumplen o se rechazan, con una serie de objetos que describen el resultado de cada promesa.
  ``` js
  Promise.allSettled([
  Promise.resolve(33),
  new Promise(resolve => setTimeout(() => resolve(66), 0)),
    99,
    Promise.reject(new Error('an error'))
  ])
  .then(values => console.log(values));

  // [
  //   {status: "fulfilled", value: 33},
  //   {status: "fulfilled", value: 66},
  //   {status: "fulfilled", value: 99},
  //   {status: "rejected",  reason: Error: an error}
  // ]
  ```
- Promise.any(iterable): Toma un iterable de objetos Promise y, tan pronto como se cumpla una de las promesas en el iterable, devuelve una única promesa que se resuelve con el valor de esa promesa.
  ``` js
  const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value); // pFast fulfils first
  })
  // expected output: "Done quick"
  ```
- Promise.race(iterable): Espere hasta que se cumpla o rechace alguna de las promesas.

Si la promesa devuelta se resuelve, se resuelve con el valor de la primera promesa en el iterable que se resolvió.

Si rechaza, se rechaza con el motivo de la primera promesa que fue rechazada.
  ``` js
  const foreverPendingPromise = Promise.race([]);
  console.log(foreverPendingPromise);
  setTimeout(function(){
    console.log('the stack is now empty');
    console.log(foreverPendingPromise);
  });
  
  // logs, in order:
  // Promise { <state>: "pending" }
  // the stack is now empty
  // Promise { <state>: "pending" }
  ```
- Promise.reject(reason): Devuelve un nuevo Promiseobjeto que se rechaza con el motivo indicado.
  ``` js
  Promise.reject(new Error('fail')).then(function() {
  // not called
  }, function(error) {
    console.error(error); // Stacktrace
  });
  ```
- Promise.resolve(value): Devuelve un nuevo Promiseobjeto que se resuelve con el valor dado. Si el valor es thenable (es decir, tiene un thenmétodo), la promesa devuelta "seguirá" a ese thenable, adoptando su estado eventual; de lo contrario, la promesa devuelta se cumplirá con el valor.

Generalmente, si no sabe si un valor es una promesa o no, en Promise.resolve(value)su lugar, trabaje con el valor de retorno como una promesa.
  ``` js
  Promise.resolve('Success').then(function(value) {
    console.log(value); // "Success"
  }, function(value) {
  // not called
  });

  ```
- Promise.prototype.catch(): Agrega una devolución de llamada del controlador de rechazo a la promesa y devuelve una nueva promesa que se resuelve en el valor de retorno de la devolución de llamada si se llama, o en su valor de cumplimiento original si la promesa se cumple.
- Promise.prototype.then(): Agrega controladores de cumplimiento y rechazo a la promesa y devuelve una nueva promesa que se resuelve en el valor de retorno del controlador llamado, o en su valor establecido original si la promesa no se manejó (es decir, si el controlador relevante onFulfilledo onRejectedno es una función).
- Promise.prototype.finally(): Agrega un controlador a la promesa y devuelve una nueva promesa que se resuelve cuando se resuelve la promesa original. Se llama al manipulador cuando se establece la promesa, ya sea cumplida o rechazada.

``` js
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Mail has arrived');
    } else {
      reject(new Error('Failed to arrive'));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
  });
```

## fetch

método global inicia el proceso de obtener un recurso de la red, devolviendo una promesa que se cumple una vez que la respuesta está disponible.

La promesa se resuelve en el Responseobjeto que representa la respuesta a su solicitud. La promesa no rechaza los errores HTTP, solo rechaza los errores de red. Debe utilizar thencontroladores para comprobar si hay errores HTTP.

WindowOrWorkerGlobalScopees implementado por ambos Windowy WorkerGlobalScope, lo que significa que el fetch()método está disponible en prácticamente cualquier contexto en el que desee obtener recursos.

Una fetch()promesa solo se rechaza cuando se encuentra un error de red (que suele ser cuando hay un problema de permisos o similar). Una fetch()promesa no rechaza los errores HTTP ( 404, etc.). En su lugar, un then()manejador debe verificar las propiedades Response.oky / o Response.status.

El fetch()método está controlado por la connect-srcdirectiva de la Política de seguridad de contenido en lugar de la directiva de los recursos que está recuperando.

### parametros de fetch

- resource: un string de tipo url
- init: parametro opcional: Un objeto que contiene cualquier configuración personalizada que desee aplicar a la solicitud. Las posibles opciones son:
  - method: metodo de la peticion ejemplo GET o POST
  - headers: Cualquier encabezado que desee agregar a su solicitud, contenido dentro de un Headersobjeto o un objeto literal con String valores. Tenga en cuenta que algunos nombres están prohibidos [parametros prohibidos](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name).
  - body: Cualquier cuerpo que desea agregar a su solicitud: esto puede ser una Blob, BufferSource, FormData, URLSearchParams, USVString, o ReadableStreamobjeto. Tenga en cuenta que una solicitud que utilice el método GETo HEADno puede tener cuerpo.
  - mode: El modo en el que desea utilizar para la solicitud, por ejemplo, cors, no-cors, o same-origin.
  - credentials: Controla lo que hacen los navegadores con las credenciales ( cookies , entradas de autenticación HTTP y certificados de cliente TLS). Debe ser una de las siguientes cadenas: omit, same-origin, include
  - cache: Una cadena que indica cómo interactuará la solicitud con la caché HTTP del navegador . Los valores posibles, default, no-store, reload, no-cache, force-cache, y only-if-cached, se documentan en el artículo de la cachepropiedad del Requestobjeto.
  - redirect: Cómo manejar una redirectrespuesta: follow, error, manual
  - referrer: USVStringespecificando la referencia de la solicitud. Puede ser una URL del mismo origen about:cliento una cadena vacía.
  - referrerPolicy: Especifica el política de referenciasutilizar para la solicitud. Puede ser uno de no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, o unsafe-url.
  - integrity: Contiene el valor de integridad del recurso secundario de la solicitud (por ejemplo, sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).
  - keepalive: La keepaliveopción se puede utilizar para permitir que la solicitud sobreviva a la página. Obtener con la keepalivebandera es un reemplazo de la Navigator.sendBeacon()API.
  - signal: Una AbortSignalinstancia de objeto; le permite comunicarse con una solicitud de recuperación y cancelarla si lo desea a través de un archivo AbortController.
  
cuando usamos fetch nos devuelve en un objeto Response

``` js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

## async / await

mejor conocidas como funciones asincronas Una función asíncrona es una función declarada con la  asyncpalabra clave, y la awaitpalabra clave está permitida dentro de ellos. Las palabras clave asyncy awaitpermiten que el comportamiento asincrónico basado en promesas se escriba con un estilo más limpio, evitando la necesidad de configurar explícitamente cadenas de promesas.

otra forma tambien valida el ciclo for await...of crea un bucle de iteración sobre async iterable objetos, así como en iterables de sincronización, que incluye: una función de String, Array,  Array-como los objetos (por ejemplo,  argumentso  NodeList), TypedArray, Map, Set, y asíncrono / sync iterables definida por el usuario. Invoca un gancho de iteración personalizado con declaraciones que se ejecutarán para el valor de cada propiedad distinta del objeto. Esta declaración solo se puede usar dentro de una función asincorna.

``` js
// async await function
const ajax = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch(err) {
    console.error(err);
  }
};

ajax('https://jsonplaceholder.typicode.com/todos/1')

// for await...of
const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
   for await (let num of asyncIterable) {
     console.log(num);
   }
})();

// 0
// 1
// 2

```


