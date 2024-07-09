/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id_project: "2", name: "front-end", daycreate: "2024-06-07", daytarget: "2024-06-30", deadline: "2024-07-13", status: "green"},
    {id_project: "2", name: "База данных", daycreate: "2024-06-07", daytarget: "2024-07-02", deadline: "2024-07-13", status: "green"},
    {id_project: "2", name: "Back-end", daycreate: "2024-07-09", daytarget: "2024-07-13", deadline: "2024-07-13", status: "yellow"},
    {id_project: "2", name: "Акт транспортировки газа", daycreate: "2024-07-01", daytarget: "2024-07-02", deadline: "2024-07-06", status: "green"},
    {id_project: "2", name: "Договор ВКГО", daycreate: "2024-07-01", daytarget: "2024-07-02", deadline: "2024-07-06", status: "green"},
    {id_project: "2", name: "Договор ВКГО ДОП", daycreate: "2024-07-01", daytarget: "2024-07-03", deadline: "2024-07-06", status: "green"}
  ]);
};
