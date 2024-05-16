import {
  InstallmentPaymentRepository,
  PaymentSchedule,
} from '../../domain/repository/installment-payment.repository';
import { InstallmentPayment } from '../../domain/model/installment-payment.model';
import { CreditPaymentDTO } from '../Dto/pag_cuo.dto';
import { formatedDate } from '../../../commons/services/date-utils.services';
import axios from 'axios';

export class InstallmentPaymentfAdapter
  implements InstallmentPaymentRepository
{
  private lb4Host: string;

  constructor() {}

  save = async (payment: InstallmentPayment): Promise<void> => {
    const schedule = await this.findPaymentSchedule(payment.creditCode);
    const installment = schedule.installments.find(
      (installment) => installment.numberPayment === payment.numberPayment,
    );

    const dateTime = {
      currentDate: () => formatedDate(new Date(), 'yyyy-mm-dd'),
      currentHour: () => formatedDate(new Date(), 'hh:mm:ss AM|PM'),
      now: () => formatedDate(new Date(), 'YYYY-MM-DD_hhmmss'),
    };

    const creditPayment: CreditPaymentDTO = {
      cod_cre: payment.creditCode,
      num_cuo: payment.numberPayment,
      lug_rec: payment.collectionLocationCode,
      fec_pag: payment.paymentDate,
      hor_pag: payment.paymentHour,
      fec_doc: payment.paymentValueDate,
      pago: payment.amount,
      pag_cap: payment.principalAmount,
      pag_int: payment.interestAmount,
      pag_seg: payment.vehicleInsurance,
      pag_seg_desgra: payment.lifeInsurance,
      pag_mor: payment.lateFeeAmount,
      pag_itf: 0,
      enc_cap: installment.principalBalance,
      enc_int: installment.interestBalance,
      enc_mor: installment.feesbalance,
      enc_seg: installment.vehicleInsuranceBalance,
      enc_seg_desgra: installment.lifeInsuranceBalance,
      fec_reg: dateTime.now(),
      hor_reg: dateTime.currentHour(),
      usu_reg: payment.registeringPersonCode,
      fec_reg_pag: dateTime.now(),
      tip_pagcuo: payment.paymentType,
      id_pagcre: payment.idPayment,
      fe_propre: dateTime.currentDate(),
    };

    const fieldsForUpdate = {
      sal_cap: installment.principalBalance - payment.principalAmount,
      sal_int: installment.interestBalance - payment.interestAmount,
      sal_mor: installment.feesbalance - payment.lateFeeAmount,
      sal_seg: installment.vehicleInsuranceBalance - payment.vehicleInsurance,
      sal_seg_desgra: installment.lifeInsuranceBalance - payment.lifeInsurance,
      fec_can: dateTime.currentDate(),
    };

    try {
      await axios.post(`${this.lb4Host}/${'path_grabar_pago'}`, creditPayment);
      await axios.patch(
        `${this.lb4Host}/${'path_update'}/${payment.creditCode}/${payment.numberPayment}`,
        fieldsForUpdate,
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  delete = async (
    creditCode: string,
    idPayment: number,
    personCode: string,
    ip: string,
  ): Promise<void> => {
    try {
      const encodedPath = encodeURIComponent(
        JSON.stringify({
          limit: 200,
          order: 'fec_reg_pag asc',
          where: {
            cod_cre: creditCode,
            id_pagcre: idPayment,
          },
        }),
      );

      const { data: paymentsToCancel } = await axios.get<CreditPaymentDTO[]>(
        `${this.lb4Host}/${'path_get_pag_cuo'}?filter=` + encodedPath,
      );

      const paymentCanceledPromises = paymentsToCancel.map(async (payments) => {
        const idCancel = 'uuid_$%T$#RFSR"#';

        const canceledPayment = {
          codigo: idCancel,
          cod_per_anu: personCode,
          fec_anu: formatedDate(new Date(), 'YYYY-MM-DD_hhmmss'),
          ip_anu: ip,
          ...payments,
        };

        return axios.post<CreditPaymentDTO[]>(
          `${this.lb4Host}/${'path_insert_pag_anu'}`,
          canceledPayment,
        );
      });

      await Promise.all(paymentCanceledPromises);

      await axios.delete(
        `${this.lb4Host}/${'path_delete_pag_cuo'}/${creditCode}`,
        {
          params: {
            id_pagcre: idPayment,
          },
        },
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  findPaymentSchedule = async (
    creditCode: string,
  ): Promise<PaymentSchedule> => {
    const paymentSchedule = {
      creditCode: creditCode,
      installments: [
        {
          numberPayment: 1,
          paymentDate: '2024-05-01',
          principal: 1000,
          interest: 200,
          vehicleInsurance: 50,
          lifeInsurance: 30,
          igvInsurance: 20,
          principalBalance: 900,
          interestBalance: 180,
          feesbalance: 10,
          vehicleInsuranceBalance: 40,
          lifeInsuranceBalance: 20,
          preventionInsuranceBalance: 5,
        },
        {
          numberPayment: 2,
          paymentDate: '2024-06-01',
          principal: 1000,
          interest: 180,
          vehicleInsurance: 50,
          lifeInsurance: 30,
          principalBalance: 800,
          interestBalance: 160,
          feesbalance: 10,
          vehicleInsuranceBalance: 40,
          lifeInsuranceBalance: 20,
          preventionInsuranceBalance: 5,
        },
      ],
    };

    return paymentSchedule;
  };
}
