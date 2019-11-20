const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const companyRoutes = require('./api/companies/companyRoutes');
const seekerRoutes = require('./api/seekers/seekerRoutes');
const matchRoutes = require('./api/match/matchRoutes');
const authRoutes = require('./auth/authRoutes')
const authenticate = require('./auth/authMiddleware')

const server = express();

server.use(express.json());
server.use(helmet());

const whitelist = ['http://localhost:3000', 'https://droombackend.herokuapp.com/'];
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000'
};
server.use(cors(corsOptions));

server.use('/api/company', authenticate, companyRoutes);
server.use('/api/seeker', authenticate, seekerRoutes);
server.use('/api/match', authenticate, matchRoutes);
server.use('/auth', authRoutes);

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000'
};

server.get('/', (req, res) => {

    res.status(200).json({message: "It's Working!"})
})


module.exports = server;