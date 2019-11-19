const db = require('../../data/db-config');

module.exports = {
    find,
    findById,
    // findBy,
    insert,
    update, 
    remove,
};

function find() {
    return db('companies');
};

function findById(id) {
    return db('companies')
        .where({id})
        .first();
};

// function findBy(item) {
//     return db('companies')
//         .where(item)
// }

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