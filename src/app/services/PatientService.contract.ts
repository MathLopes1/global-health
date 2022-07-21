import IPatient from "../model/IPatient";

export default interface IPatientService {
    create: (patient: IPatient) => Promise<IPatient>
}