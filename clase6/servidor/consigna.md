* Consigna
Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.

* Aspectos a incluir
Se deberá utilizar la clase ProductManager que actualmente utilizamos con persistencia de archivos. 
Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.

* Aspectos a incluir
El servidor debe contar con los siguientes endpoints:
ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto agregar el soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.

Si no se recibe query de límite, se devolverán todos los productos

Si se recibe un límite, sólo devolver el número de productos solicitados
