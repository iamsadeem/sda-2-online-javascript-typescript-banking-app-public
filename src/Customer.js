import Transaction from "./Transaction.js";
export default class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.transactions = [];
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransactions() {
        return this.transactions;
    }
    getBalance() {
        return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }
    addTransaction(amount, date) {
        if (amount > 0) {
            const transaction = new Transaction(amount, date);
            this.transactions.push(transaction);
            console.log('transaction: ' + amount + ' was successful.');
            return true;
        }
        console.log('transaction: ' + amount + ' failed.');
        return false;
    }
}
