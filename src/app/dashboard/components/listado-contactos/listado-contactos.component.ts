import { Component, OnInit } from '@angular/core';
import { ContactoInterface } from '../../contacto-interface';

@Component({
  selector: 'app-listado-contactos',
  templateUrl: './listado-contactos.component.html',
  styleUrls: ['./listado-contactos.component.css']
})
export class ListadoContactosComponent implements OnInit {

  contactos:ContactoInterface[]=[
    {
      nombre:"Enrique",
      apellido:"Garcia",
      telefono:45716895,
      email:"test@gmail",
      pais:"Timbuktu",
      ciudad:"Londres",
      calle:"441 baker street"
    },
    {
      nombre:"Jacinta",
      apellido:"Garcia",
      telefono:157401928,
      email:"test2@gmail",
      pais:"Argentina",
      ciudad:"Cordoba",
      calle:"San Martin 200"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
