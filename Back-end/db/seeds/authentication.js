const bcrypt = require("bcrypt");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync("1502", salt);
  // Deletes ALL existing entries
  await knex('authentication').del()
  await knex('authentication').insert([
    {iduser: 1, login: 'sshow', password: hash}
  ]);
};
