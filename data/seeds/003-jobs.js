
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').delete()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {job_title: 'Model', description: 'Looking for all those who sound hideous to model for our fashion show.  You could get a contract!', company_id: 1},
        {job_title: 'Auror', description: 'If you are Harry Potter, Hermione Granger, or Ron Weasley... Can you help us please.', company_id: 2},
        {job_title: 'Real Girl', description: 'Jealous of all the "real people" out there? Then you would make a great fit with this company. Lie detector tests required.', company_id: 3}
      ]);
    });
};
