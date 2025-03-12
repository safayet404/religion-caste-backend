const express = require('express')
const { createCaste, getCastes, getSingleCaste, updateCaste, deleteCaste } = require('../controllers/casteController')
const router = express.Router()

router.post('/create-caste', createCaste)
router.get('/get-castes', getCastes)
router.get('/single-caste/:id', getSingleCaste)
router.put('/update-caste/:id', updateCaste)
router.delete('/delete-caste/:id', deleteCaste)


module.exports = router