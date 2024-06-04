"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulateInstallmentPaymentUseCase = void 0;
const common_1 = require("@nestjs/common");
const installment_payment_model_1 = require("../../domain/model/installment-payment.model");
const schedule_services_1 = require("../services/schedule.services");
let SimulateInstallmentPaymentUseCase = class SimulateInstallmentPaymentUseCase {
    constructor(scheduleServices) {
        this.scheduleServices = scheduleServices;
        this.execute = async (payment) => {
            const simulatePayment = [];
            const paymentPromises = payment.map(async (_payment) => {
                const paymentSchedule = await this.scheduleServices.findPaymentSchedule();
                if (!paymentSchedule)
                    return;
                paymentSchedule
                    .filter((installment) => installment.principalBalance +
                    installment.interestBalance +
                    installment.feesbalance +
                    installment.vehicleInsuranceBalance +
                    installment.lifeInsuranceBalance >
                    0.0)
                    .reduce((amountBalance, installment) => {
                    const installmentPayments = {
                        principalAmount: 0.0,
                        interestAmount: 0.0,
                        lateFeeAmount: 0.0,
                        vehicleInsurance: 0.0,
                        lifeInsurance: 0.0,
                    };
                    const updateAmountBalance = (installmentBalance, paymentType) => {
                        if (amountBalance > installmentBalance) {
                            amountBalance -= +installmentBalance.toFixed(2);
                            installmentPayments[paymentType] = +installmentBalance.toFixed(2);
                            installmentBalance = 0.0;
                        }
                        else {
                            installmentPayments[paymentType] = +amountBalance.toFixed(2);
                            installmentBalance -= +amountBalance.toFixed(2);
                            amountBalance = 0.0;
                        }
                    };
                    if (amountBalance > 0) {
                        updateAmountBalance(installment.principalBalance, 'principalAmount');
                        updateAmountBalance(installment.interestBalance, 'interestAmount');
                        updateAmountBalance(installment.feesbalance, 'lateFeeAmount');
                        updateAmountBalance(installment.vehicleInsuranceBalance, 'vehicleInsurance');
                        updateAmountBalance(installment.lifeInsuranceBalance, 'lifeInsurance');
                        simulatePayment.push(new installment_payment_model_1.InstallmentPayment({
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
                        }));
                    }
                    return amountBalance;
                }, +_payment.amount.toFixed(2));
            });
            await Promise.all(paymentPromises);
            return simulatePayment;
        };
    }
};
exports.SimulateInstallmentPaymentUseCase = SimulateInstallmentPaymentUseCase;
exports.SimulateInstallmentPaymentUseCase = SimulateInstallmentPaymentUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [schedule_services_1.ScheduleServices])
], SimulateInstallmentPaymentUseCase);
//# sourceMappingURL=simulate-installment-payment.use-case.js.map