import express, { json, urlencoded } from "express";
import { renderFile } from 'ejs';
import { join } from 'path';
const app = express();


app.use(json());
app.use(urlencoded({extended:false}));
app.set('view engine', 'html');
app.engine('html', renderFile);
app.set('views', join(__dirname, "template"));

app.listen(3000, ()=>{
    console.log('app2.js service started');
})

app.get('/admin', (req, res, next)=>{
    console.log('Admin landing');
    res.render('index', {list:["apple", "banana", "pears"]});
})