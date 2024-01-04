const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "80221474",
    insecureAuth: true,
    database: "thogakade"
});


con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
})

module.exports = con;