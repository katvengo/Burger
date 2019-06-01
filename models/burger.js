// // Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    selectAll: function () {
        orm.selectAll("burgers", function (req) {
            [req.body]

        });
    },
    insertOne: function () {
        orm.insertOne("burgers", function (req) {
            var newBurger = req.body;
            [
                newBurger.id,
                newBurger.burger_name,
                newburger.devoured
            ]
        });
    },
    updateOne: function (devouredBurger) {
         console.log('$$$', devouredBurger)
        orm.updateOne("burgers", function (req) {
            var devouredBurger = req.body
            [
                devouredBurger.id,
                devouredBurger.burger_name,
                devouredBurger.devoured
           
            ]


        });
    }

};

// // Export the database functions for the controller (catsController.js).
module.exports = burger;