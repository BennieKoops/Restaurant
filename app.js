const   express     = require("express"),
        mongoose    = require("mongoose"),
        bodyParser  = require("body-parser");

        // ik weet niet zeker of body-parser al nodig is maar voor de zekerheid toegevoegd.

let app = express();

// mongoose db verbinding
mongoose.connect("mongodb://localhost:27017/restaurant", {'useUnifiedTopology': true, 'useNewUrlParser': true})

var soepSchema = mongoose.Schema({
    naamGerecht: String,
    prijs: Number,
    maxbestel: Number
});

var Soep = mongoose.model("Soepen", soepSchema)

// viewengine instellen, hierdoor hoeft er geen filetype achter de namen gezet te worden.
app.set("view engine", "ejs");

// landings pagina weergeven
app.get("/", function (req, res) {
    res.render("index");
});

// menu pagina
// menu pagina weergeven
app.get("/menu", function (req, res) {
    res.render("menu")
});

// nieuw menu item in de db zetten en menu pagina weergeven
app.post("/menu", function (req, res) {
    var     naam    = req.body.naamGerecht;
    var     prijs   = req.body.prijs,
            maxaantal  = req.body.maxbestel;
    var nieuw = {
        naamGerecht: naam, 
        prijs: prijs, 
        maxbestel: maxaantal
    };
    Soep.create(nieuw, function (err, gerecht) {
        if (err) {
            console.log("er is iets fout gegaan" + err);
        } else {
            res.redirect("/menu");
        }
    });
});

// nieuw menu item form pagina weergeven
app.get("/menu/new", function (req, res) {
   res.render("nieuwGerecht") 
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