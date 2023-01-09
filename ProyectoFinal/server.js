const express = require('express');
const app = express();
const path = require('path');
const productRouter = require('./src/routes/productRoutes');
//const {productRoutes} = require('./src/routes/productRoutes');

// SETEO DEL SERVER
app.use(express.urlencoded({extended:true}));
app.use(express.json())

// Configuramos el middleware para el index
app.use('/', express.static(__dirname + '/public'));


// ENDPOINTS que pasan por /API
//  app.get("/", (req, res) => {
//  //    res.sendStatus(200);
//     res.sendFile(path.join(__dirname, "public", "/index.html"));
//  });

app.use('/api/products/', productRouter);




// Error Not Fount

app.get('*', (req, res)=> {
    res.status(404).send('Ruta no encontada')
})

  

app.listen(8080, ()=> {console.log("Servidor corriendo en port:8080")});

//public/index.html