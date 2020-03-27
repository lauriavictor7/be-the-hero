// Responsável pela criação de tabelas. O que vai acontecer quando executar essa migrations.
exports.up = function (knex) {
    //Criando tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
    });
};

// Caso precise deletar uma tabela
exports.down = function (knex) {
    return knex.schema.dropTable('ongs')
};

/**
 * Para criar a tabela usar:
 *
 * npx knex migrate:latest
 *
 * Para deletar a tabela usar:
 * npx knex migrate:rollback
 */