const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills.js');

//get all skills
router.get('/', skillsController.index);

//add a new skill
router.get('/new', skillsController.newSkillPage);
router.post('/', skillsController.addSkill);

//get one skill
router.get('/:id', skillsController.show);

//edit

//delete

module.exports = router;