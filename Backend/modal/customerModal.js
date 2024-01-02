function getAll(req, res) {
    console.log("get All")
    res.json({state:"ok"})
}

function addCustomer(req, res) {
    console.log("add")
    res.json({state:"ok"})
}

function updateCustomer(req, res) {
    console.log("update")
}

function deleteCustomer(req, res) {
    console.log("delete")
}

module.exports.getAll = getAll;
module.exports.addCustomer = addCustomer;
module.exports.updateCustomer = updateCustomer;
module.exports.deleteCustomer = deleteCustomer;