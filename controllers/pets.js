const Pet = require('../models/pet')
const User = require('../models/user')

module.exports = {
  new: newPet
}

function newPet(req, res) {
  res.render('pets/new', {user: req.user})
}