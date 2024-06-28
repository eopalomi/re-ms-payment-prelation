import { Injectable } from '@nestjs/common';
import { PaymentDto } from '../../domain/Dto/payment.dto';
import { InstallmentPayment } from '../../domain/model/installment-payment.model';
import { ScheduleServices } from '../services/schedule.services';

@Injectable()
export class SimulateInstallmentPaymentUseCase {
  constructor(private scheduleServices: ScheduleServices) {}

  execute = async (payment: PaymentDto[]) => {
    const simulatePayment: InstallmentPayment[] = [];

    const paymentPromises = payment.map(async (_payment) => {
      const paymentSchedule = await this.scheduleServices.findPaymentSchedule(
        _payment.creditCode,
      );

      if (!paymentSchedule) return;

      paymentSchedule
        .filter(
          (installment) =>
            +installment.principalBalance +
              +installment.interestBalance +
              +installment.feesbalance +
              +installment.concept01Balance +
              +installment.concept02Balance >
            0.0,
        )
        .reduce((amountBalance, installment) => {
          const installmentPayments = {
            principalAmount: 0.0,
            interestAmount: 0.0,
            lateFeeAmount: 0.0,
            concept01Amount: 0.0,
            concept02Amount: 0.0,
          };

          const updateAmountBalance = (
            installmentBalance: number,
            paymentType: keyof typeof installmentPayments,
          ) => {
            if (amountBalance > +installmentBalance) {
              amountBalance -= +installmentBalance.toFixed(2);
              installmentPayments[paymentType] = +installmentBalance.toFixed(2);
              installmentBalance = 0.0;
            } else {
              installmentPayments[paymentType] = +amountBalance.toFixed(2);
              installmentBalance -= +amountBalance.toFixed(2);
              amountBalance = 0.0;
            }
          };

          if (amountBalance > 0) {
            updateAmountBalance(
              +installment.principalBalance,
              'principalAmount',
            );
            updateAmountBalance(+installment.interestBalance, 'interestAmount');
            updateAmountBalance(+installment.feesbalance, 'lateFeeAmount');
            updateAmountBalance(
              +installment.concept01Balance,
              'concept01Amount',
            );
            updateAmountBalance(
              +installment.concept02Balance,
              'concept02Amount',
            );

            simulatePayment.push(
              new InstallmentPayment({
                creditCode: _payment.creditCode,
                amount: _payment.amount,
                numberPayment: installment.numberPayment,
                ...installmentPayments,
                collectionLocationCode: _payment.collectionLocationCode,
                paymentType: _payment.paymentType,
                banckAccountCode: null,
                paymentDate: _payment.date,
                paymentHour: _payment.hour,
                paymentValueDate: _payment.date,
                registeringPersonCode: '',
                idPayment: 'das453r',
              }),
            );
          }

          return amountBalance;
        }, +_payment.amount);
    });

    await Promise.all(paymentPromises);

    return simulatePayment;
  };
}
