import express, { json, urlencoded } from 'express';
import { join } from 'path';
import { renderFile } from 'ejs';

const app = express();
// npm run dev

app.use(json());
app.use(urlencoded({extended:false}));

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});

let client = {
    add:0,
    stat:0,
    view:0,
    notfound:0,
    error:0
};
let data;
app.get('/', function(req, res, next){
    res.send("Hello");
});

app.get("/add",function(req,res,next){
    console.log(++client.add);
    //res.send('<form action="/product" method="post"><input name="title"/><input type="submit" /></form>');
    res.sendFile(join(__dirname,'dom.html'));
});

app.post('/add', function(req, res, next) {
    data = req.body;
    console.log(++client.add);
    res.redirect(303, '/view');
});

app.get('/view', function(req, res, next) {
    console.log(++client.view);
    if(data){
        let html  = "<div>Name: "+data.name+"</div>"+
    "<div>Gender: "+data.gender+"</div>"+
    "<div>Is Active: "+data.is_active+"</div>"+
    "<div>Course: "+data.course+"</div>"+
    "<div>Summary: "+data.summary+"</div>";
        res.send(html);
    }
    else{
        res.redirect('/add');
    }
});

app.get('/stat', (req, res, next)=>{
    console.log(++client.stat);
    let html  = "<div>Add: "+client.add+"</div>"+
    "<div>View: "+client.view+"</div>"+
    "<div>Stat: "+client.stat+"</div>"+
    "<div>Error: "+client.error+"</div>"+
    "<div>404: "+client.notfound+"</div>";
    res.send(html);
});

app.get('/error', (req, res, next)=>{
    console.log(++client.error);
    throw new Error('broken');
});

app.use((err, req, res, next)=>{
    res.status(500).send("Something went wrong");
});

app.use((req, res, next)=>{
    console.log(++client.notfound);
    res.status(404).sendFile(join(__dirname, '404.html'));
});