const express = require("express")
require("dotenv").config
const port = process.env.PORT || 2002

const app = express()

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, ()=> {
    console.log(`App on port ${port}`);
})