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
      //if (err) throw err;
      
      for (var i = 0; i < res.length; i++) {

        var id = res[i].item_id;
        var title = res[i].product_name;
        var sell = res[i].price;
        var avail = res[i].stock_quantity;

          console.log("iD:" + id + " | " + "Product: " + title + " --- Price: " + sell);
          
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
      
        var connect = connection.query("SELECT item_id FROM product", function(err, res) {
         // if (err) throw err;
          var total = inquirerResponse.buy;
    

            if (total === '1') {
                console.log(bamazon.products.item_id);
            }
            


        //    var inventory = inquirerResponse.quantity;  


        //     if (inventory > avail) {
        //         console.log('Insufficient stock. There are only '+ avail + ' item(s) left.');
        //     }
        //     else {
        //         console.log('Your ' + title + ' has been placed for ' + "$" + sell)
        //     }

        });
          
      });

  });
}
