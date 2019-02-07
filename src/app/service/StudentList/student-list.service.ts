import { Injectable } from '@angular/core';
import { Student } from '../../classes/student';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private nextId: number;
   students: Student[];
  constructor() {
       this.students = this.getStudents;
    // if no students, nextId is 0,
    // otherwise set to 1 more than last todo id
  }

  public addStudent(firstName: string, lastName: string, email: string, phoneNumber: string, payment: string, password: string): void {
    let student = new student(firstName, lastName, email, phoneNumber, payment, password, this.getNextId());
    let student = this.getTodo();
    this.students.push(student);
    // save the todos to local storage
    this.setLocalStorageTodos(student);
    this.nextId++;
  }

  public getStudents(): Student[] {
    let localStorageItem = JSON.parse(localStorage.getItem('students'));
    return localStorageItem == null ? [] : localStorageItem.students;
  }

  public removeTodo(id: number): void {
    let todos = this.getStudents();
    student = students.filter((student)=> student.id != id);
    this.setLocalStorageTodos(students);
  }

  // private function to help save to local storage
  private setLocalStorageStudents(students: Student[]): void {
    localStorage.setItem('students', JSON.stringify({ students: Student }));
  }
  private getNextId() {
    if ( this.getStudents() .length == 0) {
      this.nextId = 0;
    } else {
      let maxId = this.getStudents()[this.getStudents().length - 1].id;
      this.nextId = maxId + 1;
    }  }
}

