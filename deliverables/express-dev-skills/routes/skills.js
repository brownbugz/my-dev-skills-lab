const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills.js');

//get all skills
router.get('/', skillsController.index);

//get one skill
router.get('/:id', skillsController.show);

module.exports = router;