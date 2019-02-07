import { Injectable } from '@angular/core';
import {StudentListService} from '../StudentList/student-list.service';
@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private studentService: StudentListService) {}

  private validate(userName: string, password: string ) {

  }
  private getList() {
    let students = this.studentService.getStudents();
  }
}
