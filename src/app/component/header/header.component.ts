import { Component, OnInit, Input } from '@angular/core';
import {Student } from '../../classes/student';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() student: Student;


  constructor() { }

  ngOnInit() {
  }

}
