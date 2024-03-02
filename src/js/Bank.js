
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
        console.log(this.name +' bank was added successfully.');
    }

    //Adds the branch to the branches array. Each branch should only be added once.
    addBranch(branch) {
        if (!this.branches.includes(branch)) {
            this.branches.push(branch);
            return console.log(branch.name+' was added successfully.');
        }
        return  console.log(branch.name+' failed to be added.');;
    }

    //Adds the customer to the branch of the bank. Each customer can only be added once to a branch.
    addCustomer(branch, customer) {
        if (branch instanceof Branch && customer instanceof Customer) {
             branch.addCustomer(customer);
             return console.log('customer: '+customer.name+' was added successfully to: '+branch.name+'.');
        }
        return console.log('customer: '+customer.name+' failed to be added.');
    }

    //Adds a transaction of the amount for the customer with the specified customerId in the given branch
    addCustomerTransaction(branch, customerId, amount, date) {
        if (branch instanceof Branch) {
            branch.addCustomerTransaction(customerId, amount, date);
            return console.log('customer('+customerId+') transaction added successfully to: '+branch.name+'.');
        }
        return console.log('customer('+customerId+') transaction failed to be added to: '+branch.name+'.');
    }

    //Returns a list of matched branches with the specified branchName or null if no matches were found.
    findBranchByName(branchName) {
        const branchCheck = this.branches.filter(branch => branch.getName().toLowerCase().includes(branchName.toLowerCase()));
        if (branchCheck.length > 0) {
            return console.log('Branch(es) found: ' + branchCheck.map((b) => b.getName()).join(", "));
        }
        return console.log('No branch found with the name: ' + branchName);
    }

    //Returns true if the branch belongs to the bank or false otherwise.
    checkBranch(branch) {
        return this.branches.includes(branch);
    }

    //Prints out a list of customers with their transaction details if includeTransactions is true.
    listCustomers(branch, includeTransactions) {
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
    constructor(name) {
        this.name = name;
        this.customers = [];
    }

    getName() {
        return this.name;
    }

    getCustomers() {
        return this.customers;
    }

    //Adds the customer to the customers array. Each customer should only be added once
    addCustomer(customer) {
        if (!this.customers.includes(customer)) {
            this.customers.push(customer);
            return true;
        }
        return false;
    }

    //Adds a transaction of the amount for the customer with the specified customerId.
    addCustomerTransaction(customerId, amount, date) {
        const customer = this.customers.find(cust => cust.getId() === customerId);
        if (customer) {
            return customer.addTransaction(amount, date);
        }
        return false;
    }
}

class Customer {
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

    // The balance cannot be negative.
    getBalance() {
        return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }

    //Adds a successful transaction of the amount to the transactions array.
    addTransaction(amount, date) {
        if (amount > 0) {
            const transaction = new Transaction(amount, date);
            this.transactions.push(transaction);
            return console.log('transaction: '+amount+' was successful.');
        }
        return console.log('transaction: '+amount+' failed.');
    }
}

class Transaction {

    constructor(amount, date = new Date()) {
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

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(sunBranch, customer2.getId(), 3000)

customer1.addTransaction(-1000)
console.log(customer1.name+' balance is: '+customer1.getBalance())
console.log('- customers list of Arizona Bank - West Branch: \n'+arizonaBank.listCustomers(westBranch, true))
console.log('- customers list of Arizona Bank - Sun Branch: \n'+arizonaBank.listCustomers(sunBranch,true))