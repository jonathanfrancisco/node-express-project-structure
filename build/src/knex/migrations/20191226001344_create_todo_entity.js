"use strict";
exports.up = knex => {
    return knex.schema.createTable('todos', table => {
        table
            .uuid('id')
            .notNullable()
            .primary();
        table.string('body').notNullable();
        table
            .boolean('isDone')
            .nullable()
            .defaultTo(false);
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt');
    });
};
exports.down = knex => {
    return knex.schema.dropTableIfExists('todos');
};
