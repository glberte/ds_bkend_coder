
class ProductManager {

    constructor(){
        this.products = []
        }
    
        getProducts(){
            return this.products;
        }
    
        addProduct(title, description, price, code, guid = 0, thumbnail, stock){
            let product = {
                title,
                description,
                price,
                code,
                guid: guid || 0,
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

            const found = this.products.some(item => item.code === product.code)
            
            if (!found){
                console.log("Se agrego el producto!")
            }else{
                console.log("Error, el código ingresado se encuentra repetido")
            }
            
    
            if (this.products.length === 0){
                product["guid"] = 1;
            }else{
                product["guid"] = this.products[this.products.length - 1]["guid"] + 1;
            }
    
            this.products.push(product)
    
        }
    
        getProductById(guid){
            let product = this.products.filter((item) => item.guid === guid);
            if (product.length > 0){
                console.log(product)
                return product
            }else{
                console.log(`No se encuentra ningun articulo con el ID ingresado (Not found)`);
                return
            }
        }
    }
    
    //** CARGA DE ARTICULOS Y LLAMADA DE METODOS **//
    
    const productos = new ProductManager();
    
     productos.addProduct("Fawna Cachorros","10 kg",5000,"codigo1",0,"Imagen",10);
    // productos.addProduct("Fawna Medianos","10 kg",7000,"codigo2",0,"Imagen",10);
    // productos.addProduct("Fawna Adultos","10 kg",9000,"codigo3",0,"Imagen",10);
    
    // Intengamos agregar un producto con el mismo CODE de otro
    //productos.addProduct("Doggi Adultos","10 kg",9000,"codigo3",0,"Imagen",10);
    productos.addProduct("","",9000,"codigo4",0,"Imagen",10);
    
    
    //console.log(products.getProductos());
    
    //productos.getProductById(0);