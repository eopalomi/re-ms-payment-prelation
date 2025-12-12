"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallmentPaymentfAdapter = void 0;
const date_utils_services_1 = require("../../../commons/services/date-utils.services");
const axios_1 = require("axios");
class InstallmentPaymentfAdapter {
    constructor() {
        this.save = async (payment) => {
            const schedule = await this.findPaymentSchedule(payment.creditCode);
            const installment = schedule.installments.find((installment) => installment.numberPayment === payment.numberPayment);
            const now = new Date();
            const currentDateTime = (0, date_utils_services_1.formatedDate)(now, 'YYYY-MM-DD_hhmmss');
            const currentDate = (0, date_utils_services_1.formatedDate)(now, 'yyyy-mm-dd');
            const currentHour = (0, date_utils_services_1.formatedDate)(now, 'hh:mm:ss AM|PM');
            const creditPayment = {
                cod_cre: payment.creditCode,
                num_cuo: payment.numberPayment,
                lug_rec: payment.collectionLocationCode,
                fec_pag: payment.paymentDate,
                hor_pag: payment.paymentHour,
                fec_doc: payment.paymentValueDate,
                pago: payment.amount,
                pag_cap: payment.principalAmount,
                pag_int: payment.interestAmount,
                pag_seg: payment.vehicleInsurance,
                pag_seg_desgra: payment.lifeInsurance,
                pag_mor: payment.lateFeeAmount,
                pag_itf: 0,
                enc_cap: installment.principalBalance,
                enc_int: installment.interestBalance,
                enc_mor: installment.feesbalance,
                enc_seg: installment.vehicleInsuranceBalance,
                enc_seg_desgra: installment.lifeInsuranceBalance,
                fec_reg: currentDateTime,
                hor_reg: currentHour,
                usu_reg: payment.registeringPersonCode,
                fec_reg_pag: currentDateTime,
                tip_pagcuo: payment.paymentType,
                id_pagcre: payment.idPayment,
                fe_propre: currentDate,
            };
            const fieldsForUpdate = {
                sal_cap: installment.principalBalance - payment.principalAmount,
                sal_int: installment.interestBalance - payment.interestAmount,
                sal_mor: installment.feesbalance - payment.lateFeeAmount,
                sal_seg: installment.vehicleInsuranceBalance - payment.vehicleInsurance,
                sal_seg_desgra: installment.lifeInsuranceBalance - payment.lifeInsurance,
                fec_can: currentDate,
            };
            try {
                await axios_1.default.post(`${this.lb4Host}/${'path_grabar_pago'}`, creditPayment);
                await axios_1.default.patch(`${this.lb4Host}/${'path_update'}/${payment.creditCode}/${payment.numberPayment}`, fieldsForUpdate);
            }
            catch (error) {
                throw new Error(error.message);
            }
        };
        this.delete = async (creditCode, idPayment, personCode, ip) => {
            try {
                const encodedPath = encodeURIComponent(JSON.stringify({
                    limit: 200,
                    order: 'fec_reg_pag asc',
                    where: {
                        cod_cre: creditCode,
                        id_pagcre: idPayment,
                    },
                }));
                const { data: paymentsToCancel } = await axios_1.default.get(`${this.lb4Host}/${'path_get_pag_cuo'}?filter=` + encodedPath);
                const paymentCanceledPromises = paymentsToCancel.map(async (payments) => {
                    const idCancel = 'uuid_$%T$#RFSR"#';
                    const canceledPayment = {
                        codigo: idCancel,
                        cod_per_anu: personCode,
                        fec_anu: (0, date_utils_services_1.formatedDate)(new Date(), 'YYYY-MM-DD_hhmmss'),
                        ip_anu: ip,
                        ...payments,
                    };
                    return axios_1.default.post(`${this.lb4Host}/${'path_insert_pag_anu'}`, canceledPayment);
                });
                await Promise.all(paymentCanceledPromises);
                await axios_1.default.delete(`${this.lb4Host}/${'path_delete_pag_cuo'}/${creditCode}`, {
                    params: {
                        id_pagcre: idPayment,
                    },
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        };
        this.findPaymentSchedule = async (creditCode) => {
            const paymentSchedule = {
                creditCode: creditCode,
                installments: [
                    {
                        numberPayment: 1,
                        paymentDate: '2024-05-01',
                        principal: 1000,
                        interest: 200,
                        vehicleInsurance: 50,
                        lifeInsurance: 30,
                        igvInsurance: 20,
                        principalBalance: 900,
                        interestBalance: 180,
                        feesbalance: 10,
                        vehicleInsuranceBalance: 40,
                        lifeInsuranceBalance: 20,
                        preventionInsuranceBalance: 5,
                    },
                    {
                        numberPayment: 2,
                        paymentDate: '2024-06-01',
                        principal: 1000,
                        interest: 180,
                        vehicleInsurance: 50,
                        lifeInsurance: 30,
                        principalBalance: 800,
                        interestBalance: 160,
                        feesbalance: 10,
                        vehicleInsuranceBalance: 40,
                        lifeInsuranceBalance: 20,
                        preventionInsuranceBalance: 5,
                    },
                ],
            };
            return paymentSchedule;
        };
    }
}
exports.InstallmentPaymentfAdapter = InstallmentPaymentfAdapter;
//# sourceMappingURL=installment-payment.adapter.js.map