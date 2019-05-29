var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

const orm = require('../config/orm.js');

router.get("/", function (req, res) {
    orm.selectAll(function (error, data) {
        if (error){
            console.log(error);
            res.sendStatus(500);
        } else{
            res.render('index', {
                burger: data
            });
        }
    })
});

router.post("/", function (req, res){
    orm.insertOne(function(error, data){
        if (error){
            console.log(error);
            res.sendStatus(500);
        } else{
            res.render('newburger', {
                burger: data
            });
        }
    })
})


module.exports = router