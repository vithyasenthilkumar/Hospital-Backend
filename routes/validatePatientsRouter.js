const express = require('express')
const router = express.Router()
const {getPatientID} = require('../controllers/validatePatientsController')

router.route('/').post(getPatientID)

module.exports = router