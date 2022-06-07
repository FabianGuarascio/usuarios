import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoInterface } from './contacto-interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosServiceService {

  
  url:string="http://localhost:8080/api/usuario/"
  constructor(private http:HttpClient) { }

  getContactos(usuario_id:string|null):Observable<ContactoInterface>{
    return this.http.get<ContactoInterface>(this.url + usuario_id)
  }

}
