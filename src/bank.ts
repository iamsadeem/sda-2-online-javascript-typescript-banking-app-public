import Branch from "./Branch.js";
import Customer from "./Customer.js";

export class Bank {
    name: string;
    branches: Branch[];

    constructor(name: string) {
        this.name = name;
        this.branches = [];
        console.log(this.name + ' bank was added successfully.');
    }

    addBranch(branch: Branch) {
        if (!this.branches.includes(branch)) {
            this.branches.push(branch);
            console.log(branch.name + ' was added successfully.');
        } else {
            console.log(branch.name + ' failed to be added.');
        }
    }

    addCustomer(branch: Branch, customer: Customer) {
        if (branch instanceof Branch && customer instanceof Customer) {
            branch.addCustomer(customer);
            console.log('customer: ' + customer.name + ' was added successfully to: ' + branch.name + '.');
        } else {
            console.log('customer: ' + customer.name + ' failed to be added.');
        }
    }

    addCustomerTransaction(branch: Branch, customerId: number, amount: number, date: Date) {
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

    findBranchByName(branchName: string) {
        const branchCheck = this.branches.filter(branch => branch.getName().toLowerCase().includes(branchName.toLowerCase()));
        if (branchCheck.length > 0) {
            console.log('Branch(es) found: ' + branchCheck.map((b) => b.getName()).join(", "));
        } else {
            console.log('No branch found with the name: ' + branchName);
        }
    }

    checkBranch(branch: Branch): boolean {
        return this.branches.includes(branch);
    }

    listCustomers(branch: Branch, includeTransactions: boolean): void {
        const customers = branch.getCustomers();
        if (customers.length === 0) {
            console.log("No customers found.");
            return;
        }
        customers.forEach(customer => {
            console.log('Customer: ' + customer.getName() + ' | ID: ' + customer.getId());
            if (includeTransactions) {
                const transactions = customer.getTransactions();
                transactions.forEach(transaction => {
                    console.log('Transaction: Amount - ' + transaction.amount + ', Date - ' + transaction.date);
                });
                if (transactions.length === 0) {
                    console.log('No transactions yet.');
                }
            }
        });
    }
}

//updated
const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("Sun");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
const currentDate = new Date();
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000, currentDate);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000, currentDate);
arizonaBank.addCustomerTransaction(sunBranch, customer2.getId(), 3000, currentDate);
customer1.addTransaction(-1000, currentDate);
console.log(customer1.name + ' balance is: ' + customer1.getBalance());
console.log('- customers list of Arizona Bank - West Branch:');
arizonaBank.listCustomers(westBranch, true);
console.log('- customers list of Arizona Bank - Sun Branch:');
arizonaBank.listCustomers(sunBranch, true);
