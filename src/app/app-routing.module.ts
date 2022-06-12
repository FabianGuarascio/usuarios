import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginGuard } from './login.guard';
import { LoginModule } from './login/login.module';

const routes:Routes=[
  {
    path:"login",
    loadChildren:()=> import("./login/login.module").then(m=>LoginModule)
  },
  {
    path:"dashboard", canActivate:[LoginGuard],
    loadChildren:()=> import("./dashboard/dashboard.module").then(m=>DashboardModule)
  },
  {
    path:"",
    loadChildren:()=> import("./login/login.module").then(m=>LoginModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
