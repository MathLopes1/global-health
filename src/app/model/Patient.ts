import mongoose from 'mongoose';
import IPatient from './IPatient';

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    healthInsuranceCardId: {
        type: String,
        required: true,
        minLength: 24,
        maxLength: 24,
        unique: true
    },
    address:{ 
        type: String,
        required: true,
        maxLength: 255,
    }
}, {
    versionKey: false,
    timestamps: { 
      createdAt: 'createdAt',
      updatedAt: false
    }
});

const Patient = mongoose.model<IPatient>('Pacientes', PatientSchema);
export default Patient
