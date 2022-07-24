import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import swaggerUI from 'swagger-ui-express';
import SwaggerDoc from '../../../swagger.json';

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

    router.use('/api-docs', swaggerUI.serve, swaggerUI
      .setup(SwaggerDoc));

    return router;
  }
}

export default RoutesV1;
