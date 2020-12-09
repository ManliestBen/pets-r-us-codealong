const Pet = require('../models/pet')
const User = require('../models/user')

module.exports = {
  create
}

function create(req, res) {
  Pet.findById(req.params.id)
  .then((pet) => {
    req.body.postedBy = req.user.name
    pet.comments.push(req.body)
    pet.save()
    .then(() => {
      res.redirect(`/pets/${pet._id}`)
    })
  })
}