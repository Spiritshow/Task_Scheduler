/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('subtask').del()
  await knex('subtask').insert([
    {id_task: 1, name: 'Переделать макет Акт', state: true},
    {id_task: 1, name: 'Переделать макет Приложение', state: true},
    {id_task: 1, name: 'Переделать модель (код)', state: true},
    {id_task: 2, name: 'Переделать макет Договора', state: true},
    {id_task: 2, name: 'Переделать модель (код)', state: true},
    {id_task: 3, name: 'Написать макет', state: true},
    {id_task: 3, name: 'Создать форму', state: true},
    {id_task: 3, name: 'Написать модель (код)', state: true},
    {id_task: 4, name: 'Page Today', state: true},
    {id_task: 4, name: 'Page Project', state: true},
    {id_task: 4, name: 'Page Calandary', state: true},
    {id_task: 5, name: 'Разработать', state: true},
    {id_task: 5, name: 'Заполнить', state: true},
    {id_task: 6, name: 'Забор дпнных из бд на сегодня', state: false},
    {id_task: 6, name: 'Забор данных всех проектов', state: false},
  ]);
};
