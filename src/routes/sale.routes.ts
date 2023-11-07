import { Router } from 'express';

import SaleController from '../controllers/sale.controller';

const router = Router();

router.get('/', SaleController.getAll);
router.get('/organize', SaleController.getSellerByMonth);

export default router;
