var express = require("express");
var mysql = require("mysql");

// create server

var app = express();

//set the port of our application
// process.env.PORT lets the port to be set by Heroku

var PORT = process.env.PORT || 8080;

// make connection to database-mysql

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "seinfeld"
});

// make the server ready to start

app.listen(PORT, function() {
  console.log("the server is listening on :" + PORT);
});
