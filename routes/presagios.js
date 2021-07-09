const {Router} = require('express')
const router = Router()
const {getPresagios, postPresagio} = require('../controllers/presagios')

router.post('/presagio', postPresagio)

router.get('/presagios', getPresagios)

module.exports = router