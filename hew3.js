const express =require('express');
const ejs = require('ejs');
const app = express();
const path = require("path");

app.set('views', __dirname + '/views');
app.set('views engine', 'ejs');

app.get('/', function(req, res) {
    res.render('tshirt_customize.ejs');
});

app.use(express.static(__dirname + '/public'));
app.use('/img', express.static('img'));
app.listen(3000);
