const express = require('express');

require('dotenv').config();

const server = require("./server.js");

const port = process.env.PORT || 5000; //localhost:5000
server.listen(port, () => console.log(`\n*** Server Running on Port: ${port} \n ***`));