const db = require('../../data/db-config');

module.exports = {
    find,
    findByEmail,
    findById,
    insert,
    update, 
    remove,
    findJobs,
    // findJobById,
    insertJob,
    updateJob,
    removeJob,
    findMatch,

};

function find() {
    return db('companies');
};

function findByEmail(email) {
    return db('companies')
        .where({company_email: email})
        .first();
};

function findById(id) {
    return db('companies')
        .where({id})
        .first();
};

function insert(company) {
    return db('companies')
        .insert(company, 'id')
        .then(([id]) => findById(id))
};

function update(company, id) {
    return db('companies')
        .where({id})
        .update(company)
        .then(count => {
            if(count > 0) {
                return findById(id)
            }
        });
};

function remove(id) {
    return db('companies')
        .where({id})
        .del();
};

function findJobs(companyId) {
    return db('jobs')
        .where(companyId)
};

// to Find Jobs By Id, the front end should .filter the array returned by findJobs by the id property
// function findJobById(companyId, id) {
//     return db('jobs')
//         .where(companyId)
//         .then(([jobs]) => {
            
//         })
// };

function insertJob(job) {
    return db('jobs')
        .insert(job, 'id')
        .then(([id]) => {
            return id
        })
        //add message to endpoint "Created Job with id of ${id}"
};

function updateJob(job, id) {
    return db('jobs')
        .where({id})
        .update(job)
        .then(([id]) => {
            return id
        })
        //add message to endpoint "Updated Job with id of ${id}"
};

function removeJob(id) {
    return db('jobs')
        .where({id})
        .del();
        //add message to endpoint "Deleted ${num} job successfully"
};

function findMatch(companyId) {
    return db('match as m')
    .join('job_seekers as js', 'js.id', 'm.company_id')
    .where({companyId})
};