const connection = require('../db/connection');
function insert(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const salary = req.body.salary;

    console.log(id,name,address,salary);

    const insertQuery = "INSERT INTO customer (customerId, Name, address, salary) VALUES (?, ?, ?, ?)";
    const values = [id,name,address,parseFloat(salary)];

    connection.query(insertQuery, values, function (err, result) {
        if (err) res.json(err.code);
        console.log("Number of records inserted: " + result.affectedRows);
        res.json({message:'Customer Successfully inserted !'});
    });
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