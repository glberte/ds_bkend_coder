const express = require('express');
const {productos} = require('./src/class/ProductManager');

// Inicializamos el servidor
const app = express();
// Levantamos el servidor en un puerto
app.listen(3000);


// ENDPOINTS 
app.get("/", function (req, res){
  res.send("Servidor arriba");
});

// Endpoint consulta de productos con limit
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
  res.send(products);
});










// Endpoint consultando usuario
app.get('/usuario', (req, res) => {
  const respuesta = {
    nombre: "Ele",
    apellido: "Kunz"
  };
  res.send(respuesta);
} )

// app.get('/items/:code', (req, res)=> {
//   const item = [];
//   res.send(item);
// })







// Servidor en NODE http, no lo vamos a usar
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

