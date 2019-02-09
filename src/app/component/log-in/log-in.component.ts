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
         userName: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(6)
         ])),
         password: new FormControl('', this.passwordvalidation)
      });
   }
   passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
         return {password : true};
      }
   }

   onClickSubmit(data) {
      console.log(data.userName);
      console.log(data.password);
      if (data.userName == 'asdasd' && data.password == 'asdasd') {
         alert('Login Successful');
         this.router.navigate(['Home']);
      } else {
         alert('Invalid Login');
         return false;
      }
   }

}
