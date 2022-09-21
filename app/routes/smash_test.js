
const express = require('express');
const router = express.Router();
const controller = require('../controllers/smash_test')

router.post('/inserirDoc', controller.smash_test);
router.get('/getDoc', controller.smash_test_get);
router.get('/getDocCountry', controller.smash_test_get_country);

module.exports = router;


  