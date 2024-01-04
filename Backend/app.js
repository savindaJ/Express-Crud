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
    controller.getAll(req, res);
});

app.post('/post', (req, res) => {
    controller.addCustomer(req, res);
})

app.put('/update', (req, res) => {
    controller.updateCustomer(req, res);
})

app.put('/delete', (req, res) => {
    controller.deleteCustomer(req, res);
})

module.exports = app;