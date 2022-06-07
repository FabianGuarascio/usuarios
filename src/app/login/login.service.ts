import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  urlLogin:string="http://localhost:8080/api/login"
  constructor(private http:HttpClient) { }

 
  login(datos:any){
   return this.http.post(this.urlLogin,datos,{headers:{'Accept': 'application/json',
   'Content-Type': 'application/json'},responseType:'text'})
  }
}

