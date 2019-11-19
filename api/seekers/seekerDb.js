const db = require('../../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    insert,
    update, 
    remove,
    findJobs,
    // findJobById,
    findMatch,

};

function find() {
    return db('job_seekers');
};

function findBy(filter) {
    return db('job_seekers')
        .where(filter);
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
        .join('company_job as cj', 'cj.job_id', 'j.id')
        .join('companies as c', 'c.id', 'cj.company_id')
};

// to Find Jobs By Id, the front end should .filter the array returned by findJobs by the id property
// function findJobById() {
//     return db('jobs')
// };

function findMatch(seekerId) {
    return db('match as m')
        .join('companies as c', 'c.id', 'm.company_id')
        .where({seekerId})
};