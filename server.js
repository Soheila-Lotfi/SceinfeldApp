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
  password: "Leila@1357",
  database: "seinfeld"
});

//initiate mysql connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// routes

//Create a `/cast` route that will display all the actors and their data ordered by their id's.

app.get("/cast", function(req, res) {
  connection.query("SELECT * FROM actors ORDER BY id", function(err, result) {
    if (err) throw err;
    var html = "<h1>Actors ordered by ID</h1>";
    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p>Attitude: " + result[i].attitude + "</p></li>";
    }

    html += "</ul>";
    res.send(html);
  });
});

// make the server ready to start

app.listen(PORT, function() {
  console.log("the server is listening on :" + PORT);
});
