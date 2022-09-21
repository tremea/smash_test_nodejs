
const express = require('express');

const app = express();
const router = express.Router();

//Carregar Rotas
const routes = require('./app/routes/smash_test');






app.use('/', routes);
module.exports = app;



