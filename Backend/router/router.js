const express = require('express');
const router = express.Router();
const controller = require('../controller/customerController');

router.get('/get',controller.getAll);

module.exports = router;