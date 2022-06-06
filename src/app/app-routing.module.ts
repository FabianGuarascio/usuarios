import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';

const routes:Routes=[
  {
    path:"login",
    loadChildren:()=> import("./login/login.module").then(m=>LoginModule)
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
