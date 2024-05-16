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
  }>;
};

export type InstallmentPaymentRepository = {
  save(payment: InstallmentPayment): Promise<void>;
  delete(
    creditCode: string,
    idPayment: number,
    personCode: string,
    ip: string,
  ): Promise<void>;
};
