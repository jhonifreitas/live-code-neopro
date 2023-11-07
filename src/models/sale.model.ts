import mongoose from 'mongoose';
import { ISale } from '../interfaces/sale.interface';

const SaleSchema = new mongoose.Schema<ISale>({
  date: { type: Date, required: true },
  seller: { type: String, required: true },
  sold: { type: Number, required: true },
  sales: { type: Number, required: true },
});

const SaleModel = mongoose.model('Sales', SaleSchema);
export default SaleModel;
