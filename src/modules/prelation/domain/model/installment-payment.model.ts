import { Payments } from './payment.model';

export class InstallmentPayment extends Payments {
  constructor(constructor: {
    creditCode: string;
    amount: number;
    numberPayment: number;
    principalAmount: number;
    interestAmount: number;
    lateFeeAmount: number;
    vehicleInsurance: number;
    lifeInsurance: number;
    collectionLocationCode: string;
    paymentType: string | null;
    banckAccountCode: string | null;
    paymentDate: string;
    paymentHour: string;
    paymentValueDate: string;
    registeringPersonCode: string;
    idPayment: string | null;
  }) {
    super({
      creditCode: constructor.creditCode,
      amount: constructor.amount,
      numberPayment: constructor.numberPayment,
      principalAmount: constructor.principalAmount,
      interestAmount: constructor.interestAmount,
      lateFeeAmount: constructor.lateFeeAmount,
      vehicleInsurance: constructor.vehicleInsurance,
      lifeInsurance: constructor.lifeInsurance,
      collectionLocationCode: constructor.collectionLocationCode,
      paymentType: constructor.paymentType,
      banckAccountCode: constructor.banckAccountCode,
      paymentDate: constructor.paymentDate,
      paymentHour: constructor.paymentHour,
      paymentValueDate: constructor.paymentValueDate,
      registeringPersonCode: constructor.registeringPersonCode,
      idPayment: constructor.idPayment,
    });
  }
}
