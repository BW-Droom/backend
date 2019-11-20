const express = require('express');

const db = require('./companyDb');

const router = express.Router();

router.get('/', (req, res) => {
    db.find()
        .then(companies => {
            res.status(200).json(companies)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Could not find companies"})
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params

    db.findById(id)
        .then(company => {
            if (company) {
                res.status(200).json(company)
            } else {
                res.status(404).json({message: "Company with this id does not exsist"})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Could not find company"})
        })
});

router.get('/:id/jobs', (req, res) => {
    const { id } = req.params
    db.findJobs(id)
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
            res.status(500).json({message: "Unable to find Matches for this company"})
        })
})

router.post('/', (req, res) => {
    const company = req.body;
    db.insert(company)
        .then(comapnyid)

})

module.exports = router;