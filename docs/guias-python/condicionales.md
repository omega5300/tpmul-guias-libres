# condicionales

en python la forma de escribir condicionales es distinta pero es mas accesible si eres un principiantes.

funciona exactamente igual  su modo de llamar es distinto

``` python
edad = int(input("¿ cuantos años tiene?"))

# if, else y elseif
if edad >= 18:
 print("es usted mayor de edad")
elif edad < 0:
 print("No se puede tener una edad negativa")
else:
 print("es usted menor de edad")
```

> la forma de usar switch su equivalente en python son las hash tables

## operadores logicos

| operador | uso |
| ----------- | ----------- |
| and | a and b |
| or | a or b |
| not | not a |

## try catch

el try catch es indepensable para el manejo de errores

``` python
try:
    linux_interaction()
except:
    print('Linux function was not executed')
    
try:
    linux_interaction()
except AssertionError as error:
    print(error)
    print('The linux_interaction() function was not executed')
```

> el finally no lo incluyo es cuando finaliza uno de los dos