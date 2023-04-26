# TypeScript Assignment

- Check the scripts in `package.json` to run the suitable command for each challenge

## Create a simple banking application

Implement the following classes, interface, and codes (you can decide which file to put each type, but do not write all the types in `index.ts` or `bank.ts`). All the properties must be kept private, while you can make the methods as public

1. Class Bank

    - It has two properties: `name` (string), `branches` (array of type Branch[])

    - A constructor that takes an argumment name (string). It initialises name and instantiates branches as empty array.

    - And six methods:

    - `addBranch()`, has one parameter of type `Branch` and returns a boolean. This function will add branch into array `branches`. It returns true if the branch was added successfully or false otherwise. Each branch is supposed to be added once only.

    - `addCustomer()`, has 2 parameters: branch and customer and returns a boolean. It returns true if the customer is added successfully to the branch of the bank or false otherwise. Each customer can be added only once to a branch.

    - `addCustomerTransaction()`, has three parameters: branch, customer id, amount of transaction and returns a boolean. It returns true if the customers transaction is added successfully or false otherwise.

    - `findBranchByName()`, has one parameter of type string (branch's name) and returns list of matched branches or null otherwise.

    - `checkBranch()`, has one parameter of type Branch and returns true if branch belongs to bank or false otherwise.

    - `listCustomers()`, has two parameters, branch and boolean and returns a boolean. Return true if the branch exists or false otherwise. This method prints out a list of customers with transaction details if second parameter is true.

2. Class Branch

    - It has two properties, a string called `name` and an array called `customers`. Array `customers` should hold objects of type Customer.

    - A constructor that takes a string (name of the branch). It initialises name and instantiates customers as an emty array.

    - And 5 methods, they are (their functions are in their names):

        - `getName()`, getter for name.

        - `getCustomers()`, getter for customers.

        - `addCustomer()`, has a parameter of type Customer and returns a boolean. Returns true if the customer was added successfully or false otherwise (each customer should be added once only).

        - `addCustomerTransaction()`, has a parameter of type string (id of customer), a number (for transaction) and returns a boolean. Returns true if the customers transaction is added successfully or false otherwise.

        - `findCustomer()`, has one parameter of type string (`id` of customer) and returns a customer. Return the customer if they exist, null otherwise.

3. Class Customer

    - It has 3 properties, string `name`, string `id`, and an array that holds objects of type Transaction called `transactions`.

    - A constructor that takes only a parameter of type string (name of customer). It initialises name and instantiates transactions as empty array. `id` should be initialized to be an unique string.

    - And 5 methods:

        - `getName()`, getter for name.

        - `getId()`, getter for id.

        - `getTransactions()`, getter for transactions.

        - `getBalance()`, return the current balance from the transactions.

        - `addTransaction()`, has one parameter of type number and return true if transaction is added sucessfully. You need to make sure that balance cannot be negative. This function should add the successful transaction into transactions array.

4. Interface Transaction

    - It has 2 properties, a number `amount`, and a Date called `date`. `date` refers to the time that transaction has been created.

Run the following codes in `index.ts`and share your results and findings in the Slack channel

```
const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)

customer1.addTransactions(-1000)
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch,true))
```

You can add more codes to check the functionality and secrity of your banking system

## Installation
1. After clone the project from your forked repo, run `npm install`
2. Run `npm run watch` to see code running in watch mode, or check `package.json` for extra scripts
