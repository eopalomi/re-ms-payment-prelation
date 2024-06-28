import { Payments } from './payment.model';

export class DebtCancellation extends Payments {
  public readonly authorizationPersonCode: string | null;
  public readonly requestingPersonCode: string | null;
  public readonly idDocumentWF: number | null;

  constructor(constructor: {
    creditCode: string;
    amount: number;
    numberPayment: number;
    principalAmount: number;
    interestAmount: number;
    lateFeeAmount: number;
    concept01Amount: number;
    concept02Amount: number;
    igvInsurance: number;
    preventionInsurance: number;
    collectionLocationCode: string;
    paymentType: string | null;
    banckAccountCode: string | null;
    paymentDate: string;
    paymentHour: string;
    paymentValueDate: string;
    authorizationPersonCode: string | null;
    requestingPersonCode: string | null;
    registeringPersonCode: string;
    idDocumentWF: number | null;
    idPayment: string | null;
  }) {
    super({
      creditCode: constructor.creditCode,
      amount: constructor.amount,
      numberPayment: constructor.numberPayment,
      principalAmount: constructor.principalAmount,
      interestAmount: constructor.interestAmount,
      lateFeeAmount: constructor.lateFeeAmount,
      concept01Amount: constructor.concept01Amount,
      concept02Amount: constructor.concept02Amount,
      collectionLocationCode: constructor.collectionLocationCode,
      paymentType: constructor.paymentType,
      banckAccountCode: constructor.banckAccountCode,
      paymentDate: constructor.paymentDate,
      paymentHour: constructor.paymentHour,
      paymentValueDate: constructor.paymentValueDate,
      registeringPersonCode: constructor.registeringPersonCode,
      idPayment: constructor.idPayment,
    });

    this.authorizationPersonCode = constructor.authorizationPersonCode;
    this.requestingPersonCode = constructor.requestingPersonCode;
    this.idDocumentWF = constructor.idDocumentWF;
  }
}
