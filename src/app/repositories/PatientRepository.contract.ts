import IPatient from "../model/IPatient";

export default interface IPatientRepository {
    create: (patient: IPatient) => Promise<IPatient>
}