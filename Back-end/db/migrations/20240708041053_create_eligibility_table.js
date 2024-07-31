/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("eligibility", (table) => {
    table.increments("id");
    table.integer("idproject").notNullable();
    table.integer("iduser").notNullable();
    table.string("authority");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("eligibility");
};
