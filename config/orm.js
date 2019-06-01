var connection = require("./connection.js");


function selectAll(callback) {
    connection.query(
        'SELECT * FROM burgers',
        callback // pass this into query so it gets called
    );

}
function insertOne(newBurger, callback) {
    console.log('hhhh', newBurger)
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)",
        [
            newBurger.burger_name,
        ],
        callback
    );

}

function updateOne(devouredBurger, callback) {
    // console.log('###', id)
    connection.query(
        'UPDATE burgers SET devoured = true WHERE id = ?',
        [devouredBurger.id],
        callback
    );

}


module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};