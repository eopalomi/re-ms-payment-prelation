import { SimulateInstallmentPaymentUseCase } from '../../application/uses-cases/simulate-installment-payment.use-case';
import { PaymentDto } from '../../domain/Dto/payment.dto';
export declare class PrelationController {
    private simulateInstallmentPaymentUseCase;
    constructor(simulateInstallmentPaymentUseCase: SimulateInstallmentPaymentUseCase);
    simulateInstallentPayment(payment: PaymentDto[]): Promise<import("../../domain/model/installment-payment.model").InstallmentPayment[]>;
    simulateDebtCancellation(): any;
    show(): any;
    store(): any;
}
