/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { createMock } from '@golevelup/ts-jest';
import BadRequest from '../../exceptions/errors/httpError/BadRequest.error';

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
