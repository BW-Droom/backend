const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const cDB = require('../api/companies/companyDb');
const sDB = require('../api/seekers/seekerDb')

const router = express.Router();

//company auth
router.post('/company/register', (req, res) => {
    const company = req.body
    const name = req.body.company_name;
    const email = req.body.company_email;
    const password = req.body.password;

    const hash = bcrypt.hashSync(password, 8);

    if(name && email && password) {
        cDB.insert({...company, password: hash})
            .then(company => {
                token = generateCompanyToken(company);
                res.status(201).json({company, token})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: 'Could not register company'});
            });
    } else {
        res.status(400).json({message: 'Must provide company name, email, and password'});
    }
});

router.post('/company/login', (req, res) => {
    const { email, password } = req.body;

    if(email && password) {
        cDB.findByEmail(email)
            .then(company => {
                if(company && bcrypt.compareSync(password, company.password)) {
                    const token = generateCompanyToken(company);
                    res.status(200).json({
                        company,
                        token
                    });
                } else {
                    res.status(401).json({message: 'Invalid email or password'});
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'Could not log in'});
            });
    } else {
        res.status(400).json({message: 'Must provide email and password'});
    }
});

//Job seeker auth
router.post('/seeker/register', (req, res) => {
    const seeker = req.body
    const name = req.body.name;
    const email = req.body.email;
    const job = req.body.dream_job;
    const password = req.body.password;

    const hash = bcrypt.hashSync(password, 8);

    if(name && email && job && password) {
        sDB.insert({...seeker, password: hash})
            .then(seeker => {
                token = generateSeekerToken(seeker);
                res.status(201).json({seeker, token})
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'Could not register new job seeker'});
            });
    } else {
        res.status(400).json({message: 'Must provide name, email, dream job, and password'});
    }
});

router.post('/seeker/login', (req, res) => {
    const { email, password } = req.body;

    if(email && password) {
        sDB.findByEmail(email)
            .then(seeker => {
                if(seeker && bcrypt.compareSync(password, seeker.password)) {
                    const token = generateSeekerToken(seeker);
                    res.status(200).json({
                        seeker,
                        token
                    });
                } else {
                    res.status(401).json({message: 'Invalid email or password'});
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'Could not log in'});
            });
    } else {
        res.status(400).json({message: 'Must provide email and password'});
    }
});


// generate tokens
function generateCompanyToken(company) {
    const payload = {
      subject: company.id,
      name: company.company_name
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
}

function generateSeekerToken(seeker) {
    const payload = {
        subject: seeker.id,
        name: seeker.name
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;