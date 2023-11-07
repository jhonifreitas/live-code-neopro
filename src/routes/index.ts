import { Router } from 'express';

import SaleRoutes from './sale.routes';

const router = Router();

router.use('/sales', SaleRoutes);

export default router;
