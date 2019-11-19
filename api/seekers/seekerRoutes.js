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



module.exports = router;