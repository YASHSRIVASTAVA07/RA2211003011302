const express = require('express');
const { getTopUsers, getPosts } = require('../controllers/analyticsController');

const router = express.Router();

router.get('/users', getTopUsers);
router.get('/posts', getPosts);

module.exports = router;
