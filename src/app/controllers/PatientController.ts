import { Request, Response } from 'express';
import { Inject } from "@decorators/di";
import { Controller, Post } from "@decorators/express";
import IPatient from "../model/IPatient";
import PatientService from "../services/PatientService";
import IPatientService from "../services/PatientService.contract";
import CreatePatientRequest from './request/createPatient.request';

@Controller('/patient')
class PatientController {
  private readonly patientService: IPatientService;

  constructor(@Inject(PatientService) patientService: IPatientService) {
    this.patientService = patientService;
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const patient: IPatient = req.body;
      const result: IPatient = await this.patientService
        .create(new CreatePatientRequest(patient));
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

export default PatientController;