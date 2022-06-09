const crypto = require('crypto');
exports.login = (req, res, next) => {
    if(req.body.username == 'admin' && req.body.password == '123'){
        res.cookie('authKey', crypto.createHash('sha1').update(req.body.username+req.body.password).digest('hex'),
        {maxAge: 1000*60*60*24*7, signed: true});
        res.redirect('/add');
    }
    else{
        res.render('login.html', {error: true});
    }
}