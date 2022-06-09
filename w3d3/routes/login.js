const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.get('/', (req, res, next)=>{
    res.render('login.html', {error: false});
});

router.post('/', loginController.login);

module.exports = router