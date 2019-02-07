export class Student {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    payment: string;
    password: string;

    constructor(firstName, lastName, email, number, payment, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.number = number;
        this.payment = payment;
        this.password = password;
    }
}
