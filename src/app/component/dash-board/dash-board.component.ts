import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {StudentListService} from '../../service/StudentList/student-list.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  formdata;
   constructor(private router: Router, private list: StudentListService) { }
   ngOnInit() {
      this.formdata = new FormGroup({
         firstName: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(6)
         ])),
         lastName: new FormControl(),
         email: new FormControl(),
         phone: new FormControl(),
      });
   }


   onClickSubmit(data) {
      console.log(data.firstName);
      console.log(data.lastName);
      console.log(data.email);
      console.log(data.phone);
      this.list.addStudent(data.firstName, data.lastName, data.email, data.phone);
      console.log(this.list.getStudents);


   }

}
