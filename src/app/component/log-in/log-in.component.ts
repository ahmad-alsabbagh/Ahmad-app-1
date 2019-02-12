import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formdata;
   constructor(private router: Router) { }
   ngOnInit() {
      this.formdata = new FormGroup({
         uname: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(6)
         ])),
         passwd: new FormControl('', this.passwordvalidation)
      });
   }
   passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
         return {password : true};
      }
   }

   onClickSubmit(data) {
      console.log(data.uname);
      console.log(data.passwd);
      if (data.uname == '12345' && data.passwd == '12345') {
         alert('Login Successful');
         this.router.navigate(['Dash']);
      } else {
         alert('Invalid Login');
         return false;
      }
   }

}
