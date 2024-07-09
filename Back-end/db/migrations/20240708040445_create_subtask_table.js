/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("subtask", (table) => {
    table.increments("id");
    table.integer("id_task").notNullable();
    table.string("name").notNullable();
    table.boolean("status").defaultTo(false);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("subtask");
};
