const connection = require('../db/connection');
function insert(req, res) {

}

function update(req,res){

}

function getAll(req,res) {
    const insertQuery = "SELECT * FROM customer";

    connection.query(insertQuery, function (err, result) {
        if (err) res.json(err.code);
        res.json({
            data:result
        });
    });
}

function deleteCustomer(req,res){

}

module.exports.insert = insert;
module.exports.update = update;
module.exports.getAll = getAll;
module.exports.deleteCustomer = deleteCustomer;