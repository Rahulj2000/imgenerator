 console.log("hello")
// database = imgdata , table = loginf,

// (A) LOAD DB MODULE
const mysql = require("mysql");

// (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "imgdata"
});
db.connect(err => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

// (C) QUERY
db.query("SELECT * FROM `users`", (err, results) => {
  if (err) { throw err; }
  console.log(results);
});

// document.getElementById('submit').addEventListener('click',(e)=>
// {
//     e.preventDefault()
//     const firstname = document.getElementById('firstname').value
//     const lastname = document.getElementById('lastname').value
//     const Gender = document.getElementById('Gender').value
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value
//     console.log(firstname,lastname,Gender,email,password)
// })