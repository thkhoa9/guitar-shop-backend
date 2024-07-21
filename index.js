const express = require("express")
require("dotenv").config();
const connect = require("./src/databases/mongodb")
const port = process.env.PORT || 2002

const app = express()
app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, async()=> {
    await connect();
    console.log(`Connect successfully mongo ${port}`);
})