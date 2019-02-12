import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './component/log-in/log-in.component';
import {DashBoardComponent} from '../app/component/dash-board/dash-board.component';

const routes: Routes = [
  {
   path: 'Dash',
   component: DashBoardComponent,
   },
   {   path: 'Login',
   component: LogInComponent
   }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
