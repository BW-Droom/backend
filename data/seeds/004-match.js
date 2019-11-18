
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('match').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('match').insert([
        {job_seeker_id: 1, company_id: 1, job_id: 1, quality: 90},
        {job_seeker_id: 2, company_id: 2, job_id: 2, quality: 90},
        {job_seeker_id: 3, company_id: 3, job_id: 3, quality: 90}
      ]);
    });
};
