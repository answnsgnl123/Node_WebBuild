"use strict"

const views = {
  home : (req , res) => {
    res.render("home/main")
  },

  login : (req, res) => {
    res.render("home/index");
  }
};

module.exports = {
  views,
};