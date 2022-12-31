const express = require('express');
const app = express();
const ProductManager = require('./src/class/ProductManager');

// Seteamos el servidor

// ENDPOINTS 
app.get("/", function (req, res){
  res.send("Servidor arriba");
});

// Endpoint consulta de productos con limit
app.get('/products', async (req, res) => {
  let products = ProductManager.getProducts()
  res.products(products);
});

// Endpoint consultando usuario
app.get('/usuario', (req, res) => {
  const respuesta = {
    nombre: "Ele",
    apellido: "Kunz"
  };
  res.send(respuesta);
} )


// Levantamos el servidor
app.listen(3000);





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

