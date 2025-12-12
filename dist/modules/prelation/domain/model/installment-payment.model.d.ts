import { Payments } from './payment.model';
export declare class InstallmentPayment extends Payments {
    constructor(constructor: {
        creditCode: string;
        amount: number;
        numberPayment: number;
        principalAmount: number;
        interestAmount: number;
        lateFeeAmount: number;
        vehicleInsurance: number;
        lifeInsurance: number;
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
        idPayment: number | null;
    });
}
