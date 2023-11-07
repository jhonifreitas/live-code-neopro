export interface ISaleDay {
  date: Date;
  sellers: SaleSeller[];
}

interface SaleSeller {
  seller: string;
  sold: number;
  sales: number;
}
