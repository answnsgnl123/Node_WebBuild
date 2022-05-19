"use strict"

const User = require("../../model/User");

const views = {
  home : (req , res) => {
    res.render("home/main")
  },
  login : (req, res) => {
    res.render("home/login");
  },
  register : (req ,res) => {
    res.render("home/register");
  }
};

const process = {

  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
 
    
    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };
      return res.status(url.status).json(response);
  },


  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    console.log(req.body);

    const url ={
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };

    return res.status(url.status).json(response);
  }
  
}

module.exports = {
  views,
  process,
};