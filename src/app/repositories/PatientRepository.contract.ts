import IPatient from "../model/IPatient";

export default interface IPatientRepository {
    create: (patient: IPatient) => Promise<IPatient>
    findAll: () => Promise<IPatient[]>
    findById: (patientId: string) => Promise<IPatient>
}