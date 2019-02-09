import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userName: string;
  password: string;
  // router: Router;

  ngOnInit() {}

  constructor(private router: Router) {
    this.userName = '';
    this.password = '';
    // this.router = router;
   }

  logIn() {
    console.log('works');
    // console.log(this.password);
    this.router.navigate(['home']);

 }

}
