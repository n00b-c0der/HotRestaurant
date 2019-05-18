require('dotenv').config();
let express = require('express');
let app = express();
let config = require('./config');
let mysql = require('mysql');
let PORT = 3030;

let connection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    port: config.db_port,
    database: config.db_name
})

function data() {
    connection.query('select * from reservations', (err, data) => {
        if (err) throw err;
        if (data.length = 0) {
            console.log('empty');

        } else {
            console.log(data);
        }

    })
}
data()

var guests = [
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
app.get("/", function(req, res) {
    res.sendFile('public/home.html' , { root : __dirname});
});

app.get("/reserve", function(req, res) {
    res.sendFile('public/reserve.html' , { root : __dirname});
});

app.get("/tables", function(req, res) {
    res.sendFile('public/tables.html' , { root : __dirname});
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
