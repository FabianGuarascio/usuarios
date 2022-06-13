import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ContactosServiceService } from '../../contactos-service.service';
import { DialogComponent } from '../dialog/dialog.component';
declare let alertify:any
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['nombre','apellido','telefono','email','pais','ciudad','calle','opciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  suscription!: Subscription; 


  constructor(private contactos: ContactosServiceService,private dialog:MatDialog) { }

  ngOnInit(): void {
    if(localStorage.getItem('usuario')===null){
      setTimeout(() => {console.log("time out")
      this.obtenerContactos()
      this.suscription = this.contactos.refresh$.subscribe(()=>{
        this.obtenerContactos()
      })
      }, 300);
    }else{
      this.obtenerContactos()
    this.suscription = this.contactos.refresh$.subscribe(()=>{
      this.obtenerContactos()
    })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  edit(row:any){
    this.dialog.open(DialogComponent,{
      data:row
    })
  }

  borrar(id:any){
    this.contactos.borrarContacto(id).subscribe()
    alertify.success("Se ha borrado el contacto")
  }

  obtenerContactos(){
    this.contactos.getContactos(localStorage.getItem('usuario')).subscribe({
      next:(res:any)=>{
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
      },
      error:err=>{
        console.log(err)
      }
    })
    
  }
}
