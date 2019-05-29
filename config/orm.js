var connection = require("./connection.js");


function selectAll(callback) {
    connection.query(
        'SELECT * FROM burgers',
        callback // pass this into query so it gets called
    );
  
}

function insertOne(newBurger, callback) {
    connection.query("INSERT INTO burgers (id, burger_name, devoured) VALUES (?, ?, ?)",
        [
            newBurger.id,
            newBurger.burger_name,
            newBurger.devoured

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