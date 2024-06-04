import { Injectable } from '@nestjs/common';

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

@Injectable()
export class ScheduleServices {
  constructor() {}

  findPaymentSchedule = () => {
    const schedule: PaymentSchedule[] = [
      {
        creditCode: 'D2065001',
        numberPayment: 1,
        paymentDate: '2024-05-18',
        principal: 800,
        interest: 200,
        vehicleInsurance: 50,
        lifeInsurance: 50,
        principalBalance: 800,
        interestBalance: 200,
        feesbalance: 10,
        vehicleInsuranceBalance: 50,
        lifeInsuranceBalance: 50,
      },
      {
        creditCode: 'D2065001',
        numberPayment: 2,
        paymentDate: '2024-06-18',
        principal: 800,
        interest: 200,
        vehicleInsurance: 50,
        lifeInsurance: 50,
        principalBalance: 800,
        interestBalance: 200,
        feesbalance: 10,
        vehicleInsuranceBalance: 50,
        lifeInsuranceBalance: 50,
      },
    ];

    return schedule;
  };
}
