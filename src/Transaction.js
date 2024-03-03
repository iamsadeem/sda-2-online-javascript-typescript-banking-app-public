export default class Transaction {
    constructor(amount, date = new Date()) {
        this.amount = amount;
        this.date = date;
    }
}
