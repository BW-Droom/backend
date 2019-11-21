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
});

router.get('/:id/jobs/:jobId', (req, res) => {
    const { jobId } = req.params

    db.findJobById(jobId)
        .then(job => {
            res.status(200).json(job)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Unable to find job"})
        })
});

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

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const seeker = req.body;

    db.update(seeker, id)
        .then(seeker => {
            if (!seeker) {
                res.status(400).json({message: "Unable to edit profile"})
            } else {
                res.status(200).json(seeker)
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Unable to edit this account"})
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.remove(id)
    .then(count => {
        if(count > 0) {
            res.status(200).json({message: `Successfully deleted ${count} account`})
        } else {
            res.status(400).json({message: "Account was not deleted successfully"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Unable to delete this account"})
    })
});

module.exports = router;