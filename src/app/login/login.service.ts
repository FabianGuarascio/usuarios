import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  heroku:string="https://contactos-registro.herokuapp.com/"
  urlLogin:string=`${this.heroku}api/login`;
  urlLoginUsuario:string=`${this.heroku}api/login/usuario`
  

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

