const express = require("express");
const app = express();
const home = require("./src/router/home")

app.use("/",home);

app.set("views", "./src/views");
app.set("view engine", "ejs");



module.exports = app;