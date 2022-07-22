import IPatient from "../model/IPatient";
import Patient from "../model/Patient";
import IPatientRepository from "./PatientRepository.contract";
import { Injectable } from '@decorators/di';

@Injectable()
class PatientRepository implements IPatientRepository {
    private readonly patientSchema;

    constructor(){
        this.patientSchema = Patient
    }

    async create(patient: IPatient): Promise<IPatient> {
        const newPatient: IPatient = await this.patientSchema.create(patient);
        return newPatient;
    }

    async findAll(): Promise<IPatient[]> {
        const listOfPatient: IPatient[] = await this.patientSchema.find();
        return listOfPatient;
    }
}

export default PatientRepository;