import { Payments } from './payment.model';
export declare class DebtCancellation extends Payments {
    readonly authorizationPersonCode: string | null;
    readonly requestingPersonCode: string | null;
    readonly idDocumentWF: number | null;
    constructor(constructor: {
        creditCode: string;
        amount: number;
        numberPayment: number;
        principalAmount: number;
        interestAmount: number;
        lateFeeAmount: number;
        vehicleInsurance: number;
        lifeInsurance: number;
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
    });
}
