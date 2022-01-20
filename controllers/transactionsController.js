const express = require("express");

const transaction = express.Router();

const transactions = require("../models/transactons.js");

transaction.get("/",(_,response) =>{
    response.json(transactions)
})

transaction.put("/:id", (request, response)=>{
    transactions[request.params.id] = request.body;
    response.status(200).json(transactions[request.params.id]);
});

transaction.get("/:id", (request, response) => {
    const {id} = request.params;
    if(transactions[id]){
        response.json(transactions[id]);
    }else{
        response.redirect("*")
    }
})

transaction.post("/",(request, response) => {
    transactions.push(request.body);
    response.json(transactions[transactions.length-1]);
})


transaction.delete("/:id", (request, response) => {
    const {id} = request.params;
    if(transactions[id]){
    transactions.splice(id, 1)
    response.status(200).json(transactions)
    }else{
      response.status(404).json({error: "Not Found"});
    }
})

module.exports = transaction;