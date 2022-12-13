class ProductManager{
    constructor(){
        this.productos = [];
    }

    addProduct(producto){
        if(!this.productos){
            this.productos = [producto]
        } else {
            this.productos.push(producto);
        };
    }
    getProducts(){
        return console.log(this.productos);
    }

}


const alimentosDog = new ProductManager();
alimentosDog.addProduct({nombre:'naranja', precio:1.25});
alimentosDog.addProduct({nombre:'limon', precio:1.75});
alimentosDog.addProduct({nombre:'limon', precio:1.75});
//console.log(alimentosDog);

alimentosDog.getProducts();