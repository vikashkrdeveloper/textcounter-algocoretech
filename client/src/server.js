const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cookiparser = require('cookie-parser');
const roter = require('../routes/route');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookiparser());
app.use(roter);
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/build/index.html'));

})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})