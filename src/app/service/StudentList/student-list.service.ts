import { Injectable } from '@angular/core';
import { Student } from '../../classes/student';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private students: Student[] = [];

  constructor() {}

  public addStudent(firstName: string, lastName: string, email: string, phoneNumber: string): void {

    console.log('called');
    const student = new Student(firstName, lastName, email, phoneNumber);
    console.log( student );
    this.getStudents().push(student);
  }

  public getStudents() {
   return this.students;
  }
}




