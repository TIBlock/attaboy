
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.select('*').from('posts').del()
  .then(() => {return knex.select('*').from('users').del()})
  // .then(() => {return knex.select('*').from('Touchpoints').del()})
  // .then(() => {return knex.select('*').from('Commits').del()})
  // .then(() => {return knex.select('*').from('Users').del()})
  // .then(() => {return knex.select('*').from('Students').del()})
  // .then(() => {return knex.select('*').from('Cohorts').del()})
};
