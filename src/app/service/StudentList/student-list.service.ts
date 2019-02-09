import { Injectable } from '@angular/core';
import { Student } from '../../classes/student';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private nextId: number;
  constructor() {
       const students = this.getStudents;
  }

  public addStudent(firstName: string, lastName: string, email: string, phoneNumber: string, payment: string, password: string): void {
    const student = new Student(firstName, lastName, email, phoneNumber, payment, password, this.getNextId());
    const students = this.getStudents();
    students.push(student);
    // save the todos to local storage
    this.setLocalStorageStudents(students);
    this.nextId++;
  }

  public getStudents(): Student[] {
    const localStorageItem = JSON.parse(localStorage.getItem('students'));
    return localStorageItem == null ? [] : localStorageItem.students;
  }

  public removeTodo(id: number): void {
    let students = this.getStudents();
    students = students.filter((student) => student.id != id);
    this.setLocalStorageStudents(students);
  }

  // private function to help save to local storage
  private setLocalStorageStudents(students: Student[]): void {
    localStorage.setItem('students', JSON.stringify({ students: Student }));
  }
  private getNextId() {
    if ( this.getStudents() .length == 0) {
      this.nextId = 0;
    } else {
      const maxId = this.getStudents()[this.getStudents().length - 1].id;
      this.nextId = maxId + 1;
    }
   }
  //  private getSideListData() {
  //   let students = this.getStudents();
  //   students = students.filter((student) => student.id != id);
  //   this.setLocalStorageStudents(students);
  //  }


}


