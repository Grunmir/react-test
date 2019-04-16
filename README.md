# REACT-TEST

Pequeña aplicación donde se muestra un test de evaluación formado por varias preguntas de tipo “Rellena los huecos” en las que el usuario deberá introducir la respuesta y podrá comprobar el resultado final.

## Instalación

* Clonar el proyecto en local:

```
git clone git@github.com:Grunmir/react-test.git && cd react-test
```

* Instalar dependencias:

```
npm install
```

## Ejecutar la aplicación:

```
npm start
```

## Servidor API-Questions:

La aplicación consume los datos de dos formas, desde disco o desde un servidor montado en __Express__. 
Para levantar el servidor hay que ejecutar el siguiente comando:

```
npm run server
```

Si el servidor __API-Questions__ no esta levantado se producirá una excepción y entonces se cargaran los datos desde disco.

P.D. No es necesario levantar el servidor para que la aplicación funcione.

## Para crear la aplicación se ha usado __Create React App__

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
