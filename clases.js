class ProductManager {
    constructor (title, description, price, thumbnail, code, stock) {
        this.title = title; 
        this.description = description; 
        this.price = price; 
        this.thumbnail = thumbnail;
        this.code = code; 
        this.stock = stock;
    }
}

const product1 = new ProductManager('Fawna Cachorros','10 kg', 8000, 'imagen', 01, 10);
const product2 = new ProductManager('Fawna Medianos','10 kg', 9000, 'imagen', 02, 10);
const product3 = new ProductManager('Fawna Adultos','10 kg', 10000, 'imagen', 03, 10);

console.log(product1, product2, product3);
