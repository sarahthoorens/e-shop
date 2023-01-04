const router = require('express').Router();

// controllers

// middleware
const { authMiddleware } = require('../../utils/auth');

// routes
router.route('/').post(createUser).put(authMiddleware, getTest);

router.route('/login').post(login);
