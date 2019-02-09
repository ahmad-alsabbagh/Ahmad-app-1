import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { DashBordComponent } from './component/dash-bord/dash-bord.component';
import { RegisterComponent } from './component/register/register.component';
import { SelectListComponent } from './component/select-list/select-list.component';
import { NotFound404Component } from './not-found-404';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashBordComponent,
    RegisterComponent,
    SelectListComponent,
    NotFound404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
