import { Inject, Injectable } from '@decorators/di';
import CreatePatientDTO from '../controllers/dto/createPatient.dto';
import UpdatePatientDTO from '../controllers/dto/updatePatient.dto';
import BadRequest from '../exceptions/errors/httpError/BadRequest.error';
import NotFound from '../exceptions/errors/httpError/NotFound.error';
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
    const patientValidationName: IPatient = await this.patientRepository.findByName(patient.name);

    if (patientValidationName) throw new BadRequest(patientValidationName.name);

    const newPatient: IPatient = await this.patientRepository.create(patient);

    return newPatient;
  }

  async update(patientId: string, payload: UpdatePatientDTO) {
    const patientUpdateValition = await this.findById(patientId);

    if (!patientUpdateValition) throw new NotFound(patientId);

    const updatedPatient: IPatient = await this.patientRepository.update(patientId, payload);

    return updatedPatient;
  }

  async findAll(): Promise<IPatient[]> {
    const listOfPatient: IPatient[] = await this.patientRepository.findAll();

    if (listOfPatient.length < 1) throw new Error('A Lista de Pacientes está vazia, cadastre um.');

    return listOfPatient;
  }

  async findById(patientId: string): Promise<IPatient> {
    const patient: IPatient = await this.patientRepository.findById(patientId);

    if (!patient) throw new NotFound(patientId);

    return patient;
  }

  async deleteById(patientId: string): Promise<IPatient> {
    const result = await this.patientRepository.deleteById(patientId);

    if (!result) throw new NotFound(patientId);

    return result;
  }
}

export default PatientService;
