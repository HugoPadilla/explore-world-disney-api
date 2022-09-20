const express = require("express");
const app = express()

app.get("/", function (req, res) {
  res.send("test api ok")
})

app.listen(3000)
console.log("Server running on localhost:",3000)