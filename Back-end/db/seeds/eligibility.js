/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('eligibility').del()
  await knex('eligibility').insert([
    {idproject: 1, iduser: 1, authority: "create"}
  ]);
};
