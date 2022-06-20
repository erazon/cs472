var express = require("express");
var app = express();
var ejs = require("ejs");

var cookieParser = require("cookie-parser");

const getController = require('./controllers/get_controllers');
const postController = require('./controllers/post_controllers');

app.listen(3000,function(){
    console.log('server is running on 3000');
});

//Read the parameters from post request
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get('/', getController.search);

app.post('/', postController.search);

app.get('/preview', getController.preview);

app.get('/preview-bg', getController.previewBG);

app.get('/visit-count', getController.visitCount);
