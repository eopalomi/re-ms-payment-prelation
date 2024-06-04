"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallmentPayment = void 0;
const payment_model_1 = require("./payment.model");
class InstallmentPayment extends payment_model_1.Payments {
    constructor(constructor) {
        super({
            creditCode: constructor.creditCode,
            amount: constructor.amount,
            numberPayment: constructor.numberPayment,
            principalAmount: constructor.principalAmount,
            interestAmount: constructor.interestAmount,
            lateFeeAmount: constructor.lateFeeAmount,
            vehicleInsurance: constructor.vehicleInsurance,
            lifeInsurance: constructor.lifeInsurance,
            collectionLocationCode: constructor.collectionLocationCode,
            paymentType: constructor.paymentType,
            banckAccountCode: constructor.banckAccountCode,
            paymentDate: constructor.paymentDate,
            paymentHour: constructor.paymentHour,
            paymentValueDate: constructor.paymentValueDate,
            registeringPersonCode: constructor.registeringPersonCode,
            idPayment: constructor.idPayment,
        });
    }
}
exports.InstallmentPayment = InstallmentPayment;
//# sourceMappingURL=installment-payment.model.js.map