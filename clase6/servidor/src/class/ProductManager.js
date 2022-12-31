const fs = require('fs');
const path = require('path');

class ProductManager {
  constructor() {
    this.products = []
    this.path = "./clase6/servidor/src/data/products.json"
      if(fs.existsSync(this.path)) {
        this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
      } else{
        this.products = []
      }
  }

  addProduct(title, description, price, code, thumbnail, stock) {
    let product = {
        title,
        description,
        price,
        code,
        thumbnail,
        stock
        };
  
    for (var i = 0; i < arguments.length; i++){
        // Comprobamos si hay campos vacios
        if (arguments[i] === "") {
            console.log("No puede haber campos vacios, complete todos los datos");
            return;
        }
    }
  
    // Leemos todos los productos del archivo JSON
    this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
  
    // Se asigna un id autoincrementable al producto
    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }
  
    // Buscamos el codigo si no existe, agregar el producto al final de la lista de productos y escribir el archivo JSON
    const found = this.products.some(item => item.code === product.code)

    if (!found){
      this.products.push(product);
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      console.log("Se agrego el producto!")
    }else{
      console.log("Error, el código ingresado se encuentra repetido")
    }
  }
  
  async getProducts() {
    // Leemos el archivo de productos y parseamos su contenido a un array de objetos
    let products = JSON.parse(fs.readFileSync(this.path));
    return products;
  }

   async getProductById(id) {
     // Leemos el archivo de productos
     let products = await this.getProducts();
     
     // Verificamos que el id sea un nº 
     id = parseInt(id);
     if (isNaN(id)) {
      throw new Error("El ID debe ser un número entero");
    }

     // Buscar el producto con el id especificado
     let product = products.find(p => p.id === id);
     return product;
   }

   async updateProduct(id, product) {
     // Leemos el JSON
     let products = await this.getProducts();

     // Buscamos el producto por el índice con el id
     let index = products.findIndex(p => p.id === id);

     // Actualizamos el producto en el array de productos
     products[index] = product;

     // Escribimos y guardamos el array de productos en el archivo JSON
     fs.writeFileSync(this.path, JSON.stringify(products));
     console.log("Se ha actualizado el producto")
   }

   async deleteProduct(id) {
     // Leer el archivo de productos    
     let products = await this.getProducts()    
     
     // Filtramos productos para eliminar el producto del id 
     let filtered = products.filter(p => p.id !== id);

     // Guardamos el array en el archivo
     fs.writeFileSync(this.path, JSON.stringify(filtered));
     console.log("Se elimino el producto!")
   }
}

////////////------------------------------------------///////////
// GENERAMOS EL NUEVO OBJETO CON EL CONSTRUCTOR
const productos = new ProductManager();

// CARGAMOS UN NUEVO PRODUCTO CON LOS PARAMETROS OBLIGATORIOS
//productos.addProduct("Fawna Medianos","10 kg",7000,"codigo4","Imagen",10);

// Intentamos agregar un productos con campos vacios
//productos.addProduct("","10 kg",9000,"codigo3","Imagen",10);
//productos.addProduct("","",9000,"codigo4",0,"Imagen",10);

// AGREGAMOS UN NUEVO PRODUCTO GENERANDO EL ID UNICO Y CONSECUTIVO
productos.addProduct("Pedigree Cachorro","10 kg",9000,"codigo3","Imagen",10);

//console.log(productos.getProducts());
//console.log(productos.getProductById(2));

// BUSCAMOS EL PRODUCTO POR ID
//  productos.getProductById(2)
//    .then(product => console.log(product))
//    .catch(error => console.error(error));

// Probamos agregar un producto con el mismo CODE de otro
//productos.addProduct("Doggi Adultos","10 kg",9000,"codigo3",0,"Imagen",10);

// ELIMINAMOS UN PRODUCTO DEL ARCHIVO POR EL ID 
//productos.deleteProduct(2)

// BUSCAMOS UN PRODUCTO Y LO ACTUALIZAMOS
 productos.updateProduct(2, {
  title: "Probando",
  description:"10 kg",
  price: 5000,
  code:"codigo3",
  thumbnail:"/imagenes/producto3.jpg", 
  stock: 10
});

console.log(productos.getProducts());



module.exports = ProductManager;