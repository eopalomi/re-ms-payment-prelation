import { InstallmentPaymentRepository, PaymentSchedule } from '../../domain/repository/installment-payment.repository';
import { InstallmentPayment } from '../../domain/model/installment-payment.model';
export declare class InstallmentPaymentfAdapter implements InstallmentPaymentRepository {
    private lb4Host;
    constructor();
    save: (payment: InstallmentPayment) => Promise<void>;
    delete: (creditCode: string, idPayment: number, personCode: string, ip: string) => Promise<void>;
    findPaymentSchedule: (creditCode: string) => Promise<PaymentSchedule>;
}
