const express = require("express");
const ejs = require('ejs');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, "templates"));

app.listen(3000, ()=>{
    console.log('app2.js service started');
})

app.get('/admin', (req, res, next)=>{
    console.log('Admin landing');
    res.render('index', {list:["apple", "banana", "pears"]});
})