import Customer from "./Customer.js";

export default class Branch {
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
