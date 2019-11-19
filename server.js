const express = require('express');
const companyRoutes = require('./api/companies/companyRoutes')
const server = express();

server.use(express.json());
server.use('/api/companies', companyRoutes)




server.get('/', (req, res) => {

    res.status(200).json({message: "It's Working!"})
})


module.exports = server;