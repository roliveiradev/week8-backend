const express = require('express');

const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://tinderdev:tinderdev@cluster0-ztjmj.mongodb.net/tinderdev?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json());
server.use(routes);


server.listen(3333);

