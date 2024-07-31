/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project').del()
  await knex('project').insert([
    {name: "", daycreate: "2024-07-08", deadline: "2024-07-13", state: "yellow"},
    {name: "", daycreate: "2024-07-07", deadline: "2024-07-16", state: "yellow"}
  ]);
};
