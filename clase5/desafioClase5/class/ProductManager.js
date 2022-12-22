const fs = require('fs');
const path = require('path');

class ProductManager {
  constructor() {
    this.products = []
    this.path = "./database/dbItem.json"
      if(fs.existsSync(this.path)) {
        this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
      } else{
        this.products = []
      }
  }

  // async addProduct(product) {
  //   // Leer el archivo de productos
  //   let products = await this.getProducts();

  //   // Asignar un id autoincrementable al producto
  //   if (products.length === 0) {
  //     product.id = 1;
  //   } else {
  //     product.id = products[products.length - 1].id + 1;
  //   }

  //   // Añadir el producto al array de productos
  //   products.push(product);

  //   // Guardar el array de productos en el archivo
  //   fs.writeFileSync(this.path, JSON.stringify(products));
  // }

  async getProducts() {
    // Leer el archivo de productos y parsear su contenido a un array de objetos
    //let products = JSON.parse(fs.readFileSync(this.path));
    return this.products;
  }

  // async getProductById(id) {
  //   // Leer el archivo de productos
  //   let products = await this.getProducts();

  //   // Buscar el producto con el id especificado
  //   let product = products.find(p => p.id === id);
  //   return product;
  // }

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

  // async deleteProduct(id) {
  //   // Leer el archivo de productos
  //   let products = await this.getProducts();

  //   // Filtrar el array de productos para eliminar el producto con el id especificado
  //   let filtered = products.filter(p => p.id !== id);

  //   // Guardar el array filtrado en el archivo
  //   fs.writeFileSync(this.path, JSON.stringify(filtered));
  // }
}


const productos = new ProductManager();
console.log(productos.getProducts());

module.exports = ProductManager;