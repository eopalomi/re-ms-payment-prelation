import { Module } from '@nestjs/common';
import { PrelationController } from './presentation/controller/prelation-controller.controller';
import { SimulateInstallmentPaymentUseCase } from './application/uses-cases/simulate-installment-payment.use-case';
import { ScheduleServices } from './application/services/schedule.services';

@Module({
  controllers: [PrelationController],
  providers: [SimulateInstallmentPaymentUseCase, ScheduleServices],
})
export class PrelationModule {}
