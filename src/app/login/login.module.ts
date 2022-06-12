import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { LoginRoutingModule } from './login-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class LoginModule { }
