import { Request, Response } from 'express';

import { ValidationError } from '../exceptions/validation-error';
import saleService from '../services/sale.service';
import { GetByDate } from '../validations/sale.validation';

class SaleController {
  async getAll(request: Request, response: Response) {
    const query = request.query as { [name: string]: string };

    await GetByDate.validate(query).catch((err) => {
      throw new ValidationError(err.errors[0]);
    });

    const date = new Date(query.month);
    const sales = await saleService.getByMonth(date);

    return response.json(sales);
  }

  async getSellerByMonth(request: Request, response: Response) {
    const query = request.query as { [name: string]: string };

    await GetByDate.validate(query).catch((err) => {
      throw new ValidationError(err.errors[0]);
    });

    const date = new Date(query.month);
    const saleDays = await saleService.getByDay(date);

    return response.json(saleDays);
  }
}

export default new SaleController();
