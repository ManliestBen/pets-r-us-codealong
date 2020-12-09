const router = require("express").Router();
const petsCtrl = require('../controllers/pets')

router.get('/new', isLoggedIn, petsCtrl.new)
router.post('/', isLoggedIn, petsCtrl.create)
router.get('/', isLoggedIn, petsCtrl.index)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect("/auth/google")
}

module.exports = router