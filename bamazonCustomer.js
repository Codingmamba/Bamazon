// contains sql password
var passW = require("./pass.js");
// prompts
var inquirer = require('inquirer');
// my sql connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //my username
    user: "root",
    password: passW,
    database: "bamazon" 

});

connection.connect( function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
    afterConnection();
    connection.end();
});
 

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
  });
}