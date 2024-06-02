# JavaScript Banking Application - OOP Practice

This project aims to build JavaScript classes for a banking application to practice Object-Oriented Programming (OOP) concepts.

### Implement the following classes:

#### Bank Class:

Properties:
- name (string)
- branches (Branch[])

Constructor:
- Parameters: name (string)

Methods:
- addBranch(branch: Branch): boolean
  Description: Adds the branch to the branches array. Each branch should only be added once.
  
- addCustomer(branch: Branch, customer: Customer): boolean
  Description: Adds the customer to the branch of the bank. Each customer can only be added once to a branch.
  
- addCustomerTransaction(branch: Branch, customerId: string, amount: number): boolean
  Description: Adds a transaction of the amount for the customer with the specified customerId in the given branch.
  
- findBranchByName(branchName: string): Branch[] | null
  Description: Returns a list of matched branches with the specified branchName or null if no matches were found.
  
- checkBranch(branch: Branch): boolean
  Description: Returns true if the branch belongs to the bank or false otherwise.
  
- listCustomers(branch: Branch, includeTransactions: boolean): void
  Description: Prints out a list of customers with their transaction details if includeTransactions is true.

#### Branch Class:

Properties:
- name (string)
- customers (array of Customer[])

Constructor:
- Parameters: name (string)

Methods:
- getName(): string
- getCustomers(): Customer[]
- addCustomer(customer: Customer): boolean
  Description: Adds the customer to the customers array. Each customer should only be added once.
  
- addCustomerTransaction(customerId: string, amount: number): boolean
  Description: Adds a transaction of the amount for the customer with the specified customerId.

#### Customer Class:

Properties:
- name (string)
- id (number)
- transactions (array of Transaction[])

Constructor:
- Parameters: name, id

Methods:
- getName(): string
- getId(): number
- getTransactions(): Transaction[]
- getBalance(): number
  Note: The balance cannot be negative.

- addTransactions(amount: number): boolean
  Description: Adds a successful transaction of the amount to the transactions array.

#### Transaction Class:

Properties:
- amount (number)
- date (Date)

Constructor:
- Parameters: amount, date

### Additional Requirements

Enhance the application with the following features:

- Add validation checks to ensure that the data meets certain criteria before performing create or update operations. For example, validate required fields and data format.

# TypeScript Banking Application
This is the Typescript assignment for the Typescript lecture. 
Your task is to convert the existing project to TypeScript and add appropriate type annotations to enhance type safety and maintainability.

## Guidelines

To complete this assignment, follow the guidelines below:

1. Set up TypeScript:
   - Install TypeScript globally on your system if you haven't done so already.
   - Create a new TypeScript configuration file (tsconfig.json) in the root folder of your project.

2. Convert JavaScript files to TypeScript:
   - Rename .js files to .ts extension. Please rename and update one by one.
   - Define the type or interface for variables and declare the return types of the methods.
   - Ensure that the converted TypeScript code compiles successfully without any type errors.

3. Running the TypeScript Code:
   Please run the code in bank.ts and share your results and findings in the Slack channel.

### Notes

- Ensure to apply proper type annotations for variables, function parameters, and return types to enhance type safety.
- Leverage interfaces and custom types wherever appropriate to improve code maintainability and reusability.

Happy coding!
