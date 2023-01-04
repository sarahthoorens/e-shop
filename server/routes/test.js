const express = require('express');
const router = express.Router();

//import controllers
const {getTest} = require('../controllers/test');

//import middleware

//api routes
router.get('/test', getTest);

module.exports = router; 