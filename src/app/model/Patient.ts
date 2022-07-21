import mongoose, { now } from 'mongoose';
import IPatient from './IPatient';

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
    timestamps: { 
      createdAt: 'created_at',
      updatedAt: false
    }
});

const Patient = mongoose.model<IPatient>('Pacientes', PatientSchema);
export default Patient;