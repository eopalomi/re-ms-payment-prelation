export abstract class Payments {
  public readonly creditCode: string;
  public readonly amount: number;
  public readonly numberPayment: number;
  public readonly principalAmount: number;
  public readonly interestAmount: number;
  public readonly lateFeeAmount: number;
  public readonly concept01Amount: number;
  public readonly concept02Amount: number;
  public readonly collectionLocationCode: string;
  public readonly paymentType: string | null;
  public readonly bankAccountCode: string | null;
  public readonly paymentDate: string;
  public readonly paymentHour: string;
  public readonly paymentValueDate: string;
  public readonly registeringPersonCode: string;
  public idPayment: string | null;

  constructor(constructor: {
    creditCode: string;
    amount: number;
    numberPayment: number;
    principalAmount: number;
    interestAmount: number;
    lateFeeAmount: number;
    concept01Amount: number;
    concept02Amount: number;
    collectionLocationCode: string;
    paymentType: string | null;
    banckAccountCode: string | null;
    paymentDate: string;
    paymentHour: string;
    paymentValueDate: string;
    registeringPersonCode: string;
    idPayment: string | null;
  }) {
    this.creditCode = constructor.creditCode;
    this.amount = constructor.amount;
    this.numberPayment = constructor.numberPayment;
    this.principalAmount = constructor.principalAmount;
    this.interestAmount = constructor.interestAmount;
    this.lateFeeAmount = constructor.lateFeeAmount;
    this.concept01Amount = constructor.concept01Amount;
    this.concept02Amount = constructor.concept02Amount;
    this.collectionLocationCode = constructor.collectionLocationCode;
    this.paymentType = constructor.paymentType;
    this.bankAccountCode = constructor.banckAccountCode;
    this.paymentHour = constructor.paymentHour;
    this.paymentDate = constructor.paymentDate;
    this.paymentValueDate = constructor.paymentValueDate;
    this.registeringPersonCode = constructor.registeringPersonCode;
    this.idPayment = constructor.idPayment;
  }
}
