import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {StudentListService} from '../../service/StudentList/student-list.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata;

  constructor( private studentService: StudentListService ) {}
  ngOnInit() {
     this.formdata = new FormGroup({
        firstName: new FormControl('', Validators.compose([
           Validators.required,
           Validators.minLength(6)
        ])),
        lastName: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(3)
       ])),
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6)
      ])),
      phoneNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
        password: new FormControl('', this.passwordvalidation)
     });
  }
  passwordvalidation(formcontrol) {
     if (formcontrol.value.length < 5) {
        return {password : true};
     }
  }

  onClickRegister(data) {
     console.log(data);
     this.studentService.addStudent(data.firstName, data.lastName, data.email, data.phoneNumber, data.password);
     alert('Student Added');

  }

}

