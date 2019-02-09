import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './component/log-in/log-in.component';
import { DashBordComponent } from './component/dash-bord/dash-bord.component';
import { RegisterComponent } from './component/register/register.component';
import { NotFound404Component } from './not-found-404';

const routes: Routes = [
  { path: 'home',
  component: DashBordComponent
  },
  {
     path: 'login',
     component: LogInComponent
  },
  {
     path: '',
     component: NotFound404Component,
     pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound404Component,
    pathMatch: 'full'
 },
 { path: 'register',
   component: RegisterComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
