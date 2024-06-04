export type PaymentDto = {
    creditCode: string;
    date: string;
    hour: string;
    amount: number;
    collectionLocationCode: string;
    paymentType: string | null;
    banckAccountCode: string | null;
};
