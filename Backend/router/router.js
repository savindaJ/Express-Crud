const express = require('express');
const router = express.Router();
const controller = require('../controller/customerController');

router.get('/users',controller.getAll);

/*router.post('/add',controller.add);
router.put('/update',controller.update);
router.put('/delete',controller.deleteCustomer);*/

module.exports = router;