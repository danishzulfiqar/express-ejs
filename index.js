const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");
const path = require("path");
require("dotenv").config();
const port = 3000;


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.render("home", {
        title: "Hello World!"
    });
});


app.listen(process.env.PORT || port, function () {
    if (process.env.PORT) {
        console.log(`App live on port:${process.env.PORT}`)
    }
    else {
        console.log(`App live on http://localhost:${port}`);
    }
});