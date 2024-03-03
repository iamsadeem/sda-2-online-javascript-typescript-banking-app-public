export default class Branch {
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
    addCustomer(customer) {
        if (!this.customers.includes(customer)) {
            this.customers.push(customer);
            return true;
        }
        return false;
    }
    addCustomerTransaction(customerId, amount, date) {
        const customer = this.customers.find(cust => cust.getId() === customerId);
        if (customer) {
            return customer.addTransaction(amount, date);
        }
        return false;
    }
}
