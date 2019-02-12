import { Component, OnInit } from '@angular/core';
import {StudentListService} from '../../service/StudentList/student-list.service';
import {Student} from '../../classes/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
student: Student;
  constructor(
    private studentListService: StudentListService,
    ) {}

  ngOnInit() {
  }
  someFunction(value: Student) {
    console.log(value);
  }
  // getStudentClickedId() {
  //  this.id = this.studentListService.studentGetClicked();
  // }
  // getStudentById() {
  //   // console.log(student.id);
  //   console.log(this.studentListService.getSelectedId());
  //   this.student = this.studentListService
  //   .getStudentById(this.studentListService.getSelectedId());
  //   console.log(this.student);
  // }


}
