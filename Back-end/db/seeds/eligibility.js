/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('eligibility').del()
  await knex('eligibility').insert([
    {id_project: 1, id_user: 1, authority: "create"}
  ]);
};
