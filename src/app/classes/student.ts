export class Student {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    id: number;

    constructor(firstName, lastName, email, phoneNumber, password, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.id = id;
    }
}
