import { Inject, Injectable } from '@decorators/di';
import CreatePatientDTO from '../controllers/dto/createPatient.dto';
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
}

export default PatientService;