import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { LoginService } from '../login.service';

declare let alertify:any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  @ViewChild("nombre")  nombre!: ElementRef;
  @ViewChild("password")  password!: ElementRef;
  hide = true;

  constructor(public loginService: LoginService, private router:Router, private _route:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  login(){
    let datos={
      nombre:this.nombre.nativeElement.value,
      password:this.password.nativeElement.value
    }
    this.loginService.login(datos).subscribe( data=>{
      if(data!="FAIL"){
        localStorage['token'] = data;
        this.loginService.loginUsuario(datos).subscribe(usuario=> localStorage['usuario'] = usuario)
        alertify.success("Inicio de sesion exitoso")
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 100);
      }else{
        alertify.error("Usuario y/o contraseña incorrectos")
      }
    }, 
      error=> console.error("error: ", error))
  }
}
