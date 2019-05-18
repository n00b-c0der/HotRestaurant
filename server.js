require('dotenv').config();
let express = require('express');
let app = express();
let config = require('./config')

let mysql = require('mysql')


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

PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {

})

app.listen(PORT, (req, res) => {
    console.log(`listening on ${PORT}`);

})