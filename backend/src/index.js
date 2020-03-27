// Importar funcionalidades do Express
const express = require('express');

const routes = require('./routes'); // ./ Utilizado para diferenciar o arquivo do pacote

const cors = require('cors');

const app = express(); 

app.use(cors());
app.use(express.json()); // Informa para o app que usará JSON no corpo das requisições. Deve ser declarado antes das rotas
app.use(routes); // Semrpe abaixo do express.json

app.listen(3333);