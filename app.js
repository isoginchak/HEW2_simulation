var mysql = require('mysql');
const express =require('express');
const app = express();
const path = require("path");
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port : 3306,
    database : 'test'
});
app.set("views engine","ejs");
// app.set('views', path.join(__dirname, 'public_html'));
connection.connect();
app.get('/',(req,res) =>{
    connection.query(
        'Select * from sns',
        (error,result) =>{
            console.log(result)
            res.render('sns.ejs',{sns:result});
        }
    );
});
app.listen(3000);
