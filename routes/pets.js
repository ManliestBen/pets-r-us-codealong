const router = require("express").Router();
const petsCtrl = require('../controllers/pets')

router.get('/new', isLoggedIn, petsCtrl.new)
router.post('/', isLoggedIn, petsCtrl.create)
router.get('/', isLoggedIn, petsCtrl.index)
router.delete('/:id', isLoggedIn, petsCtrl.delete)
router.get('/:id', isLoggedIn, petsCtrl.show)
router.get('/:id/edit', isLoggedIn, petsCtrl.edit)
router.put('/:id', isLoggedIn, petsCtrl.update)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect("/auth/google")
}

module.exports = router