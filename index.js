const express = require('express');

const server = require("./server.js");

const port = 5000; //localhost:5000
server.listen(port, () => console.log(`Server Running on Port ${port}`));