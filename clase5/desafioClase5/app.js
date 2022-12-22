const ProductManager = require("./class/ProductManager");

const newProductManager = new ProductManager('./db.json');
newProductManager.getProducts();