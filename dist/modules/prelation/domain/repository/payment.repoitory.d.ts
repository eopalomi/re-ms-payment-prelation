import { InstallmentPayment } from '../model/installment-payment.model';
import { DebtCancellation } from '../model/debt-cancellation.model';
import { PaymentDto } from '../Dto/payment.dto';
export type PaymentRepository = {
    save(payment: InstallmentPayment | DebtCancellation): void;
    find(idPayment: string): Promise<InstallmentPayment[] | DebtCancellation[]>;
    simulateDebtCancellation(payment: PaymentDto): Promise<InstallmentPayment[]>;
    simulateInstallmentPayment(payment: PaymentDto): Promise<InstallmentPayment[]>;
};
