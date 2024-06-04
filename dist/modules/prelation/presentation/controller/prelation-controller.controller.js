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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrelationController = void 0;
const common_1 = require("@nestjs/common");
const simulate_installment_payment_use_case_1 = require("../../application/uses-cases/simulate-installment-payment.use-case");
let PrelationController = class PrelationController {
    constructor(simulateInstallmentPaymentUseCase) {
        this.simulateInstallmentPaymentUseCase = simulateInstallmentPaymentUseCase;
    }
    simulateInstallentPayment(payment) {
        return this.simulateInstallmentPaymentUseCase.execute(payment);
    }
    simulateDebtCancellation() {
        return null;
    }
    show() {
        return null;
    }
    store() {
        return null;
    }
};
exports.PrelationController = PrelationController;
__decorate([
    (0, common_1.Post)('simulate/installment-payment'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PrelationController.prototype, "simulateInstallentPayment", null);
__decorate([
    (0, common_1.Post)('/simulate/debt-cancellation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrelationController.prototype, "simulateDebtCancellation", null);
__decorate([
    (0, common_1.Get)('payment/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrelationController.prototype, "show", null);
__decorate([
    (0, common_1.Post)('payment'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrelationController.prototype, "store", null);
exports.PrelationController = PrelationController = __decorate([
    (0, common_1.Controller)(['prelation']),
    __metadata("design:paramtypes", [simulate_installment_payment_use_case_1.SimulateInstallmentPaymentUseCase])
], PrelationController);
//# sourceMappingURL=prelation-controller.controller.js.map