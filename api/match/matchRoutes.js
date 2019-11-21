const express = require('express');

const db = require('./matchDb');

const router = express.Router();

router.post('/', (req, res) => {
    const sId = req.body.job_seeker_id;
    const cId = req.body.company_id;
    const jId = req.body.job_id;
    // can add quality later by including some sort of function that calculated the quality and then stores it here
    db.insert({job_seeker_id: sId, company_id: cId, job_id: jId})
        .then(id => {
            console.log(id)
            res.status(200).json({message: 'Match Successful'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Unable to add match"})
        })
})

router.delete('/', (req, res) => {
    const sId = req.body.job_seeker_id;
    const jId = req.body.job_id;

    db.remove({sId, jId})
        .then(count => {
            res.status(200).json({message: `${count} matches were deleted`})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Unable to delete match"})
        })
})

module.exports = router;