const express = require("express");
const connection = require("./db");
require("dotenv").config();
require("express-async-errors")
const cors = require("cors")
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth")
const app = express();

connection();

const PORT = 4000;

app.use(cors())
app.use(express.json())


app.use("/api/users", userRoutes)
app.use("/api/login", authRoutes)


app.listen(PORT, () => {
    console.log(`server started working on port  ${PORT}`)
})

