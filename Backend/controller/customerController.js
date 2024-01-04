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

exports.getAll = getAll;
exports.addCustomer = addCustomer;