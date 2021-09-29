# selectores de CSS

los selectores son bloques para declarar las propiedades a nuestros elementos de CSS dando la apariencia visual a nuestra pagina web sin depende lo que se realizaba antes en las primeras tres versiones de HTML.

los selectores esta compustos por lo siguiente:

## selector universal

este selector aplicar a todos los elementos de la pagina web se debe aplicar con mucha precaución o de lo contrario seria perdira de tiempo reescribe uno por uno a todos los elementos su codigo de especificidad es de 0.

``` css
* {
  box-sizing: border-box;
}
```

## selector de id

este tipo de selector solo se aplicar a elmentos que posea un ID en el documento HTML su uso es poco o nulo son selectores de estilo unico y no se puede repetir su codigo de especifidad es de 100.

``` css
#article {
  margin 2px auto;
}
```

## selectores de etiqueta

este tipo se utiliza en todas la etiqueta de HTML y webcomponents son unicos pero tambien son combinables con otros selectores su codigo de especificidad es de 001.

``` css
p{
  padding: 3px;
  color: #444;
}
```

## selectores de clases

este tipo son los mas comunes en CSS estos selector son aplicados en varios elementos HTML bajo el atributo class son selector repetibles si trabajas con varios elementos HTML su codigo de especificidad es de 010.

``` css
.menu {
  list-style: none;
  display: block;
}
```

## selectores de atributos

estos selector son de uso especial aplica sin trabajas con atributos de algunos elementos que si se pueda aplica CSS como botones, textarea y inputs su codigo de especificidad es de 010.

``` css
[type="text"] {
 background-color: red;
 color; #fff;
}
```

## pseudo elementos

los psuedo elmentos son selectores especiales que se aplica en todos dando uno estilos adicionales no importa si usan los selectores anteriores aplica unos estilos especiales a nuestro css su es "selector::before" sin uso de comillas su codigo de especificidad es de 001.

### tipos de pseudo elementos

- ::after
- ::backdrop *experimental*
- ::before
- ::cue
- ::cue-region
- ::first-letter
- ::first-line
- ::file-selector-button
- ::grammar-error *experimental*
- ::marker *experimental*
- ::part() *experimental*
- ::placeholder *experimental*
- ::selection
- ::slotted()
- ::spelling-error *experimental*
- ::target-text *experimental*

::: tip pseudoelementos
guia mas completa y detalle en: [guia de pseudoelementos](/guias-css/pseudoelementos.html)
:::

## pseudoclases

es similar a los pseudo selectores pero son mas especificos a ciertos elementos HTMl se uso para dar estilos especiales ejemplo "button:hover" sin comillas

### tipos de pseudoclases

A.
  - :active
  - :any-link
  - :autofill

B.
  - :blank *experimental*

C.
  - :checked
  - :current *experimental*

D.
  - :default
  - :defined
  - :dir() *experimental*
  - :disabled

E.
  - :empty
  - :enabled

F.
  - :first
  - :first-child
  - :first-of-type
  - :fullscreen
  - :future *experimental*
  - :focus
  - :focus-visible
  - :focus-within

H.
  - :has() *experimental*
  - :host
  - :host()
  - :host-context() *experimental*
  - :hover

I.
  - :indeterminate
  - :in-range
  - :invalid
  - :is()

L.
  - :lang()
  - :last-child
  - :last-of-type
  - :left
  - :link
  - :local-link 

N.
  - :not()
  - :nth-child()
  - :nth-col() *experimental*
  - :nth-last-child()
  - :nth-last-col() *experimental*
  - :nth-last-of-type()
  - :nth-of-type()

O.
  - :only-child
  - :only-of-type
  - :optional
  - :out-of-range

P.
  - :past *experimental*
  - :picture-in-picture
  - :placeholder-shown
  - :paused
  - :playing

R.
  - :read-only
  - :read-write
  - :required
  - :right
  - :root

S.
  - :scope
  - :state() *experimental*

T.
  - :target
  - :target-within 

U.
  - :user-invalid 

V.
  - :valid
  - :visited

W.
  - :where()

::: tip pseudoclases
guia mas completa y detalle en: [guia de pseudoclases](/guias-css/pseudoclases.html)
:::

## selectores combinables

estos selectores se compone por multiple combinaciones de selectore solo en caso que sea aplicado tiene una desventaja al momento de utilizado suma a la especificidad de css los mismo aplica si trabajas con pseudo elementos y pseudoclases se compoene de los siguientes

- selectores descendientes: article p "se uso muy comumente pero se debe emplear poco"
- combinador de selector hijo: article > p
- combinador de hermanos adyancentes: h1 + p
- combinador de hermanos generales: h1 ~ p

> estos elementos combinables se debe emplear muy poco o nulo debido que afecta demasiado la especificidad de CSS