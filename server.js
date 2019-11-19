const express = require('express');
const companyRoutes = require('./api/companies/companyRoutes');
const seekerRoutes = require('./api/seekers/seekerRoutes');
const matchRoutes = require('./api/match/matchRoutes');
const authRoutes = require('./auth/authRoutes')
const authenticate = require('./auth/authMiddleware')

const server = express();

server.use(express.json());
server.use('/api/company', companyRoutes);
server.use('/api/seeker', authenticate, seekerRoutes);
server.use('/api/match', authenticate, matchRoutes);
server.use('/auth', authRoutes);



server.get('/', (req, res) => {

    res.status(200).json({message: "It's Working!"})
})


module.exports = server;