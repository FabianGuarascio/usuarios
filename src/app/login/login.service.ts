import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  urlLogin:string="http://localhost:8080/api/login"
  urlLoginUsuario:string="http://localhost:8080/api/login/usuario"
  constructor(private http:HttpClient) { }

 
  login(datos:any){
   return this.http.post(this.urlLogin,datos,{headers:{'Accept': 'application/json',
   'Content-Type': 'application/json'},responseType:'text'})
  }
  loginUsuario(datos:any){
    return this.http.post(this.urlLoginUsuario,datos,{headers:{'Accept': 'application/json',
    'Content-Type': 'application/json'}})
   }
}

