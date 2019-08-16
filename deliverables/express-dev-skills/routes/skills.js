const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills.js');

//get all skills
router.get('/', skillsController.index);

//add a new skill
router.get('/new', skillsController.new);
router.post('/', skillsController.addSkill);

//get one skill
router.get('/:id', skillsController.show);

//edit
router.put('/:id', skillsController.editSkill);

//delete
router.delete('/:id', skillsController.deleteSkill);

module.exports = router;