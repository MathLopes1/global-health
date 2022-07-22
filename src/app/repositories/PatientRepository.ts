import { Injectable } from '@decorators/di';
import IPatient from '../model/IPatient';
import Patient from '../model/Patient';
import IPatientRepository from './PatientRepository.contract';

@Injectable()
class PatientRepository implements IPatientRepository {
  private readonly patientSchema;

  constructor() {
    this.patientSchema = Patient;
  }

  async create(patient: IPatient): Promise<IPatient> {
    const newPatient: IPatient = await this.patientSchema.create(patient);
    return newPatient;
  }

  async update(patientId: string, payload: object) {
    const updatedPatient: IPatient = await this.patientSchema.findByIdAndUpdate(patientId, payload);
    return updatedPatient;
  }

  async findAll(): Promise<IPatient[]> {
    const listOfPatient: IPatient[] = await this.patientSchema.find();
    return listOfPatient;
  }

  async findById(patientId: string): Promise<IPatient> {
    const patient: IPatient = await this.patientSchema.findById(patientId);
    return patient;
  }

  async deleteById(patientId: string): Promise<IPatient> {
    const result = await this.patientSchema.findByIdAndDelete(patientId);
    return result;
  }
}

export default PatientRepository;
