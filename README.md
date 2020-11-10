# Epayco Test API Rest  

Este proyecto es una prueba ténica solicitada. 
Consiste en una Billetera Vistual   

En este repositorio se encuentra la API Rest del 
proyecto. desarrollada en Node Js con la ayuda 
de la librería de express, siguiendo una arquitectura
hexagonal.Por último
la base de datos fue desarrollada con MongoDb.

### End-Points 📋

Esta API tiene 5 endpoint:
- POST /client (Registro de cliente)
- POST /payment (Enviar un pago)
- POST /payment/auth (Autenticación de pagos enviados)
- POST /client/wallet (Ver balance de billetera)
- PUT  /client/wallet (Recargar saldo)