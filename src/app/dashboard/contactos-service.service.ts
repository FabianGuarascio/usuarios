import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { ContactoInterface } from './contacto-interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosServiceService {

  private _refresh$= new Subject<void>();

  get refresh$(){
    return this._refresh$
  }
  
  // url:string="http://localhost:8080/api/usuario/"
  // urlCrear:string="http://localhost:8080/api/usuario/crear"
  // urlBorrar:string="http://localhost:8080/api/usuario/borrar/"
  
  heroku:string="https://contactos-registro.herokuapp.com/"
  url:string=`${this.heroku}api/usuario/`
  urlCrear:string=`${this.heroku}api/usuario/crear`
  urlBorrar:string=`${this.heroku}api/usuario/borrar/`
  constructor(private http:HttpClient) { }

  getContactos(usuario_id:string|null):Observable<ContactoInterface>{
    return this.http.get<ContactoInterface>(this.url + usuario_id,{headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }
  createContacto(body:any){
    return this.http.post(this.urlCrear,body,{headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}}).pipe(tap(()=>{
      this._refresh$.next()
      
    }))
  }
  borrarContacto(id:string){
    return this.http.delete(this.urlBorrar + id,{headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}}).pipe(tap(()=>{
      this._refresh$.next()
    }))
  }


}
