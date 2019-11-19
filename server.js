const express = require('express');
const company = require('./companies/companyDb');
const server = express();

server.use(express.json());




server.get('/', (req, res) => {

    res.status(200).json({message: "It's Working!"})
})

server.get('/api/companies', (req, res) => {
    company.find()
        .then( companies => {
            console.log(companies)
        })
})

module.exports = server;