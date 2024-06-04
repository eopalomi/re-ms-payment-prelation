"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrelationModule = void 0;
const common_1 = require("@nestjs/common");
const prelation_controller_controller_1 = require("./presentation/controller/prelation-controller.controller");
const simulate_installment_payment_use_case_1 = require("./application/uses-cases/simulate-installment-payment.use-case");
const schedule_services_1 = require("./application/services/schedule.services");
let PrelationModule = class PrelationModule {
};
exports.PrelationModule = PrelationModule;
exports.PrelationModule = PrelationModule = __decorate([
    (0, common_1.Module)({
        controllers: [prelation_controller_controller_1.PrelationController],
        providers: [simulate_installment_payment_use_case_1.SimulateInstallmentPaymentUseCase, schedule_services_1.ScheduleServices],
    })
], PrelationModule);
//# sourceMappingURL=prelation.module.js.map