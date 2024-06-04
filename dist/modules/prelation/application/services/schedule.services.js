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
exports.ScheduleServices = void 0;
const common_1 = require("@nestjs/common");
let ScheduleServices = class ScheduleServices {
    constructor() {
        this.findPaymentSchedule = () => {
            const schedule = [
                {
                    creditCode: 'D2065001',
                    numberPayment: 1,
                    paymentDate: '2024-05-18',
                    principal: 800,
                    interest: 200,
                    vehicleInsurance: 50,
                    lifeInsurance: 50,
                    principalBalance: 800,
                    interestBalance: 200,
                    feesbalance: 10,
                    vehicleInsuranceBalance: 50,
                    lifeInsuranceBalance: 50,
                },
                {
                    creditCode: 'D2065001',
                    numberPayment: 2,
                    paymentDate: '2024-06-18',
                    principal: 800,
                    interest: 200,
                    vehicleInsurance: 50,
                    lifeInsurance: 50,
                    principalBalance: 800,
                    interestBalance: 200,
                    feesbalance: 10,
                    vehicleInsuranceBalance: 50,
                    lifeInsuranceBalance: 50,
                },
            ];
            return schedule;
        };
    }
};
exports.ScheduleServices = ScheduleServices;
exports.ScheduleServices = ScheduleServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ScheduleServices);
//# sourceMappingURL=schedule.services.js.map