const path = require("path");
let obj = {};

obj.preview = (req, res, next)=>{
    let visit = 1;
    if(req.cookies.previewVisit){
        visit = parseInt(req.cookies.previewVisit) + 1;
    }
    res.cookie('previewVisit', visit);

    let userData = {};
    if(req.cookies.userData){
        userData = req.cookies.userData;
    }

    // getting count
    userData.previewCount = visit;
    visit = 0;
    if(req.cookies.searchVisit){
        visit = parseInt(req.cookies.searchVisit);
    }
    userData.searchCount = visit;

    // check popular year and body type
    let history = req.cookies.searchHistory;
    let count = 0, make = '', model = '';
    for(let item in history.make){
        if(history.make[item] > count){
            count = history.make[item];
            make = item;
        }
    }
    count = 0;
    for(let item in history.model){
        if(history.model[item] > count){
            count = history.model[item];
            model = item;
        }
    }
    console.log(make, model);
    userData.popularMake = make;
    userData.popularModel = model;

    console.log(userData);
    res.render('preview.html', userData);
};

obj.previewBG = (req, res, next)=>{
    let visit = 1;
    if(req.cookies.previewVisit){
        visit = parseInt(req.cookies.previewVisit);
    }
    if(visit <= 2){
        bg = "yellow";
    }
    else{
        bg = "green";
    }
    res.send(bg);
};

obj.search = (req, res, next)=>{
    // init search history
    let history = {
        make: {
            '2019': 0,
            '2020': 0,
            '2021': 0
        },
        model: {
            'yes': 0,
            'no': 0
        }
    };
    if(req.cookies.searchHistory){
        console.log(req.cookies.searchHistory);
    }
    else{
        res.cookie('searchHistory', history);
    }
    
    let visit = 1;
    if(req.cookies.searchVisit){
        visit = parseInt(req.cookies.searchVisit) + 1;
    }
    res.cookie('searchVisit', visit);
    res.sendFile(path.join(__dirname, '../views/search.html'));
};

obj.visitCount = (req, res, next)=>{
    let visitPreview = 0;
    if(req.cookies.searchVisit){
        visitPreview = parseInt(req.cookies.previewVisit);
    }
    let visitSearch = 0;
    if(req.cookies.searchVisit){
        visitSearch = parseInt(req.cookies.searchVisit);
    }
    res.send({visitPreview:visitPreview, visitSearch:visitSearch});
};

module.exports = obj;