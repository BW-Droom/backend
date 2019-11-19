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
    insertJob,
    updateJob,
    removeJob,
    findMatch,

};

function find() {
    return db('companies');
};

function findBy() {
    return db('companies');
};

function findById(id) {
    return db('companies')
        .where({id})
        .first();
};

function insert(company) {
    return db('companies')
        .insert(company)
        .then(ids => {id: ids[0]})
};

function update() {
    return db('companies')
};

function remove() {
    return db('companies')
};

function findJobs() {
    return db('jobs')
};

function findJobById() {
    return db('jobs')
};

function insertJob() {
    return db('jobs')
};

function updateJob() {
    return db('jobs')
};

function removeJob() {
    return db('jobs')
};

function findMatch() {
    return db('match')
};