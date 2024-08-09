export interface Sale {
items: any;
totalAmount: string|number;
    id: number;
    customerName: string;
    reference: string;
    date: string;
    status: string;
    grandTotal: number;
    //paid: number;
    due: number;
    paymentStatus: string;
    biller: string;
  }
  