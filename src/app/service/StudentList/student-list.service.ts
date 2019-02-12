import { Injectable } from '@angular/core';
import { Student } from '../../classes/student';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private nextId: number;
  private id = 0;
  private selectedId: number;
  constructor() {
    let students : Student[] = this.getStudents();
  }

  public addStudent(firstName: string, lastName: string, email: string, phoneNumber: string, password: string): void {
    let students: Student[] = this.getStudents();
    let id: any ;
    console.log('called');
    const student = new Student(firstName, lastName, email, phoneNumber, password, id = this.getNextId());
    console.log(students);
    console.log( student );
    students.push(student);
    // save the todos to local storage
    this.setLocalStorageStudents(students);
    // this.nextId++;
  }

  public getStudents(): Student[] {
    let localStorageItem = JSON.parse(localStorage.getItem('students'));
    return localStorageItem == null ? [] : localStorageItem.students;



  }

  public removeStudent(id: number): void {
    let students = this.getStudents();
    students = students.filter((student) => student.id != id);
    this.setLocalStorageStudents(students);
  }

  // private function to help save to local storage
  private setLocalStorageStudents(students: Student[]): void {
  return localStorage.setItem('students', JSON.stringify({ students: students }));
  }
  public getNextId(): number {
    if ( this.getStudents().length == 0 || this.getStudents() == null) {
      this.nextId = 1;
      console.log( 'first line');
      console.log( this.nextId );
      return this.nextId;

    } else {
      const maxId = this.getStudents()[this.getStudents().length - 1].id;
      this.nextId = maxId + 1;
      console.log( 'seconde line');
      console.log( this.nextId );
      return this.nextId;
    }
   }

   getStudentById(id: number): Student {
     return this.getStudents().filter((student) => student.id === id)[0];
   }

   getSelectedId(): number {
     return this.selectedId;
   }

   setSelectedId(id: number) {
     this.selectedId = id;
   }
  //  public studentSetClicked(id: number) {
  //    this.id = id;
  //  }
  //  public studentGetClicked(): number {

  //   return this.id;
  //  }
  //  private getSideListData() {
  //   let students = this.getStudents();
  //   students = students.filter((student) => student.id != id);
  //   this.setLocalStorageStudents(students);
  //  }


}


