# datos importantes

existe muchas funciones que nos ayuda si trabajamos con algo basico o avanzado estas son

## comentarios

``` python
# Esto es un comentario en Python

"""Este es un comentario multilínea.
Podemos escribir tantas líneas queramos a modo de documentación."""
```

## print, int y len

``` python
arr = [22, 33, 66] 

age = "23"

int(age)

print(len(arr))
print("hello")
```

## string inteporlation

``` python
age = 23

print(f"i'm {age} years old")
```

## import

el import es usando para llamado modulos externo o archivos locales de python

``` python
# modulos
import os
import time
import discord
```

## raw_input

es una version mejorada de input en python

``` python
name = input("what is your name: ")

print(name)
```

## closures

``` python
def print_msg(msg):
    # This is the outer enclosing function

    def printer():
        # This is the nested function
        print(msg)

    printer()

# We execute the function
# Output: Hello
print_msg("Hello")
```

## decoradores

En general, un decorador es un patrón de software que se utiliza para alterar el funcionamiento de una determinada pieza de código; ya sea una función, o una clase, sin la necesidad de emplear otros mecanismos como la herencia.

En concreto, al hablar de los decoradores en Python, nos referimos a funciones u objetos con un comportamiento similar que nos permiten alterar cómo funcionan otras entidades sin tener que modificar su código explícitamente.

``` python
def decorador(func): #Creamos la función decorador (A)
    def nueva_funcion(): #Creamos la nueva función (C)
        print ("Perro dice:")#Añadimos una modificación a la función (B) dentro (C)
        func() #Aquí estamos incluyendo la función (B) que le dimos como argumento a (A)
                #Para crear (C)
    return nueva_funcion
@decorador #Decoramos la función
def saluda():
    print("Guau!")
def despedida():
    print ("Chau")
saluda()
despedida()
```

## async/await

este concepto es cuando un proceso tome mucho tiempo

``` python
import asyncio
import time

async def sleep():
    print(f'Time: {time.time() - start:.2f}')
    time.sleep(1)

async def sum(name, numbers):
    total = 0
    for number in numbers:
        print(f'Task {name}: Computing {total}+{number}')
        await sleep()
        total += number
    print(f'Task {name}: Sum = {total}\n')

start = time.time()

loop = asyncio.get_event_loop()
tasks = [
    loop.create_task(sum("A", [1, 2])),
    loop.create_task(sum("B", [1, 2, 3])),
]
loop.run_until_complete(asyncio.wait(tasks))
loop.close()

end = time.time()
print(f'Time: {end-start:.2f} sec')
```