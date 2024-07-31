/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("task", (table) => {
    table.increments("id");
    table.integer("id_project").notNullable();
    table.string("name",255).notNullable();
    table.date("daycreate").defaultTo(knex.fn.now());
    table.date("deadline").notNullable();
    table.date("daytarget").notNullable();
    table.string("state",255).defaultTo("yellow");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("task");
};
