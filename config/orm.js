var connection = require("./connection.js");


function selectAll(callback) {
    connection.query(
        'SELECT * FROM burgers',
        callback // pass this into query so it gets called
    );

}

function insertOne(newBurger, callback) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)",
        [
            newBurger.burger_name,
        ],
        callback
    );

}

function updateOne(newBurger, callback) {
    connection.query(
        'INSERT INTO burgers (devoured) VALUES (?)',
        [
            newBurger.devoured,

        ],
        callback
    );

}


module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};