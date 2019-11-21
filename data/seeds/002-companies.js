
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').delete()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {company_name: 'Ugly Duck Modeling Agency', company_email: 'udma@info.com', password: 'ugly', location: 'Idaho', phone_number: '888-555-8675'},
        {company_name: 'Ministry of Magic', company_email: 'jobs@mom.com', password: 'magic', location: 'New York', phone_number: '888-555-3099'},
        {company_name: 'Real Boy Inc.', company_email: 'pinocchio@realboyinc.com', password: 'lies', location: 'San Francisco', phone_number: '888-555-2222'},
      ]);
    });
};
