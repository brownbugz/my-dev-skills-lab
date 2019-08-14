
//skills objects all instances
const skills = [
    {
      name: 'JS',
      description: 'The greatest programming language of all time. No questions.',
      level: 5
    },
    {
      name: 'HTML',
      description: 'HTML handles structure 🏢.',
      level: 3
    },
    {
      name: 'CSS',
      description: 'CSS handles style 🎨.',
      level: 9
    }
  ];

  module.exports = {
      getAll,
      getOne,
      create
  };

  function create(skill) {
    skills.push(skill);
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id - 1];
  }