export type PaymentSchedule = {
    creditCode: string;
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
};
export declare class ScheduleServices {
    constructor();
    findPaymentSchedule: () => PaymentSchedule[];
}
