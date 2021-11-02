# redes

en producción multimedia no es solo audiovisual tambien debemos conocer algo de redes en el concepto de como funciona y entender algo pero no abarcar todo, el resto de conocimientos sobre redes es mas de ing. multimedia o sus hermanos pero se puede conocer lo esencial.

## que es red

es un conjunto de entidades conectadas entre si. es aquella conformada por generadores eléctricos, transformadores, líneas de transmisión y líneas de distribución, que se encargan de llevar la electricidad a los usuarios.

bajo el concepto informatico nombra un conjunto de computadoras y otros equipos interconectados, que comparten información, recursos y servicios.

## historia

las redes de computadoras tienen sus origenes en la decada de 1960's cuando surgen la necesidad de poder comunicar la información presente en las universidades y las grandes empresas.

las primeras redes cubrían granades extensiones geográficas, posteriomente empezaron a aparecer redes de extensión más corta.

- 1969 la creación de arpanet.
- 1970 el desarrollo de las redes de computadores
- 1980 la llegada de la red a los negocios
- 1990 al publico general

## internet

es un sistema mundial de ordenadores interconectados. es una via de comunicación que los usuarios, grupos y comunidades alrededor del mundo lo utilizan para cooperar, colaborar y compartir recusos informáticos.

cada ordenador conectado a internet puede comunicarse con todos los otros ordenadores conectados.

### protocolos

los protocolos mas importantes que todo productor multimedia debe saber son:

### tcp/ip

Transfer Control Protocol/Internet Protocol es un sistema informatico que puede enviar y recibir datos a través de internet. las direcciones ip son el equivalente a un documento de identidad por medio de binarios o el rango numerico de 0 a 255 ej: 159.66.44

### dns

los DNS o nombres de dominio que identifica a los sitios o aplicaciones web son unicos que no se puede repetir. 
ejemplo: https://google.com es un DNS que no se repite 

| dominio | pais o tipo |
| ----------- | ----------- |
| ar | argentina |
| br | brasil |
| cl | chile |
| co | colombia |
| es | españa |
| it | italia |
| mx | mexico |
| ve | venezuela |
| com | comercial |
| edu | educativo |
| gov | gubernamental |
| mil | militar |
| net | recursos de red |
| org | organizaciones u otros |
| app | aplicacion (implementado por google) |
| web | web (implementado por google) |
| art | arte (poco conocido) |
| movie | pelicula (poco conocido) |
| shop | tiendas |
| travel | viajes |
| io | Territorio Británico del Océano Índico (usando en github pages o similares) |
| wiki | sitios de informativo tipo wikipedia |
| live | en algunos servicios de streaming |

### www y web

www por su acronimo la world wide web fue creada por Tim Berners-Lee las páginas que forman parte de la World Wide Web deben incluir las iniciales “www” al principio de su dirección DNS y pueden publicarse con facilidad e incluso gratuitamente.

El crecimiento en la cantidad de información que se publica cada día en la web ha sido exponencial, por lo que se han creado herramientas para encontrarla y organizarla.

- web 1.0: paginas informativas de puro texto
- web 2.0: redes social o de participación
- web 3.0: vision en tres dimesiones de la web
- web 4.0: inteligencia artificial y/o web movil

## http

hypertext transfer protocol en español protocolo de transferencia de hypertexto en uno de los protocolo que llegaron junto con la web

son lo ensencial para el manejo de los recursos web se usar dos el http normal que es sitios no seguros o locales y el https son sitios seguros que posee certtificaciones seguras

### codigos http

| numero | descripción |
| ----------- | ----------- |
| 100 | conrinue |
| 101 | switching protocol |
| 102 | processing |
| 103 | early hints |
| 200 | ok |
| 201 | created |
| 202 | accepted |
| 203 | non-authoritative information |
| 204 | no content |
| 205 | reset content |
| 206 | partial content |
| 207 | multi-status |
| 208 | multi-status |
| 226 | im used |
| 300 | multiple choice |
| 301 | moved permanently |
| 302 | found |
| 303 | see other |
| 304 | not modified |
| 305 | use proxy |
| 306 | unused |
| 307 | temporary redirect |
| 308 | permanent redirect |
| 400 | bad request |
| 401 | unauthorized |
| 402 | payment required |
| 403 | forbidden |
| 404 | not found |
| 405 | method not allowed |
| 406 | not acceptable |
| 407 | proxy authentication required |
| 408 | request timeout |
| 409 | conflict |
| 410 | gone |
| 411 | length required |
| 412 | precondition failed |
| 413 | payload too large |
| 414 | URI too long |
| 415 | unsupported media type |
| 416 | requested range not satisfiable |
| 417 | expectation failed |
| 418 | i'n a teapot |
| 421 | misdirected request |
| 422 | unprocessable entity |
| 423 | locked |
| 424 | 426 upgrade required |
| 428 | precondition required |
| 429 | too many requests |
| 431 | request header fields |
| 451 | unvailable for legal reasons |
| 500 | internal server error |
| 501 | not implemented |
| 502 | bad gateway |
| 503 | service unavailable |
| 504 | gateway timeout |
| 505 | http version not supported |
| 506 | variant also negotiates |
| 507 | insufficient storage |
| 508 | loop detected |
| 510 | not extended |
| 511 | network authentication required |

## conceptos de conexion

- cliente servidor: es cuando pedimos recursos a un servidor para pedir una pagina web, usando el envio de datos ajax.
  ![cliente servidor](/img/extras/cliente-servidor.png)
- sockets: este concepto de conexion se aplica a ambos ordenadores ambos son al mismo tiempo cliente y servidor
  ![socket](/img/extras/sockets.png)
  
## rmtp

real time messaging protocol es un protocolo que permite que la transmisión de vídeo, audio y otros tipos de datos a través de internet, sea suave, y de alto rendimiento. La mayoría de las plataformas de streaming en directo son compatibles con la transmisión RTMP.

las plataformas que usa el protocolo rmtp son: twitch, youtube, zoom, facebook