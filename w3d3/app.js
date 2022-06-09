const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const domRouter = require('./routes/dom');
const viewRouter = require('./routes/view');

const app = express();
// npm run dev

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser('saltlake'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'templates'));

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});

app.use((req, res, next)=>{
    if(req.signedCookies && req.signedCookies.authKey){
        if(req.url == '/login'){
            res.redirect('/add');
        }
        else{
            next();
        }
    }
    else{
        if(req.url == '/login'){
            next();
        }
        else{
            res.redirect('/login');
        }
    }
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/add', domRouter);
app.use('/view', viewRouter);

app.get('/error', (req, res, next)=>{
    throw new Error('broken');
});

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send("Something went wrong");
});

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});