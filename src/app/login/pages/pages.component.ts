import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

declare let alertify:any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  @ViewChild("nombre")
  nombre!: ElementRef;
  @ViewChild("password")
  password!: ElementRef;

  constructor(public loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let datos={
      nombre:this.nombre.nativeElement.value,
      password:this.password.nativeElement.value
    }
    this.loginService.login(datos).subscribe(data=>{
      if(data!="FAIL"){
        localStorage['token'] = data;
        this.loginService.loginUsuario(datos).subscribe(usuario=>localStorage['usuario'] = usuario)
        alertify.success("Inicio de sesion exitoso")
        this.router.navigate(['dashboard']);

      }else{
        alertify.error("Usuario y/o contraseña incorrectos")
      }
    }, 
      error=> console.error("error: ", error))
  }
  loginUsuario(){}

  prueba(){
    console.log(this.nombre.nativeElement.value)
    alertify.success("prueba exitosa")
    
  }

  

    // if (respuesta != 'FAIL') {
    //   await this.inicioExitoso(respuesta, datos, () => {
    //     this.router.navigate(['/posteos']);
    //   })
    // } else {
    //   alertify.alert("Las credenciales son incorrectas.", " Por favor intente nuevamente.");
    // }
  
}
