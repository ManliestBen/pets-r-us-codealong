const Pet = require('../models/pet')
const User = require('../models/user')

module.exports = {
  index,
  show
}

function index(req, res) {
  User.find({})
  .then((users) => {
    res.render('users/index', {users, user: req.user})
  })
}

function show(req, res) {
  User.findById(req.params.id)
  .then((user) => {
    Pet.find({ owner: user._id })
    .then((pets) => {
      res.render('users/show', {user: req.user, user, pets})
    })
  })
}