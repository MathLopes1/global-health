import { Request, Response } from 'express';
import { Inject } from "@decorators/di";
import { Controller, Delete, Get, Post, Put } from "@decorators/express";
import IPatient from "../model/IPatient";
import PatientService from "../services/PatientService";
import IPatientService from "../services/PatientService.contract";
import CreatePatientRequest from './request/createPatient.request';
import UpdatePatientRequest from './request/updatePatient.request';

@Controller('/patient')
class PatientController {
  private readonly patientService: IPatientService;

  constructor(@Inject(PatientService) patientService: IPatientService) {
    this.patientService = patientService;
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const patient: CreatePatientRequest = req.body;
      
      const result: IPatient = await this.patientService
        .create(patient);

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

  @Put('/:patientId')
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { patientId } = req.params

      const payload: UpdatePatientRequest = req.body;
      
      const result: IPatient = await this.patientService
        .update(patientId, payload);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Get('/')
  async findAll(req: Request, res: Response): Promise<Response>{
    try {
      const listOfPatient: IPatient[] = await this.patientService
        .findAll()

      return res.status(200).json(listOfPatient)
    } catch (error) {
       return res.status(500).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Get('/:patientId')
  async findById(req: Request, res: Response): Promise<Response>{
    try {
      const { patientId } = req.params

      const patient: IPatient = await this.patientService
        .findById(patientId)

      return res.status(200).json(patient)
    } catch (error) {
       return res.status(500).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Delete('/:patientId')
  async deleteById(req: Request, res: Response): Promise<Response>{
    try {
      const { patientId } = req.params

      const result: IPatient = await this.patientService
        .deleteById(patientId)

      return res.status(200).json({
        resultado: "Paciente Deletado com sucesso",
        dados: result 
      })
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