import { Router } from 'express';
import { attachControllers } from '@decorators/express';
import PatientController from '../../app/controllers/PatientController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        PatientController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
