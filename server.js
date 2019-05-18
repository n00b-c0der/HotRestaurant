// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var guests = [
  {
    name: "Yoda",
    phone: "770-770-7707",
    email: "email@email.com",
    id: "master",
    date: "6/18/19",
    guests: 4,
  },

  {
    name: "Yoda",
    phone: "770-770-7707",
    email: "email@email.com",
    id: "master",
    date: "6/18/19",
    guests: 4,
  },

  

];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Public", "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "Public", "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "Public", "tables.html"));
  });


// Create New Characters - takes in JSON input
app.post("/api/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newguest = req.body;

  // Using a RegEx Pattern to remove spaces from newguest
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newguest.routeName = newguest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newguest);

  guests.push(newguest);

  res.json(newguest);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
