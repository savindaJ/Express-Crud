const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller/customerController');

app.use(cors);

app.use(
    express.urlencoded(
        {
            extended: true
        }));

app.use(express.json());

app.get('/users',(req, res)=>{
    controller.getAll(req,res);
    res.json({status:"ok"});
});

/*app.post('/add',(req,res)=>{
    controller.add(req,res);
});

app.put('/update',(req,res)=>{
    controller.update(req,res);
});

app.put('/delete',(req,res)=>{
    controller.deleteCustomer(req,res);
});*/

module.exports = app;