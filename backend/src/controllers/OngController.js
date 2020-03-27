const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*'); // Listando ONGS cadastradas.

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; // Acessando o corpo da requisição com request.body.

        // Criando ID da ONG
        const id = crypto.randomBytes(4).toString('HEX'); //Gerando quatro bytes de caracteres aleatorios e convertendo em string hexadecimal.

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}