require('dotenv').config();
let express = require('express');
let app = express();

PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {

})

app.listen(PORT, (req, res) => {
    console.log(`listening on ${PORT}`);

})