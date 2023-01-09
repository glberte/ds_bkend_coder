const express = require('express');
const productRouter = express.Router();

//import { Router } from "express";

// const router = Router();

//  router.get('/', async (req, res) => {
//      res.send(console.log('este es el ProducManager'))
//  })

// export default router;

productRouter.get('/', (req, res) => {
    res.status(200).json({msg: "Lista de Productos"});
})


module.exports = productRouter;