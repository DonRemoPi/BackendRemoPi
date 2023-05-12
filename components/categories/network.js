const express = require('express');
const router = express.Router();
const pizzaNetwork = require('../pizza/controller');
const empanadasNetwork = require('../empanadas/controller');
const postresNetwork = require('../postres/controller');
const bebidasNetwork = require('../bebidas/controller');

router.get('/', async (req, res) => {
const categorias = [
    { nombre: 'Pizza', component: await pizzaNetwork.getPizzas()},
    { nombre: 'Empanadas', component: await empanadasNetwork.getEmpanadas()},
    { nombre: 'Postres', component: await postresNetwork.getPostres() },
    { nombre: 'Bebidas', component: await bebidasNetwork.getBebidas() },
    ];

    res.status(200).json(categorias);
});

module.exports = router;
