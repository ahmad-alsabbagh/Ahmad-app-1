import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userName: string;
  password: string;

  constructor() {
    this.userName = '';
    this.password = '';

   }

  ngOnInit() {
  }
  logIn() {
    console.log(this.userName);
    console.log(this.password);
 }

}
