const getAll = (req,res)=>{
    res.json({
        status:"ok"
    });
}

const addCustomer = (req,res)=>{
    res.json({
        status:"post"
    });
}

const updateCustomer = (req,res)=>{
    res.json({
        status:"put"
    });
}

const deleteCustomer = (req,res)=>{
    res.json({
        status:"delete"
    });
}

exports.getAll = getAll;
exports.addCustomer = addCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;