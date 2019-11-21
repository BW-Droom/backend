
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('job_seekers').delete()
    .then(function () {
      // Inserts seed entries
      return knex('job_seekers').insert([
        {name: 'Jake', email: 'Jake@statefarm.com', occupation: 'sales', experience: '10 years in insurance sales', dream_job: 'model', password: 'soundugly'},
        {name: 'Harry', email: 'Harry@hogwarts.com', occupation: 'student', experience: 'Fighting voldemort', dream_job: 'auror', password: 'ginny'},
        {name: 'Vickie', email: 'Vickie@smallwonder.com', occupation: 'robot', experience: '7 years as a robot', dream_job: 'real person', password: 'byeee'},
      ]);
    });
};
