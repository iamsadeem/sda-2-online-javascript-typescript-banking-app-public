import Transaction from "./Transaction.js";

export default class Customer {
    name: string;
    id: number;
    transactions: Transaction[];

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.transactions = [];
    }

    getName(): string {
        return this.name;
    }

    getId(): number {
        return this.id;
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }

    getBalance(): number {
        return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }

    addTransaction(amount: number, date: Date): boolean {
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
