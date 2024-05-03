const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/insertuser', userController.insertUser);
router.put('/updateusers/:uuid', userController.updateUsers);
router.put('/updateproject/:uuid', userController.updateProject);
router.post('/roles/:uuid', userController.addRole);
router.get('/business_model_slabs', userController.getBusinessModelSlabs);
router.post('/invite/:uuid', userController.sendInvitation);

module.exports = router;
