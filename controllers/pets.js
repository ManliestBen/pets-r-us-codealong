const Pet = require('../models/pet')
const User = require('../models/user')

module.exports = {
  new: newPet,
  create,
  index
}

function newPet(req, res) {
  res.render('pets/new', {user: req.user})
}

function create(req, res) {
  req.body.owner = req.user._id
  Pet.create(req.body)
  .then(() => {
    res.redirect('/pets')
  })
}

function index(req, res) {
  Pet.find({})
  .populate('owner')
  .then((pets) => {
    res.render('pets/index', {pets, user: req.user})
  })
}