const express = require('express');
const router = express.Router();
const domController = require('../controllers/dom');

router.get("/",function(req,res,next){
    res.render('dom.html');
});

router.post('/', domController.add);

module.exports = router;