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
	//console.log("connected as id " + connection.threadId);
    afterConnection();
    connection.end();
});


function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      
      for (var i = 0; i < res.length; i++) {
          console.log("iD:" + res[i].item_id + " | " + "Product: " + res[i].product_name + " --- Price: " + res[i].price);
          
      }

      console.log("\n");

      inquirer.prompt([
        // Here we create a basic text prompt.
        {
          type: "input",
          message: 'Which product "iD" would you like to buy?',
          name: "buy"
        },
        {
          type: "input",
          message: "How many units would you like to buy?",
          name: "quantity"
        }
      ])
      .then(function(inquirerResponse) {
      
       console.log(inquirerResponse.buy);
       console.log(inquirerResponse.quantity);
          
      });

  });
}
