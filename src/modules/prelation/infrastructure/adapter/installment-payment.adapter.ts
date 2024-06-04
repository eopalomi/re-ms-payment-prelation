import { PaymentRepository } from '../../domain/repository/payment.repoitory';
import { InstallmentPayment } from '../../domain/model/installment-payment.model';
import { DebtCancellation } from '../../domain/model/debt-cancellation.model';
import { CreditPaymentDTO } from '../Dto/pag_cuo.dto';
import { formatedDate } from '../../../commons/services/date-utils.services';
import axios from 'axios';

export class PaymentfAdapter implements PaymentRepository {
  constructor() {}

  save = async (
    payment: InstallmentPayment | DebtCancellation,
  ): Promise<void> => {
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
      tip_pagcuo: payment.paymentType,
      usu_reg: payment.registeringPersonCode,
      id_pagcre: payment.idPayment,
      fec_reg: dateTime.now(),
      hor_reg: dateTime.currentHour(),
      fec_reg_pag: dateTime.now(),
      fe_propre: dateTime.currentDate(),
    };

    const fieldsForUpdate = {
      fec_can: dateTime.currentDate(),
    };

    try {
      await axios.post(`${'Host'}/${'path_grabar_pago'}`, creditPayment);
      await axios.patch(
        `${'Host'}/${'path_update'}/${payment.creditCode}/${payment.numberPayment}`,
        fieldsForUpdate,
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  find = async (
    creditCode: string,
  ): Promise<InstallmentPayment[] | DebtCancellation[]> => {
    const payment: InstallmentPayment[] = [
      {
        creditCode: creditCode,
        amount: 1000,
        numberPayment: 1,
        principalAmount: 800,
        interestAmount: 150,
        lateFeeAmount: 50,
        vehicleInsurance: 10,
        lifeInsurance: 10,
        collectionLocationCode: 'COL123',
        paymentType: 'Efectivo',
        bankAccountCode: 'AB',
        paymentDate: '2024-05-18',
        paymentHour: '10:30 AM',
        paymentValueDate: '2024-05-18',
        registeringPersonCode: 'USR789',
        idPayment: 'dsad',
      },
      {
        creditCode: creditCode,
        amount: 1000,
        numberPayment: 2,
        principalAmount: 200,
        interestAmount: 50,
        lateFeeAmount: 1,
        vehicleInsurance: 10,
        lifeInsurance: 10,
        collectionLocationCode: 'COL123',
        paymentType: 'Efectivo',
        bankAccountCode: 'AB',
        paymentDate: '2024-05-18',
        paymentHour: '10:30 AM',
        paymentValueDate: '2024-05-18',
        registeringPersonCode: 'USR789',
        idPayment: 'dsad',
      },
    ];

    return payment;
  };

  simulateDebtCancellation() {
    return null;
  }
  simulateInstallmentPayment() {
    return null;
  }
}
