const patientsModel = require('../models/patientModel')
const initialData = require('../data/initialData')


const getAllPatients = async(request, response) => {
    try{
    const patients = await patientsModel.find()
    if (patients.length === 0)
    {
       const patients = await patientsModel.insertMany(initialData)
    }
    response.status(200).json(patients)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const addNewPatient = async(request, response) => {
    const newPatient = request.body
    try{
        const existingPatient = await patientsModel.findOne({patientID:request.body.patientID})
        if (existingPatient)
        {
            return response.status(409).json({message:'PatientID already exsists.'})
        }
        const patient = await patientsModel.create(newPatient)
        response.status(201).json(patient)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const updatePatient = async(request, response) => {
    const patientToBeUpdated = request.body
    try{
        
        const patient = await patientsModel.findOneAndUpdate({patientID:patientToBeUpdated.patientID}, patientToBeUpdated)
        response.status(201).json(patient)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAllPatients, addNewPatient, updatePatient}