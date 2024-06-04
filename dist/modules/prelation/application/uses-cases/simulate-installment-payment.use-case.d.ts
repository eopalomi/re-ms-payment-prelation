import { PaymentDto } from '../../domain/Dto/payment.dto';
import { InstallmentPayment } from '../../domain/model/installment-payment.model';
import { ScheduleServices } from '../services/schedule.services';
export declare class SimulateInstallmentPaymentUseCase {
    private scheduleServices;
    constructor(scheduleServices: ScheduleServices);
    execute: (payment: PaymentDto[]) => Promise<InstallmentPayment[]>;
}
