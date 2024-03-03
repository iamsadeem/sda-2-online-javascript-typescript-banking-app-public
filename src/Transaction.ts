export default class Transaction {
    amount: number;
    date: Date;

    constructor(amount: number, date: Date = new Date()) {
        this.amount = amount;
        this.date = date;
    }
}
