/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { createMock } from '@golevelup/ts-jest';
import BadRequest from '../../exceptions/errors/httpError/BadRequest.error';
import NotFound from '../../exceptions/errors/httpError/NotFound.error';

import IPatientRepository from '../../repositories/PatientRepository.contract';
import PatientService from '../PatientService';

const testPatientRepositoryReturn = {
  _id: '62dabab25d042a616cdbe249',
  name: 'Matheus Lopes',
  healthInsuranceCardId: '62dabab25d042a616cdbe249',
  address: 'Rua Ledinha, 17',
};

const testPatientServiceReturn = {
  _id: '62dabab25d042a616cdbe249',
  name: 'Matheus Lopes',
  healthInsuranceCardId: '62dabab25d042a616cdbe249',
  address: 'Rua Ledinha, 17',
};
const patientRepositoryMock = createMock<IPatientRepository>();

describe('Create Patient', () => {
  it('Should be create patient', async () => {
    jest.spyOn(patientRepositoryMock, 'findByName').mockResolvedValueOnce(undefined);
    jest.spyOn(patientRepositoryMock, 'create').mockResolvedValueOnce(testPatientRepositoryReturn);

    const service = new PatientService(patientRepositoryMock);

    const patient = await service.create(testPatientServiceReturn);

    expect(patient.address).toEqual(testPatientRepositoryReturn.address);
    expect(patient.healthInsuranceCardId)
      .toEqual(testPatientRepositoryReturn.healthInsuranceCardId);
    expect(patient.name)
      .toEqual(testPatientRepositoryReturn.name);
  });

  it('Should be error patient already registered', async () => {
    jest.spyOn(patientRepositoryMock, 'findByName').mockResolvedValueOnce(testPatientRepositoryReturn);
    jest.spyOn(patientRepositoryMock, 'create').mockResolvedValueOnce(testPatientRepositoryReturn);

    const service = new PatientService(patientRepositoryMock);

    const patient = service.create(testPatientServiceReturn);

    await expect(patient).rejects.toEqual(new BadRequest(testPatientServiceReturn.name));
  });
});
describe('Update Patient', () => {
  it('Should be update patient', async () => {
    jest.spyOn(patientRepositoryMock, 'findById').mockResolvedValueOnce(testPatientRepositoryReturn);
    jest.spyOn(patientRepositoryMock, 'update').mockResolvedValueOnce(testPatientRepositoryReturn);

    const service = new PatientService(patientRepositoryMock);

    const patient = await service
      .update(testPatientServiceReturn._id, testPatientRepositoryReturn);

    expect(patient).toBeDefined();
  });

  it('Should be error patient not found', async () => {
    jest.spyOn(patientRepositoryMock, 'findById').mockResolvedValueOnce(undefined);
    jest.spyOn(patientRepositoryMock, 'update').mockResolvedValueOnce(testPatientRepositoryReturn);

    const service = new PatientService(patientRepositoryMock);

    const patient = service.update(testPatientServiceReturn._id, testPatientServiceReturn);

    await expect(patient).rejects.toEqual(new NotFound(testPatientRepositoryReturn._id));
  });
});

describe('FindAll Patients', () => {
  it('Should be list patients', async () => {
    jest.spyOn(patientRepositoryMock, 'findAll').mockResolvedValueOnce([testPatientRepositoryReturn]);

    const service = new PatientService(patientRepositoryMock);

    const patient = await service.findAll();

    expect(patient.at(0).name).toEqual(testPatientServiceReturn.name);
    expect(patient.at(0).address).toEqual(testPatientServiceReturn.address);
    expect(patient.at(0).healthInsuranceCardId)
      .toEqual(testPatientServiceReturn.healthInsuranceCardId);
  });

  it('Should be error', async () => {
    jest.spyOn(patientRepositoryMock, 'findAll').mockResolvedValueOnce([]);

    const service = new PatientService(patientRepositoryMock);

    const patient = service.findAll();

    await expect(patient).rejects.toThrow(new Error('A Lista de Pacientes está vazia, cadastre um.'));
  });
});

describe('FindById Patient', () => {
  it('Should be patient by id', async () => {
    jest.spyOn(patientRepositoryMock, 'findById').mockResolvedValueOnce(testPatientRepositoryReturn);

    const service = new PatientService(patientRepositoryMock);

    const patient = await service
      .findById(testPatientServiceReturn._id);

    expect(patient.address).toEqual(testPatientRepositoryReturn.address);
    expect(patient.healthInsuranceCardId)
      .toEqual(testPatientRepositoryReturn.healthInsuranceCardId);
    expect(patient.name)
      .toEqual(testPatientRepositoryReturn.name);
  });

  it('Should be error patient not found', async () => {
    jest.spyOn(patientRepositoryMock, 'findById').mockResolvedValueOnce(undefined);

    const service = new PatientService(patientRepositoryMock);

    const patient = service.findById(testPatientServiceReturn._id);

    await expect(patient).rejects.toEqual(new NotFound(testPatientRepositoryReturn._id));
  });
});

describe('DeleteById Patient', () => {
  it('Should be delete patient by id', async () => {
    jest.spyOn(patientRepositoryMock, 'deleteById').mockResolvedValueOnce(testPatientRepositoryReturn);

    const service = new PatientService(patientRepositoryMock);

    const patient = await service
      .deleteById(testPatientServiceReturn._id);

    expect(patient.address).toEqual(testPatientRepositoryReturn.address);
    expect(patient.healthInsuranceCardId)
      .toEqual(testPatientRepositoryReturn.healthInsuranceCardId);
    expect(patient.name)
      .toEqual(testPatientRepositoryReturn.name);
  });

  it('Should be error patient not found', async () => {
    jest.spyOn(patientRepositoryMock, 'deleteById').mockResolvedValueOnce(undefined);

    const service = new PatientService(patientRepositoryMock);

    const patient = service.deleteById(testPatientServiceReturn._id);

    await expect(patient).rejects.toEqual(new NotFound(testPatientRepositoryReturn._id));
  });
});
