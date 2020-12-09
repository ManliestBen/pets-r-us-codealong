const Pet = require('../models/pet')
const User = require('../models/user')

module.exports = {
  new: newPet,
  create,
  index,
  delete: deletePet,
  show,
  edit
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

function deletePet(req, res) {
  Pet.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/pets')
  })
}

function show(req, res) {
  Pet.findById(req.params.id)
  .populate('owner')
  .then((pet) => {
    res.render('pets/show', {pet, user: req.user})
  })
}

function edit(req, res) {
  Pet.findById(req.params.id)
  .then((pet) => {
    res.render('pets/edit', {pet, user: req.user})
  })
}