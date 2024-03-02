
class Bank {
    name: string;
    branches: Branch[];

    constructor(name: string) {
        this.name = name;
        this.branches = [];
        console.log(this.name + ' bank was added successfully.');
    }

    addBranch(branch: Branch): void {
        if (!this.branches.includes(branch)) {
            this.branches.push(branch);
            return console.log(branch.name + ' was added successfully.');
        }
        return console.log(branch.name + ' failed to be added.');
    }

    addCustomer(branch: Branch, customer: Customer): void {
        if (branch instanceof Branch && customer instanceof Customer) {
            branch.addCustomer(customer);
            return console.log('customer: ' + customer.name + ' was added successfully to: ' + branch.name + '.');
        }
        return console.log('customer: ' + customer.name + ' failed to be added.');
    }
    addCustomerTransaction(branch: Branch, customerId: number, amount: number, date: Date): void {
        if (branch instanceof Branch) {
            const transactionAdded = branch.addCustomerTransaction(customerId, amount, date);
            if (transactionAdded) {
                console.log('customer(' + customerId + ') transaction added successfully to: ' + branch.getName() + '.');
            } else {
                console.log('customer(' + customerId + ') transaction failed to be added to: ' + branch.getName() + '.');
            }
        } else {
            console.log('Invalid branch provided.');
        }
    }

    findBranchByName(branchName: string): void {
        const branchCheck = this.branches.filter(branch => branch.getName().toLowerCase().includes(branchName.toLowerCase()));
        if (branchCheck.length > 0) {
            return console.log('Branch(es) found: ' + branchCheck.map((b) => b.getName()).join(", "));
        }
        return console.log('No branch found with the name: ' + branchName);
    }

    checkBranch(branch: Branch): boolean {
        return this.branches.includes(branch);
    }

    listCustomers(branch: Branch, includeTransactions: boolean): string {
        let output = "";
        const customers = branch.getCustomers();

        if (customers.length === 0) {
            return "No customers found.";
        }

        customers.forEach(customer => {
            output += `Customer: ${customer.getName()}\n`;

            if (includeTransactions) {
                const transactions = customer.getTransactions();
                transactions.forEach(transaction => {
                    output += `Transaction: Amount - ${transaction.amount}, Date - ${transaction.date}\n`;
                });
            }
        });

        return output;
    }
}


class Branch {
    name: string;
    customers: Customer[];

    constructor(name: string) {
        this.name = name;
        this.customers = [];
    }

    getName(): string {
        return this.name;
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

    addCustomer(customer: Customer): boolean {
        if (!this.customers.includes(customer)) {
            this.customers.push(customer);
            return true;
        }
        return false;
    }

    addCustomerTransaction(customerId: number, amount: number, date: Date): boolean {
        const customer = this.customers.find(cust => cust.getId() === customerId);
        if (customer) {
            return customer.addTransaction(amount, date);
        }
        return false;
    }
}

class Customer {
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

class Transaction {
    amount: number;
    date: Date;

    constructor(amount: number, date: Date = new Date()) {
        this.amount = amount;
        this.date = date;
    }
}

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John", 1)
const customer2 = new Customer("Anna", 2)
const customer3 = new Customer("John", 3)

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch)

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("Sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)


const currentDate = new Date();

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000, currentDate);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000, currentDate);
arizonaBank.addCustomerTransaction(sunBranch, customer2.getId(), 3000, currentDate);


customer1.addTransaction(-1000, currentDate)
console.log(customer1.name + ' balance is: ' + customer1.getBalance())
console.log('- customers list of Arizona Bank - West Branch: \n' + arizonaBank.listCustomers(westBranch, true))
console.log('- customers list of Arizona Bank - Sun Branch: \n' + arizonaBank.listCustomers(sunBranch, true))
