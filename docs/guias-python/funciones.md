# funciones

en python una función es un bloque de instrucciones que realiza una acción y, una vez definida, se puede reutilizar. Las funciones hacen que el código sea más modular, lo que le permite usar el mismo código una y otra vez.

Python tiene una serie de funciones integradas con las que puede estar familiarizado, que incluyen:

- print() que imprimirá un objeto en la terminal
- int() que convertirá un tipo de datos de cadena o número en un tipo de datos entero
- len() que devuelve la longitud de un objeto
Los nombres de las funciones incluyen paréntesis y pueden incluir parámetros.

``` python
# Define function names()
def names():
    # Set up name variable with input
    name = str(input('Enter your name: '))
    # Check whether name has a vowel
    if set('aeiou').intersection(name.lower()):
        print('Your name contains a vowel.')
    else:
        print('Your name does not contain a vowel.')

    # Iterate over name
    for letter in name:
        print(letter)

# Call the function
names()
```