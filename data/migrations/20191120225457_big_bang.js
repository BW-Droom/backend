
exports.up = function(knex) {
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
        tbl.string('phone_number', 128);
    })
    .createTable('jobs', tbl => {
        tbl.increments('id');
        tbl.string('job_title', 255).notNullable();
        tbl.text('description').notNullable();
        tbl.integer('company_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('companies')
    })
    .createTable('match', tbl => {
        tbl.integer('job_seeker_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('job_seekers');
        tbl.integer('company_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('companies');
        tbl.integer('job_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('jobs');
        tbl.integer('quality');
        tbl.primary(['job_seeker_id','job_id']);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('match')
    .dropTableIfExists('jobs')
    .dropTableIfExists('companies')
    .dropTableIfExists('job_seekers')
};
