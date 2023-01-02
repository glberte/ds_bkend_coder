const express = require('express');
const {productos} = require('./src/class/ProductManager');
const path = require("path")

// Inicializamos el servidor
const app = express();
// Levantamos el servidor en un puerto
app.listen(3000);
// Configuramos el servidor para que reciba datos complejos desde la url,
app.use(express.urlencoded({extended:true}));


// ENDPOINTS 
app.get("/", function (req, res){
  //res.send("Servidor arriba");
  // indicamos el root del proyecto y concatenamos con el archivo inicial
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Consulta de productos con limit probamos send y json
 app.get('/products', (req, res) => {
   let products = productos.getProducts();
   const limit = req.query.limit;
   if(limit && !isNaN(Number(limit))){
     const limitNumber = Number(limit);
     if (limitNumber > 0 && limitNumber <= productos.length) {
       products = productos.slice(0, limit);
      } else {
        console.log('No hay tantos productos disponibles')
     }
   }
   //res.send(products);
   res.json(products)
 });




// Api de consulta por ID, debe ser un nº entero
app.get('/products/:code', (req, res) =>{
  const productID = req.query.code;
  //console.log(productID);
  const product = productos.getProductById(productID);
  
  res.send(product);
})









// Endpoint consultando usuario
// app.get('/usuario', (req, res) => {
//   const respuesta = {
//     nombre: "Ele",
//     apellido: "Kunz"
//   };
//   res.send(respuesta);
// } )

// app.get('/items/:code', (req, res)=> {
//   const item = [];
//   res.send(item);
// })




