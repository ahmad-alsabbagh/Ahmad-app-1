import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addStudent() {
    this.router.navigate(['Home/Register']);


  }

  showList() {
    this.router.navigate(['Home/Dash']);


  }
}
