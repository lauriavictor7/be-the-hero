// Responsável pela criação de tabelas. O que vai acontecer quando executar essa migrations.
exports.up = function (knex) {
    //Criando tabela
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs'); // Criando chave estrageira.
    });
};

// Caso precise deletar uma tabela
exports.down = function (knex) {
    return knex.schema.dropTable('incidents')
};

/**
 * Para criar a tabela usar:
 *
 * npx knex migrate:latest
 *
 * Para deletar a tabela usar:
 * npx knex migrate:rollback
 */