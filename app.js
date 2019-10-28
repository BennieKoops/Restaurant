const express = require("express");

let app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(3000, function () {
    console.log ("Restaurant server is gestart!");
});