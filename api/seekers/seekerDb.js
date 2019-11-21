const db = require('../../data/db-config');

module.exports = {
    find,
    findByEmail,
    findById,
    insert,
    update, 
    remove,
    findJobs,
    findJobById,
    findMatch,

};

function find() {
    return db('job_seekers');
};

function findByEmail(email) {
    return db('job_seekers')
        .where({email: email})
        .first();
};

function findById(id) {
    return db('job_seekers')
        .where({id})
        .first();
};

function insert(seeker) {
    return db('job_seekers')
        .insert(seeker, 'id')
        .then(([id]) => findById(id))
};

function update(seeker, id) {
    return db('job_seekers')
        .where({id})
        .update(seeker)
        .then(count => {
            if(count > 0) {
                return findById(id)
            }
        });
};

function remove(id) {
    return db('job_seekers')
        .where({id})
        .del()
};

function findJobs() {
    return db('jobs as j')
        .join('companies as c', 'c.id', 'j.company_id')
        .select('j.company_id', 'c.company_name', 'c.company_email', 'c.location', 'c.phone_number',  'j.id as job_id', 'j.job_title', 'j.description')
    };

function findJobById(id) {
    return db('jobs as j')
        .join('companies as c', 'c.id', 'j.company_id')
        .select('j.company_id', 'c.company_name', 'c.company_email', 'c.location', 'c.phone_number',  'j.id as jobId', 'j.job_title', 'j.description')
        .where({id})
        .first()
};

function findMatch(seekerId) {
    return db('match as m')
        .join('companies as c', 'c.id', 'm.company_id')
        .join('jobs as j', 'j.id', 'm.job_id')
        .select('m.*', 'c.company_name', 'c.company_email', 'c.location', 'c.phone_number', 'j.job_title', 'j.description')
        .where({job_seeker_id: seekerId})
};