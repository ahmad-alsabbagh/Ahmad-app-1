import { Component, OnInit} from '@angular/core';
import {StudentListService} from '../../service/StudentList/student-list.service';
import {Student} from '../../classes/student';


@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.css']
})
export class DashBordComponent implements OnInit {
  selectedStudent: Student;

  constructor( private studentService: StudentListService) { }

  ngOnInit() {
  }
   getList(): Student[] {
    return this.studentService.getStudents();
  }
  onDeleteClicked(id) {
    console.log(id);
    console.log('DeleteClicked');
    this.studentService.removeStudent(id);

  }
  onStudentClicked(student: Student) {
    this.selectedStudent = student;
    console.log(this.selectedStudent);
    // this.sideList.getDataStudent(student);


    // this.studentList.setSelectedId( id );
    // console.log(this.studentList.getSelectedId());
    // console.log(student.firstName);

    // this.studentService.studentSetClicked(id);
    // this.studentList.getStudentById(this.studentList.getSelectedId());
  }


}
