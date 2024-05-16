import { InstallmentPayment } from '../model/installment-payment.model';

export type PaymentSchedule = {
  creditCode: string;
  installments: Array<{
    numberPayment: number;
    paymentDate: string;
    principal: number;
    interest: number;
    vehicleInsurance: number;
    lifeInsurance: number;
    principalBalance: number;
    interestBalance: number;
    feesbalance: number;
    vehicleInsuranceBalance: number;
    lifeInsuranceBalance: number;
    igvInsuranceBalance: number;
    preventionInsuranceBalance: number;
  }>;
};

export type InstallmentPaymentRepository = {
  find(
    creditCode: string,
    paymentNumber: number,
    collectionLocationCode: string,
    idCorrelative: number,
  ): Promise<InstallmentPayment>;
  findAll(creditCode: string): Promise<InstallmentPayment[]>;
};
