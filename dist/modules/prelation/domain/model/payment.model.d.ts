export declare abstract class Payments {
    readonly creditCode: string;
    readonly amount: number;
    readonly numberPayment: number;
    readonly principalAmount: number;
    readonly interestAmount: number;
    readonly lateFeeAmount: number;
    readonly vehicleInsurance: number;
    readonly lifeInsurance: number;
    readonly collectionLocationCode: string;
    readonly paymentType: string | null;
    readonly bankAccountCode: string | null;
    readonly paymentDate: string;
    readonly paymentHour: string;
    readonly paymentValueDate: string;
    readonly registeringPersonCode: string;
    idPayment: string | null;
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
    });
}
