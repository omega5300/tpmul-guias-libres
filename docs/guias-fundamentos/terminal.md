# terminal

en el sistema operativo tenemos algo que se conoce como la consola de commandos o mejor conocido como terminal. existe desde la aparicion de los sistemas UNIX y los ordenadores personales como ejemplo la spectrum o la MSX.

## como es la terminal

una terminal no tiene interfaz grafica es de puro texto es muy usado por los administradores de servidores y desarrolladores multiarea debido que el uso de las terminales no consume tantos recursos existe muchos tipos de terminales de consola como son:

- CMD (inspirado en el sistema operativo MS-DOS)
- bash
- powershell
- szh (git bash en windows)

## commandos mas utilizados en la terminal de commandos

> commandos de UNIX

``` sh
# change directory example cd /hello
cd /js

<<COMMENT
    show directories ls
    common flags:
      -a, --all
      -d, --directory
      -f
      -l
      -k
      --help
      --version
COMMENT

ls -a

# clear terminal
clear

# show ip address
ifconfig

# show current directory
pwd

# copy
cp escenario.jpg /home/nombredeusuario/Imagenes

# move
mv archivo.txt /home/nombredeusuario/Documentos.

# create directory
mkdir tpmul-web

# create files
touch index.html

<<COMMENT
    delete file or directory rm
    common flags:
      -r
      -rf
COMMENT
rm -rf /node_modules

# print
echo "create folders"
```

> windows nota algunos commandos comparte con unix pero no son similares o unicos en MS-DOS
```bat
dir

cls

ipconfig

tree

copy example.txt D:\\texts

move example.txt D:\\examples
```