import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';



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

  constructor(public loginService: LoginService) { }

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
        console.log("te re iniciaste amiguete")
      }else{
        console.log("che como que no estas autorizado a entrar")
      }
    } 
      ,error=> console.error("error: ", error))
  }
  prueba(){
    console.log(this.nombre.nativeElement.value)
  }

  

    // if (respuesta != 'FAIL') {
    //   await this.inicioExitoso(respuesta, datos, () => {
    //     this.router.navigate(['/posteos']);
    //   })
    // } else {
    //   alertify.alert("Las credenciales son incorrectas.", " Por favor intente nuevamente.");
    // }
  
}
