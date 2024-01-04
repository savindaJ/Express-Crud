const express = require('express');
const router = express.Router();
const controller = require('../controller/customerController');

router.get('/get', controller.getAll);
router.post('/post', controller.addCustomer);
router.put('/put', controller.updateCustomer);
router.put('/delete', controller.deleteCustomer);

module.exports = router;