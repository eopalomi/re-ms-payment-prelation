"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebtRelief = void 0;
const payment_model_1 = require("./payment.model");
class DebtRelief extends payment_model_1.Payments {
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
            _idPayment: constructor.idPayment,
        });
        this.authorizationPersonCode = constructor.authorizationPersonCode;
        this.requestingPersonCode = constructor.requestingPersonCode;
        this.idDocumentWF = constructor.idDocumentWF;
    }
}
exports.DebtRelief = DebtRelief;
//# sourceMappingURL=debt-cancellation.model.js.map