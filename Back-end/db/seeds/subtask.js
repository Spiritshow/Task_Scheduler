/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('subtask').del()
  await knex('subtask').insert([
    {id_task: 1, name: 'Переделать макет Акт', status: true},
    {id_task: 1, name: 'Переделать макет Приложение', status: true},
    {id_task: 1, name: 'Переделать модель (код)', status: true},
    {id_task: 2, name: 'Переделать макет Договора', status: true},
    {id_task: 2, name: 'Переделать модель (код)', status: true},
    {id_task: 3, name: 'Написать макет', status: true},
    {id_task: 3, name: 'Создать форму', status: true},
    {id_task: 3, name: 'Написать модель (код)', status: true},
    {id_task: 4, name: 'Page Today', status: true},
    {id_task: 4, name: 'Page Project', status: true},
    {id_task: 4, name: 'Page Calandary', status: true},
    {id_task: 5, name: 'Разработать', status: true},
    {id_task: 5, name: 'Заполнить', status: true},
    {id_task: 6, name: 'Забор дпнных из бд на сегодня', status: false},
    {id_task: 6, name: 'Забор данных всех проектов', status: false},
  ]);
};
