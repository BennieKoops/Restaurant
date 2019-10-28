const express = require("express");

let app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});



// vvv Dit moet altijd onderaan staan vvv

app.get("*", function (req, res) {
    res.render("404");
});

app.listen(3000, function () {
    console.log ("Restaurant server is gestart!");
});