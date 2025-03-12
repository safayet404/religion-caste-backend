
const express = require('express')
const { createReligion, getReligions, getSingleReligions, updateReligion, deleteReligion } = require('../controllers/religionController')
const router = express.Router()


router.post('/create-religion', createReligion)
router.get('/get-religions', getReligions)
router.get('/single-religion/:id', getSingleReligions)
router.put('/update-religion/:id', updateReligion)
router.delete('/delete-religion/:id', deleteReligion)

module.exports = router