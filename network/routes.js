const express = require('express');
const categoriasRouter = require('../components/categories/network');
const pizza = require('../components/pizza/network');
const empanada = require('../components/empanadas/network');
const postre = require('../components/postres/network')
const bebida = require('../components/bebidas/network')

const routes = (server) => {
    server.use('/Menu', categoriasRouter);
    server.use('/pizza', pizza)
    server.use('/empanada', empanada)
    server.use('/postre', postre)
    server.use('/bebida', bebida)
};

module.exports = routes;

