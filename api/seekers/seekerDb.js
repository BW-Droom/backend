const db = require('../../data/db-config');

module.exports = {
    find,
    findBy,
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

function findBy() {
    return db('job_seekers')
};

function findById(id) {
    return db('job_seekers')
        .where({id})
        .first();
};

function insert(company) {
    return db('job_seekers')
        .insert(company)
        .then(ids => {id: ids[0]})
};

function update() {
    return db('job_seekers')
};

function remove() {
    return db('job_seekers')
};

function findJobs() {
    return db('jobs')
};

function findJobById() {
    return db('jobs')
};

function findMatch() {
    return db('match')
};