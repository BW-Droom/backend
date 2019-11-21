const db = require('../../data/db-config');

module.exports = {
    insert,
    remove,
};

// need job_seeker_id, company_id, job_id
function insert(match) {
    return db('match')
        .insert(match)
        .then(([id]) => {
            return id
        })
};

function remove({sId, jId}) {
    return db('match')
        .where({job_seeker_id: sId, job_id: jId})
        .del()
};