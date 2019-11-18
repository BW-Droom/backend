
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company_job').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('company_job').insert([
        {company_id: 1, job_id: 1},
        {company_id: 2, job_id: 2},
        {company_id: 3, job_id: 3}
      ]);
    });
};
