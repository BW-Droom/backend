const express = require('express');

const db = require('./seekerDb');

const router = express.Router();

router.get('/', (req, res) => {
    db.find()
        .then(seekers => {
            res.status(200).json(seekers)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Could not find job seekers"})
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params

    db.findById(id)
        .then(seeker => {
            if (seeker) {
                res.status(200).json(seeker)
            } else {
                res.status(404).json({message: "Seeker with this id does not exsist"})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Could not find job seeker"})
        })
});

router.get('/:id/jobs', (req, res) => {
    db.findJobs()
        .then(jobs => {
            res.status(200).json(jobs)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Unable to find Jobs"})
        })
})

router.get('/:id/match', (req, res) => {
    const { id } = req.params;

    db.findMatch(id)
        .then(matches => {
            res.status(200).json(matches)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Unable to find Matches for this job seeker"})
        })
})



module.exports = router;