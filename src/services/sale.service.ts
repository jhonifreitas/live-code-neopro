import axios from 'axios';
import { ISaleDay } from '../interfaces/sale-day.interface';
import { ISaleResponse } from '../interfaces/sale-response.interface';
import { ISale } from '../interfaces/sale.interface';
import SaleModel from '../models/sale.model';

class SaleService {
  private host = 'https://api.neopro.com.br/v1';

  async getByMonth(date: Date): Promise<ISale[]> {
    const params = { month: date.toJSON() };
    const response = await axios.get<ISaleResponse[]>(
      `${this.host}/test/sales`,
      { params },
    );

    const result: ISale[] = [];
    for (const sale of response.data) {
      const exist = result.some(
        (x) =>
          x.seller === sale.seller &&
          new Date(sale.date).toJSON().slice(0, 10) ===
            new Date(x.date).toJSON().slice(0, 10),
      );
      if (!exist) {
        const sales = response.data.filter(
          (x) =>
            x.seller === sale.seller &&
            new Date(sale.date).toJSON().slice(0, 10) ===
              new Date(x.date).toJSON().slice(0, 10),
        );
        const soldTotal = sales.reduce((prev, cur) => prev + cur.sold, 0);

        const data = new SaleModel({
          date: new Date(sale.date),
          seller: sale.seller,
          sold: soldTotal,
          sales: sales.length,
        });

        result.push(data);
      }
    }

    await SaleModel.insertMany(result);

    return result;
  }

  async getByDay(date: Date): Promise<ISaleDay[]> {
    const result: ISaleDay[] = [];

    const start = new Date(date);
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);
    end.setDate(end.getDate() - 1);
    end.setHours(23, 59, 59);

    const sales = await SaleModel.find({
      date: { $gte: start.toJSON(), $lt: end.toJSON() },
    });

    for (const sale of sales) {
      const exist = result.some(
        (x) =>
          new Date(sale.date).toJSON().slice(0, 10) ===
          new Date(x.date).toJSON().slice(0, 10),
      );

      if (!exist) {
        const sellers = sales
          .filter(
            (x) =>
              new Date(x.date).toJSON().slice(0, 10) ===
              new Date(sale.date).toJSON().slice(0, 10),
          )
          .map(({ seller, sold, sales }) => ({ seller, sold, sales }));

        const data: ISaleDay = {
          date: sale.date,
          sellers: sellers,
        };

        result.push(data);
      }
    }

    return result;
  }
}

export default new SaleService();
