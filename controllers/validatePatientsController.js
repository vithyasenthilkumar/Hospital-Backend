const patientsModel = require('../models/patientModel')

const getPatientID = async(request, response) => {
    const {patientID} = request.body
    try{
        const patientToBeEdited = await patientsModel.findOne({patientID:patientID})
        response.status(200).json(patientToBeEdited)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getPatientID}