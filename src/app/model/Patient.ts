import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    healthInsuranceCardId: {
        type: String,
        required: true,
        unique: true
    },
    address:{ 
        type: String,
        required: true
    }
}, {
    versionKey: false,
});

const Patient = mongoose.model('Pacientes', PatientSchema);
export default Patient;