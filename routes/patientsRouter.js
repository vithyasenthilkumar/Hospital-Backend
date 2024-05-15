const express = require('express')
const router = express.Router()
const {getAllPatients, addNewPatient, updatePatient} = require('../controllers/patientsController')

router.route('/').get(getAllPatients).post(addNewPatient).patch(updatePatient)

module.exports = router