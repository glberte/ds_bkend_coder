Desafio 2 CoderHouse “Manejo de archivos”
 
Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. HECHO

Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1). 

Aspectos a incluir
La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia. HECHO

Debe guardar objetos con el siguiente formato:
    * id (se debe incrementar automáticamente, no enviarse desde el cuerpo) HECHO
    * title (nombre del producto) HECHO
    * description (descripción del producto) HECHO
    * price (precio) HECHO
    * thumbnail (ruta de imagen) HECHO
    * code (código identificador) HECHO
    * stock (número de piezas disponibles) HECHO


* Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo). HECHO

* Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo. * HECHO

Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto * HECHO

* Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID HECHO

* Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo HECHO