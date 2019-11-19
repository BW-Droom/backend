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
    const {id} = req.params;
    db.findById(id)
        .then( company => {
            res.status(200).json(company)
        })
});

// router.get('/:item', (req, res) => {
//     const {item} = req.params
//     db.findBy(item)
//         .then(companies => {
//             res.status(200).json(companies)
//         })
// })

router.post('/', (req, res) => {
    const company = req.body;
    db.insert(company)
        .then(comapnyid)

})

module.exports = router;