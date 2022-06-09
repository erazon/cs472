const express = require('express');
const router = express.Router();
const domController = require('../controllers/dom');

router.get('/', domController.view);

module.exports = router;