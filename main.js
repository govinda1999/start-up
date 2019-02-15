const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const Add = require('./models/add');
const database=require('./config/database');
const port = process.env.port || 8080;
const app = express();
app.use(bodyparser.json());
app.set('views','./public');
app.set('view engine','twig');
app.use(bodyparser.urlencoded({ useNewUrlParse:true }));
app.use(express.static('./public'));
const database_name=database.databaseuri;
mongoose.connect(database_name, (err, res) => {
    if (err)
        console.log("Error in connecting to database");
    else
        console.log("Connected to DB");
});

app.get('/', (req, res) => {
    res.render('index', {});
});

app.post('/send', (req, res) => {
    var Add_user = new Add();
    Add_user.name = req.body.name;
    var name=req.body.name;
    Add_user.email = req.body.email;
    Add_user.subject = req.body.subject;
    Add_user.message = req.body.message;
    Add_user.date = new Date();
    Add_user.save((err, resu) => {
        if (err)
        {
            console.log("Error is occured on save data");
       		console.log(err);
        }
            res.render('send', { name: name });
    });
});


app.listen(port, () => {
    console.log("Listening at " + port);
});


