const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller/customerController')

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/get', (req, res) => {
    controller.getAll(req,res);
});

module.exports = app;