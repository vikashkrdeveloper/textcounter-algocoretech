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
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(roter);
app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})