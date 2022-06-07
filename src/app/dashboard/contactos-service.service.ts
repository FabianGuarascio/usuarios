import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosServiceService {

  
  url:string="http://localhost:8080/api/usuario/1"
  constructor(private http:HttpClient) { }

  getContactos(){
    return this.http.get(this.url)
  }

}
