import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactosServiceService } from '../../contactos-service.service';
declare let alertify:any;

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  myForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private servicioContactos: ContactosServiceService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData : any
    ) { }

  ngOnInit(): void {
    this.myForm= this.fb.group({
      nombre:["",Validators.required,],
      apellido:["",Validators.required],
      telefono:["",[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]],
      email:["",[Validators.required,Validators.email]],
      pais:["",[Validators.required]],
      ciudad:["",[Validators.required]],
      calle:["",[Validators.required]],
      usuario_id:[localStorage.getItem('usuario')],
      id:['']

    });
    if(this.editData){
      this.myForm.controls['nombre'].setValue(this.editData.nombre);
      this.myForm.controls['apellido'].setValue(this.editData.apellido);
      this.myForm.controls['telefono'].setValue(this.editData.telefono);
      this.myForm.controls['email'].setValue(this.editData.email);
      this.myForm.controls['pais'].setValue(this.editData.pais);
      this.myForm.controls['ciudad'].setValue(this.editData.ciudad);
      this.myForm.controls['calle'].setValue(this.editData.calle);
      this.myForm.controls['id'].setValue(this.editData.id);
    }
  }

  guardarContacto(){
    console.log(this.myForm.value)
    this.servicioContactos.createContacto(this.myForm.value).subscribe({
      next:(res)=>{
        alertify.success("se añadio perfectamente")
        this.myForm.reset();
        this.dialogRef.close()
      },
      error:(err)=>{
        alertify.error("Ocurrio un error intente de nuevo")
        console.log(err)
      }
    })
  }
  get email(){
    return this.myForm.get('email')
  }
  get telefono(){
    return this.myForm.get('telefono')
  }

}
