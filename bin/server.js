"use strict"

const app = require("../www");

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server start PORT :" + PORT);
});