import { Controller, Post, Get, Body, HttpCode } from '@nestjs/common';
import { SimulateInstallmentPaymentUseCase } from '../../application/uses-cases/simulate-installment-payment.use-case';
import { PaymentDto } from '../../domain/Dto/payment.dto';

@Controller(['prelation'])
export class PrelationController {
  constructor(
    private simulateInstallmentPaymentUseCase: SimulateInstallmentPaymentUseCase,
  ) {}

  @Post('simulate/installment-payment')
  @HttpCode(200)
  simulateInstallentPayment(@Body() payment: PaymentDto[]) {
    return this.simulateInstallmentPaymentUseCase.execute(payment);
  }

  @Post('/simulate/debt-cancellation')
  simulateDebtCancellation() {
    return null;
  }

  @Get('payment/:id')
  show() {
    return null;
  }

  @Post('payment')
  store() {
    return null;
  }
}
