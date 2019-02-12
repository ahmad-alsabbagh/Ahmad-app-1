import {  Component, OnInit, Input } from '@angular/core';
import { Student } from '../../classes/student';

@Component({
  selector: 'app-side-list-data-r',
  templateUrl: './side-list-data-r.component.html',
  styleUrls: ['./side-list-data-r.component.css']
})
export class SideListDataRComponent implements OnInit {
  @Input() student: Student;
  constructor() {
  }

  ngOnInit() {
  }
}

