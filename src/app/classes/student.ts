export class Student {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    payment: string;
    password: string;
    id: number;

    constructor(firstName, lastName, email, phoneNumber, payment, password, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.payment = payment;
        this.password = password;
        this.id = id;
    }
}
