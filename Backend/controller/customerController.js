const modal = require('../modal/customerModal');

const getAll = (req,res)=>{
    // modal.getAll(req,res);
    console.log(req.body);
    res.json({state:"ok"});
}

const add = (req,res)=>{
    modal.addCustomer(req,res);
}

const update = (req,res)=>{
    modal.updateCustomer(req,res);
}

const deleteCustomer = (req,res)=>{
    modal.deleteCustomer(req,res);
}

exports.getAll = getAll;
exports.add = add;
exports.update = update;
exports.deleteCustomer = deleteCustomer;