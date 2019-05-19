require("dotenv").config();
let config = require("./config");

let express = require("express");
let app = express();
let PORT = process.env.SERVER_PORT || 3030;
let customerReservations = require('./reservations')
let path = require('path')
let mysql = require('mysql')

var connection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name,
    port: config.db_port

})

// connection.query(
//     connection.query('SELECT * FROM reservations', function (err, rows) {
//         if (err) throw err

//         console.log('The solution is: ', rows)
//     })
// )

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'))

})
app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tables.html'))
})

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reserve.html'))
})


app.post('/api/table', (req, res) => {
    console.log(req.body);

    let newCustomerReservations = req.body;

    customerReservations.push(newCustomerReservations)

    res.json(customerReservations)

})

app.listen(PORT, () => {
    console.log("listening on " + PORT);
});