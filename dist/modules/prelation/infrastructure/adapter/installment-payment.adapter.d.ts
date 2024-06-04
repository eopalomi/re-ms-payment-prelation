import { PaymentRepository } from '../../domain/repository/payment.repoitory';
import { InstallmentPayment } from '../../domain/model/installment-payment.model';
import { DebtCancellation } from '../../domain/model/debt-cancellation.model';
export declare class PaymentfAdapter implements PaymentRepository {
    constructor();
    save: (payment: InstallmentPayment | DebtCancellation) => Promise<void>;
    find: (creditCode: string) => Promise<InstallmentPayment[] | DebtCancellation[]>;
    simulateDebtCancellation(): any;
    simulateInstallmentPayment(): any;
}
