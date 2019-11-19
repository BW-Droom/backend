const express = require('express');

// require('dotenv').config();

const server = require("./server.js");
const defaults = require("./config/default.js");

const port = defaults.port; //localhost:5000
server.listen(port, () => console.log(`\n*** Server Running on Port: ${port} \n ***`));