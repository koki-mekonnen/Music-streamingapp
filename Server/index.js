const express = require("express");
const connection = require("./db");
require("dotenv").config();
const app = express();

connection();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server started working on port  ${PORT}`)
})

