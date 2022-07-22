import UpdatePatientDTO from "../controllers/dto/updatePatient.dto";
import IPatient from "../model/IPatient";

export default interface IPatientService {
    create: (patient: IPatient) => Promise<IPatient>
    update: (patientId: string, payload: UpdatePatientDTO) => Promise<IPatient>
    findAll: () => Promise<IPatient[]>
    findById: (patientId: string) => Promise<IPatient>
    deleteById: (patientId: string) => Promise<IPatient>
}