"use strict"

const db = require("../db/db");  

class Userfuntion {

  static async save(usersinfo) {
    return new Promise((resolve,reject) => {
      const query = "INSERT INTO MEMBER(id, pswd, age, email) VALUES(?, ?, ?, ?);";
      db.query(query,[usersinfo.id, usersinfo.pswd, usersinfo.age, usersinfo.email], (err) => {
        if(err) reject('${err}');
        else resolve({ success : true});
      });
    });
  } 
}


module.exports = Userfuntion