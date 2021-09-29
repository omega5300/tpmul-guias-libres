# cascada y herencia

en CSS funciona por medio de cascada es decir de arriba hacia abajo, ciertas propiedades se sobreescribe modificando todo el comportamiento de cierta propiedad que se esta utilizando.

la herenica tambien es otro que aplica en ciertos elementos que se este alojandos al elemento padre.

esto esta estrechando con la parte de la especificidad de la hoja de estilos y puede haber algo de confilcto con el elemento mas alto

## herencia

el concepto de herencia , lo que significa que algunas propiedades CSS heredan por defecto valores establecidos en el elemento padre del elemento actual, y otras no. Esto también puede provocar un comportamiento inesperado.

Comencemos por echar un vistazo rápido a las cosas clave con las que estamos lidiando, luego veremos cada una de ellas y veremos cómo interactúan entre sí y con su CSS. Esto puede parecer un conjunto de conceptos difíciles de entender. A medida que adquieras más práctica en la escritura de CSS, la forma en que funciona se volverá más obvia para ti.

``` css
thead th, tfoot th, tfoot td {
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  border: 3px solid purple;
}
```

### valores de herencia

los valores de herencia nos propociona los valores de acuerdo al valor la propiedad anterior son los siguientes valores:

- inherit: Establece que el valor de la propiedad que se aplica a un elemento determinado sea exactamente igual al del elemento padre. En la práctica, esto "activa la herencia".
- initial: Establece que el valor de la propiedad que se aplica a un elemento seleccionado tenga el mismo valor que esté establecido para esa propiedad en la hoja de estilo por defecto del navegador.
- revert: aplica lo opuesto al el valor unset en ciertos casos no todos los navegadores lo soporta su funcion es revertir las propiedades de los estilos por defecto de navegador.
- unset: Restablece la propiedad a su valor natural, lo que significa que si la propiedad se hereda de forma natural, actúa como inherit, y en caso contrario como initial.

## cascada

Cascada de hojas de estilo : a un nivel muy simple, esto significa que el orden de las reglas CSS es importante; cuando se aplican dos reglas que tienen la misma especificidad, la última en el CSS es la que se utilizará.

En el siguiente ejemplo, tenemos dos reglas que podrían aplicarse a h1. El h1termina siendo de color azul: estas reglas tienen un selector idéntico y, por lo tanto, tienen la misma especificidad, por lo que gana el último en el orden de origen.

## ejemplos

``` css
h1 { 
    color: red; 
}
h1 { 
    color: blue; 
}
```

## especificidad

es el concepto que aplica aocrde con la prioridad mas alta dependiendo de selector

``` css
.main-heading { 
    color: red; 
}
        
h1 { 
    color: blue; 
}
```

### valores de especificidad

los valores de especificidad se componene deacuerdo con esta tabla

| selector | valor |
| ----------- | ----------- |
| etiqueta y pseudo elementos | 001 |
| clases, atributos y pseudo clases | 010 |
| id | 100 |
| estilos en linea | 1000 |
| important | vale todo y no importa la especifidad |