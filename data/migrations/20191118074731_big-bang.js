
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('job_seekers', tbl => {
      tbl.increments('id');
      tbl.string('name', 128).notNullable();
      tbl.string('email', 128).unique().notNullable();
      tbl.string('occupation', 255);
      tbl.text('experience');
      tbl.string('dream_job', 255).notNullable();
      tbl.string('password', 255).notNullable();
  })
    .createTable('companies', tbl => {
        tbl.increments('id');
        tbl.string('company_name', 255).notNullable();
        tbl.string('company_email', 255).unique().notNullable();
        tbl.string('password', 255).notNullable();
        tbl.string('location', 128);
        tbl.string('phone_number', 128).unique();

    })
    .createTable('jobs', tbl => {
        tbl.increments('id');
        tbl.string('job_title', 255).notNullable();
        tbl.text('description').notNullable();
    })
    .createTable('match', tbl => {
        tbl.integer('job_seeker_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('job_seekers')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('company_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('companies')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('job_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('jobs')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('quality');
        tbl.primary(['job_seeker_id','company_id']);
    })
    .createTable('company_job', tbl => {
        tbl.integer('company_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('companies')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('job_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('jobs')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');;
        tbl.primary(['company_id', 'job_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('company_job')
    .dropTableIfExists('match')
    .dropTableIfExists('jobs')
    .dropTableIfExists('companies')
    .dropTableIfExists('job_seekers')
};
