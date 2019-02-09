import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './component/log-in/log-in.component';
import { DashBordComponent } from './component/dash-bord/dash-bord.component';
import { RegisterComponent } from './component/register/register.component';
import { NotFound404Component } from './not-found-404';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'Home',
  component: HomeComponent,
  children: [
   {
      path: '',
      pathMatch: 'full',
      redirectTo: 'Dash'
   },
   {path: 'Dash',
   component: DashBordComponent,
   },
   { path: 'Register',
   component: RegisterComponent,
   }]
  },
  {
     path: 'Login',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
