
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {job_title: 'Model', description: 'Looking for all those who sound hideous to model for our fashion show.  You could get a contract!'},
        {job_title: 'Auror', description: 'If you are Harry Potter, Hermione Granger, or Ron Weasley... Can you help us please.'},
        {job_title: 'Real Girl', description: 'Jealous of all the "real people" out there? Then you would make a great fit with this company. Lie detector tests required.'}
      ]);
    });
};
