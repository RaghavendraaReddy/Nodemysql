const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const testRouter = require('./Router/CreateRouter');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'resto',
    port:7306
 });

app.use('/restaurants', testRouter);

app.get('/', (req,res) => {
    res.status(200).json("hello db");
});

app.listen(8099,()=>{
    console.log("server started")
});

module.exports = connection;

