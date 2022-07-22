import { Inject, Injectable } from '@decorators/di';
import CreatePatientDTO from '../controllers/dto/createPatient.dto';
import UpdatePatientDTO from '../controllers/dto/updatePatient.dto';
import IPatient from '../model/IPatient';

import PatientRepository from '../repositories/PatientRepository';
import IPatientRepository from '../repositories/PatientRepository.contract';
import IPatientService from './PatientService.contract';

@Injectable()
class PatientService implements IPatientService {
  private readonly patientRepository: IPatientRepository;

  constructor(@Inject(PatientRepository) patientRepository: IPatientRepository) {
    this.patientRepository = patientRepository;
  }

  async create(patient: CreatePatientDTO): Promise<IPatient> {
    const newPatient: IPatient = await this.patientRepository.create(patient);
    return newPatient;
  }

  async update(patientId: string, payload: UpdatePatientDTO) {
    const updatedPatient: IPatient = await this.patientRepository.update(patientId, payload);
    return updatedPatient;
  }

  async findAll(): Promise<IPatient[]> {
    const listOfPatient: IPatient[] = await this.patientRepository.findAll();
    return listOfPatient;
  }

  async findById(patientId: string): Promise<IPatient> {
    const patient: IPatient = await this.patientRepository.findById(patientId);
    return patient;
  }

  async deleteById(patientId: string): Promise<IPatient> {
    const result = await this.patientRepository.deleteById(patientId);
    return result;
  }
}

export default PatientService;
