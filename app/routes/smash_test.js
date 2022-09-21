
const express = require('express');
const router = express.Router();
const controller = require('../controllers/smash_test')

router.post('/', controller.smash_test);

module.exports = router;


  