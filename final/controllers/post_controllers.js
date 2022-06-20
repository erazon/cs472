let obj = {};

obj.search = (req, res, next)=>{
    if(req.cookies.searchHistory){
        history = req.cookies.searchHistory;
        history.make[req.body.make]++;
        history.model[req.body.model]++;
    }
    
    console.log(req.body);
    res.cookie('userData', req.body);
    res.cookie('searchHistory', history);
    res.redirect('/preview');
};

module.exports = obj;