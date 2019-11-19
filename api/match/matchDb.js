const db = require('../../data/db-config');

module.exports = {
    insert,
    remove,
};

function insert(match) {
    return db('match')
        .insert(match)
        .then(([id]) => findById(id))
};

function remove(id) {
    return db('match')
        .where({id})
        .del()
};