/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("project", function (table){
    table.increments("id");
    table.string("name", 255).notNullable();
    table.date("daycreate").defaultTo(knex.fn.now());
    table.date("deadline").notNullable();
    table.string("state", 255).defaultTo("yellow");
    table.integer("counttask").defaultTo(0);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("project");
};
