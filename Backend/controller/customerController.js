const modal = require('../modal/customerModal')
const getAll = (req, res) => {
    modal.getAll(req, res);
}

const addCustomer = (req, res) => {
    modal.insert(req, res);
}

const updateCustomer = (req, res) => {
    modal.update(req, res);
}

const deleteCustomer = (req, res) => {
    modal.deleteCustomer(req, res);
}

exports.getAll = getAll;
exports.addCustomer = addCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;