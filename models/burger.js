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
            const newBurger = req.body;
            [
                newBurger.id,
                newBurger.burger_name,
                newburger.devoured
            ]
        });
    
        //     // update: function (objColVals, condition, cb) {
        //     //     orm.update("cats", objColVals, condition, function (res) {
        //     //         cb(res);
        //     //     });
        //   }
    }
};

// // Export the database functions for the controller (catsController.js).
module.exports = burger;