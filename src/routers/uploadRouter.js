const {Router} = require('express');


const {viewUpload, fileUpload} = require('../controllers/uploadController')

const router = Router()
router.get('/', viewUpload)
router.post('/upload', fileUpload)

module.exports = router
