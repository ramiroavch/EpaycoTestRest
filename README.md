# Epayco Test API Rest  

Este proyecto es una prueba ténica solicitada. 
Consiste en una Billetera Virtual   

En este repositorio se encuentra la API Rest del 
proyecto. desarrollada en Node Js con la ayuda 
de la librería de express, siguiendo una arquitectura
hexagonal.Por último
la base de datos fue desarrollada con MongoDb.

## Herramientas Utilizadas

- Node.JS
- Express.JS

## Ejecución del Proyeco
#### El proyecto se ejectura en el puerto: 3001
- `npm install` Instalación de dependencias
- `npm start` Ejecución del proyecto

## End-Points 📋

Esta API tiene 5 endpoint:

### Registrar Cliente
* **URL**  `/client`
* **Method:**   `POST`
* **Body:** ``

### Enviar un pago

* **URL**  `/payment`
* **Method:**   `POST`
* **Body:** ``

### Autenticación de pagos enviados

* **URL**  `/payment/auth`
* **Method:**   `POST`
* **Body:** ``

### Ver balance de billetera

* **URL**  `/client/wallet`
* **Method:**   `POST`
* **Body:** ``

### Recargar saldo

* **URL**  `/client/wallet`
* **Method:**   `PUT`
* **Body:** ``