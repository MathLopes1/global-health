import IPatient from '../model/IPatient';

interface IPatientRepository {
    create: (patient: IPatient) => Promise<IPatient>
    update: (patientId: string, payload: object) => Promise<IPatient>
    findAll: () => Promise<IPatient[]>
    findById: (patientId: string) => Promise<IPatient>
    findByName: (pacienteName: string) => Promise<IPatient>
    deleteById: (patientId: string) => Promise<IPatient>
}

export default IPatientRepository;
