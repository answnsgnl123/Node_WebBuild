const express = require("express");
const app = express();

const home = require("./router/home");

app.set("views", "./view");
app.set("view engine", "ejs");




app.use("/", home);
app.use(express.static(`${__dirname}/public`))

app.use(express.json());
app.use(express.urlencoded({extended:true}));




module.exports = app;

