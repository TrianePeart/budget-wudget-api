const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

const transactions = require("./controllers/transactionsController.js");
app.use(express.json());
app.use(transactions);

app.get("/", (_, response) => {
    response.send("Welcome To Budget Wudget")
})

app.get("*", (_, response)=> {
    response.status(404).json({error: "Page Not Found"})
})

module.export = app;