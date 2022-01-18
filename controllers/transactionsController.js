const express = require("express");

const transaction = express.Router();

const transactions = require("../models/transactonLog");

transaction.get("/",(_,response) =>{
    response.json(transactions)
})

module.exports = transaction;