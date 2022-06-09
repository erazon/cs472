exports.add = (req, res, next) => {
    data = req.body;
    res.cookie('domData', req.body);
    res.redirect(303, '/view');
}

exports.view = (req, res, next) => {
    if(req.cookies.domData){
        let data = req.cookies.domData;
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
}