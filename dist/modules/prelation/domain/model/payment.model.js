"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
class Payments {
    constructor(constructor) {
        this.creditCode = constructor.creditCode;
        this.amount = constructor.amount;
        this.numberPayment = constructor.numberPayment;
        this.principalAmount = constructor.principalAmount;
        this.interestAmount = constructor.interestAmount;
        this.lateFeeAmount = constructor.lateFeeAmount;
        this.vehicleInsurance = constructor.vehicleInsurance;
        this.lifeInsurance = constructor.lifeInsurance;
        this.collectionLocationCode = constructor.collectionLocationCode;
        this.paymentType = constructor.paymentType;
        this.bankAccountCode = constructor.banckAccountCode;
        this.paymentHour = constructor.paymentHour;
        this.paymentDate = constructor.paymentDate;
        this.paymentValueDate = constructor.paymentValueDate;
        this.registeringPersonCode = constructor.registeringPersonCode;
        this.idPayment = constructor.idPayment;
    }
}
exports.Payments = Payments;
//# sourceMappingURL=payment.model.js.map