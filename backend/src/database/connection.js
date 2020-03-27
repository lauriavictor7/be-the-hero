const knex = require('knex'); // Importando o Knex
const configuration = require('../../knexfile'); //Importando a configuração de banco de dados dentro de Knexfile.

const connection = knex(configuration.development); // Criando conexão apontando para a conexão de desenvolvimento em knexfile.js

module.exports = connection; // Exportando conexão de banco de dados.