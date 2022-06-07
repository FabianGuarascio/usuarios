import { Component, OnInit } from '@angular/core';
import { ContactoInterface } from '../../contacto-interface';
import { ContactosServiceService } from '../../contactos-service.service';

@Component({
  selector: 'app-listado-contactos',
  templateUrl: './listado-contactos.component.html',
  styleUrls: ['./listado-contactos.component.css']
})
export class ListadoContactosComponent implements OnInit {
  usuario_id:string|null =localStorage.getItem('usuario')
  contactos:any=[]

  constructor(private contactosService:ContactosServiceService) { }

  ngOnInit(): void {
    this.contactosService.getContactos(this.usuario_id).subscribe(data=> this.contactos= data)
  }

}
