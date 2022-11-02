const express = require('express')
const router = express.Router();
const controller = require('../controllers/moviesContoller')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')


router.post('/create',[auth.check, admin.check], controller.create)
router.post('/:id',[auth.check, admin.check],controller.update)
router.get('/:id',[auth.check, admin.check], controller.delete)
router.get('/',auth.check,controller.list)
router.get('/:id',auth.check,controller.find)

module.exports= router;