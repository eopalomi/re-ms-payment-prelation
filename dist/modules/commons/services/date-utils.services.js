"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatedDate = void 0;
const formatedDate = (date, dateFormats) => {
    if (!dateFormats) {
        throw new Error('Function formatedDate requeri dateFormats arg');
    }
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minuts = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const miliseconds = date.getMilliseconds().toString().padStart(3, '0');
    let dateFormated = null;
    if (dateFormats === 'YYYY-MM-DD_hhmmss') {
        dateFormated = `${year}-${month}-${day} ${hour}:${minuts}:${seconds}.${miliseconds}`;
    }
    if (dateFormats === 'yyyy-mm-dd') {
        dateFormated = `${year}-${month}-${day}`;
    }
    if (dateFormats === 'hh:mm') {
        dateFormated = `${hour}:${minuts}`;
    }
    return dateFormated ?? `${year}-${month}-${day}`;
};
exports.formatedDate = formatedDate;
//# sourceMappingURL=date-utils.services.js.map