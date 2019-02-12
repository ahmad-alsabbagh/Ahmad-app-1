import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './component/log-in/log-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentListService } from './service/StudentList/student-list.service';
import { DashBoardComponent } from './component/dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashBoardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
