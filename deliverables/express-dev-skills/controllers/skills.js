const Skill = require('../models/skill');


module.exports = {
    index,
    show,
    new: newSkillPage,
    addSkill,
    editSkill,
    deleteSkill,
}


function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    let id = req.params.id;

    res.render('skills/show', {
      skill: Skill.getOne(id)
    });
  }

  function newSkillPage(req, res) {
    res.render('skills/new');
  }

  function addSkill(req, res) {
    var skill = new Skill(req.body);
    skill.save(function(err){
      if (err) return res.render('skills/new');
      res.redirect('/skills');
    });
  }

  function editSkill(req, res) {
    var skill = new Skill(req.body);
    skill.editSkill(req.body);
    res.redirect('/skills');
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.body);
    res.redirect('/skills');
  }





