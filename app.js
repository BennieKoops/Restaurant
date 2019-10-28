const express = require("express");

let app = express();

app.set("view engine", "ejs");

// landings pagina
app.get("/", function (req, res) {
    res.render("index");
});

// menu pagina
app.get("/menu", function (req, res) {
    res.send("Hier komt de menu pagina")
});

// Review pagina
app.get("/reviews", function (req, res) {
    res.send("Hier komt de reviews pagina")
});

// blog pagina
app.get("/blog", function (req, res) {
    res.send("Hier komt de blog pagina")
});

// bestellingen pagina
app.get("/bestellig", function (req, res) {
    res.send("Hier komt de bestellingen pagina")
});

// vvv Dit moet altijd onderaan staan vvv

app.get("*", function (req, res) {
    res.render("404");
});

app.listen(3000, function () {
    console.log ("Restaurant server is gestart!");
});