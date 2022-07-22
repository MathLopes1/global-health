import IPatient from "../model/IPatient";

export default interface IPatientRepository {
    create: (patient: IPatient) => Promise<IPatient>
    update: (patientId: string, payload: object) => Promise<IPatient>
    findAll: () => Promise<IPatient[]>
    findById: (patientId: string) => Promise<IPatient>
}