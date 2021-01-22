const router = require('express').Router();
const adminModel = require('../models/admin/adminModel');

// register admin

router.post('/register', adminModel.registerAdmin);

module.exports = router;