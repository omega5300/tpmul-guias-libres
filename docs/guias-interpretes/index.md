# interprente

Un intérprete es un programa informático que procesa el código fuente de un proyecto de software durante su tiempo de ejecución, es decir, mientras el software se está ejecutando, y actúa como una interfaz entre ese proyecto y el procesador. Un intérprete siempre procesa el código línea por línea, de modo que lee, analiza y prepara cada secuencia de forma consecutiva para el procesador. Este principio también se aplica a las secuencias recurrentes, que se ejecutan de nuevo cada vez que vuelven a aparecer en el código. Para procesar el código fuente del software, el intérprete recurre a sus propias bibliotecas internas: en cuanto una línea de código fuente se ha traducido a los correspondientes comandos legibles por máquina, esta se envía directamente al procesador.

## ventajas y desventajas

- ventaja:
  Proceso de desarrollo sencillo (sobre todo en términos de depuración)
- desventaja:
  Proceso de traducción poco eficiente y velocidad de ejecución lenta
  
## Solución híbrida de intérprete y compilador: compilación en tiempo de ejecución

Para compensar los puntos débiles de ambas soluciones, también existe el llamado modelo de compilación en tiempo de ejecución (en inglés, just-in-time-compiler, o “compilador justo a tiempo”). Este tipo de compilador, que a veces también se conoce por el término inglés compreter (acrónimo de compiler e interpreter), rompe con el modelo habitual de compilación y traduce el código del programa durante el tiempo de ejecución, al igual que el intérprete. De esta forma, la alta velocidad de ejecución típica de los compiladores se complementa con la simplificación del proceso de desarrollo.

Java es uno de los ejemplos más conocidos de lenguaje basado en compilación en tiempo de ejecución: el compilador JIT, que figura entre los componentes del Java Runtime Environment (JRE), mejora el rendimiento de las aplicaciones Java traduciendo el código de bytes en código máquina de manera dinámica.