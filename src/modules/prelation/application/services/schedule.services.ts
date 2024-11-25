import { Injectable } from '@nestjs/common';
import axios from 'axios';

export type PaymentSchedule = {
  creditCode: string;
  numberPayment: number;
  paymentDate: string;
  principal: number;
  interest: number;
  amountConcept01: number;
  amountConcept02: number;
  principalBalance: number;
  interestBalance: number;
  concept01Balance: number;
  concept02Balance: number;
  feesbalance: number;
};

@Injectable()
export class ScheduleServices {
  constructor() {}

  findPaymentSchedule = async (creditCode: string) => {
    const creditInfo = await axios.get(
      'https://apikong.dev.credimovil.pe/cr-ms-management/v1/credit/info-credit?contractCode=' +
        creditCode,
    );
    const creditId: number = creditInfo.data.data[0].creditCode;

    const creditSchedule = await axios.get(
      'http://swarm.dev.credimovil.pe:3012/schedule/' + creditId,
    );
    // console.log('creditSchedule:', creditSchedule.data);
    creditSchedule.data.sort((a, b) => a.nuCuotas - b.nuCuotas);
    const schedule: PaymentSchedule[] = creditSchedule.data.map((item) => {
      return {
        creditCode: creditCode,
        numberPayment: item.nuCuotas,
        paymentDate: item.feFincuo,
        principal: +item.imCapcuo,
        interest: +item.imIntcap,
        amountConcept01: +item.imConcep01,
        amountConcept02: +item.imConcep02,
        principalBalance: +item.imSalcap,
        interestBalance: +item.imSalint,
        feesbalance: 0.0,
        concept01Balance: +item.imSalcon01,
        concept02Balance: +item.imSalcon02,
      };
    });

    return schedule;
  };
}
