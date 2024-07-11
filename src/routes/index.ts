import { Express, Router } from 'express';

import textRoutes from './textRoutes';

const router = Router();

router.use('/api/texts', textRoutes);

function configureRoutes(app: Express) {
  app.use('/', router);
}

export default configureRoutes;
