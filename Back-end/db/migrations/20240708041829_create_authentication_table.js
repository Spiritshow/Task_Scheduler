/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("authentication", (table) => {
    table.increments("id");
    table.string("login", 255).notNullable();
    table.string("password", 255).notNullable();
    table.integer("iduser").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("authentication");
};
