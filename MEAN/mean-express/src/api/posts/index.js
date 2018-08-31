const Router = require('express')
const router = Router()

router.get('/', require('./post-list-get'))
router.post('/', require('./post-created-post'))
router.get('/:slug', require('./post-show-get'))

module.exports = router