const express = require('express');
const cartRouter = express.Router();

cartRouter.get('/',(req, res) =>{
    res.status(200).json({msg: "Carrito con productos agregados"});

})

module.exports = {
    cartRouter
}