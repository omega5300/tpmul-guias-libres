# sistema de control de versiones

Se llama control de versiones a la gestión de los diversos cambios que se realizan sobre los elementos de algún producto o una configuración del mismo. Una versión, revisión o edición de un producto, es el estado en el que se encuentra dicho producto en un momento dado de su desarrollo o modificación. Aunque un sistema de control de versiones puede realizarse de forma manual, es muy aconsejable disponer de herramientas que faciliten esta gestión dando lugar a los llamados sistemas de control de versiones o SVC (del inglés System Version Control).

en ocasiones implementa control de versiones en programas como google docs o también figma.

que se compone de la siguiente manera

- Repositorio ("repository"): es el lugar en el que se almacenan los datos actualizados e históricos de cambios.
- Revisión ("revision"): Una revisión es una versión determinada de la información que se gestiona. Hay sistemas que identifican las revisiones con un contador (Ej. subversion). Hay otros sistemas que identifican las revisiones mediante un código de detección de modificaciones (Ej. git usa SHA1).
- Etiqueta ("tag"): Los tags permiten identificar de forma fácil revisiones importantes en el proyecto. Por ejemplo se suelen usar tags para identificar el contenido de las versiones publicadas del proyecto.
- Rama ("branch"): Un conjunto de archivos puede ser ramificado o bifurcado en un punto en el tiempo de manera que, a partir de ese momento, dos copias de esos archivos se pueden desarrollar a velocidades diferentes o en formas diferentes de forma independiente el uno del otro.
-Cambio ("change"): Un cambio (o diff, o delta) representa una modificación específica de un documento bajo el control de versiones. La granularidad de la modificación que es considerada como un cambio varía entre los sistemas de control de versiones.
- Desplegar ("checkout"): Es crear una copia de trabajo local desde el repositorio. Un usuario puede especificar una revisión en concreto u obtener la última. El término 'checkout' también se puede utilizar como un sustantivo para describir la copia de trabajo.
- Confirmar ("commit"): Confirmar es escribir o mezclar los cambios realizados en la copia de trabajo del repositorio. Los términos 'commit' y 'checkin' también se pueden utilizar como sustantivos para describir la nueva revisión que se crea como resultado de confirmar.
- Conflicto ("conflict"): Un conflicto se produce cuando diferentes partes realizan cambios en el mismo documento, y el sistema es incapaz de conciliar los cambios. Un usuario debe resolver el conflicto mediante la integración de los cambios, o mediante la selección de un cambio en favor del otro.
- Cabeza ("head"): También a veces se llama tip (punta) y se refiere a la última confirmación, ya sea en el tronco ('trunk') o en una rama ('branch'). El tronco y cada rama tienen su propia cabeza, aunque HEAD se utiliza a veces libremente para referirse al tronco.
- Tronco ("trunk"): La única línea de desarrollo que no es una rama (a veces también llamada línea base, línea principal o máster).
- Fusionar, integrar, mezclar ("merge"): Una fusión o integración es una operación en la que se aplican dos tipos de cambios en un archivo o conjunto de archivos. Algunos escenarios de ejemplo son los siguientes:
  - Un usuario, trabajando en un conjunto de archivos, actualiza o sincroniza su copia de trabajo con los cambios realizados y confirmados, por otros usuarios, en el repositorio.
  - Un usuario intenta confirmar archivos que han sido actualizado por otros usuarios desde el último despliegue ('checkout'), y el software de control de versiones integra automáticamente los archivos (por lo general, después de preguntarle al usuario si se debe proceder con la integración automática, y en algunos casos sólo se hace si la fusión puede ser clara y razonablemente resuelta).
  - Un conjunto de archivos se bifurca, un problema que existía antes de la ramificación se trabaja en una nueva rama, y la solución se combina luego en la otra rama.
  - Se crea una rama, el código de los archivos es independiente editado, y la rama actualizada se incorpora más tarde en un único tronco unificado.


## git

es el software de control de veriones mas utilizado a nivel global creado por Linus Torvalds se puede dominar por la terminal de commandos o por interfaz grafica.

### commandos de git mas usados

``` sh
git init -b master # inicializa un nuevo projecto de git

git branch -b <name branch> # se crear una nueva rama o se cambiar

git status # revisa el estado de los archivos

git add . # agregar y/o eliminar todos los archivos

git commit -m message # guardar los cambios bajo una nueva version

git remote add origin <url> # añades una url para enviar los cambios en remoto

git remote remove origin # quitas la URL del repositorio remoto

git push origin master # enviar los cambios de repositorio local a repositorio remoto

git --version # muestra la version que git instalada

git clone <url> # clona el repositorio de un link externo

git pull origin # actualizar o reinicia los cambios del repositorio externo
```

> esto es aplicado para videojuegos y desarrollo de sitios web

### redes de repositorios remotos

son lo equivalente a las redes con la diferencia que compartimos el codigo para que otros desarrolladores lo puede copiar, crear sus variaciones o aportat al proyecto original

- github: es la mas conocida alredor de mundo
- gitlab: la segunda mas utilizada