const fs = require('fs');
const path = require('path');

class ProductManager {
  constructor() {
    this.products = []
    this.path = "./clase5/desafioClase5/database/dbItem.json"
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
    // Leer el archivo de productos y parsear su contenido a un array de objetos
    let products = JSON.parse(fs.readFileSync(this.path));
    return products;
  }

   async getProductById(id) {
     // Leer el archivo de productos
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

  // async updateProduct(id, product) {
  //   // Leer el archivo de productos
  //   let products = await this.getProducts();

  //   // Buscar el índice del producto con el id especificado
  //   let index = products.findIndex(p => p.id === id);

  //   // Actualizar el producto en el array de productos
  //   products[index] = product;

  //   // Guardar el array de productos en el archivo
  //   fs.writeFileSync(this.path, JSON.stringify(products));
  // }

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

//** GENERAMOS EL NUEVO OBJETO CON EL CONSTRUCTOR */
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

// Buscamos un producto y verificamos que si o si sea un nº
//  productos.getProductById(2)
//    .then(product => console.log(product))
//    .catch(error => console.error(error));

// Intengamos agregar un producto con el mismo CODE de otro
//productos.addProduct("Doggi Adultos","10 kg",9000,"codigo3",0,"Imagen",10);

// Eliminamos un producto del archivo
productos.deleteProduct(2)
console.log(productos.getProducts());



module.exports = ProductManager;