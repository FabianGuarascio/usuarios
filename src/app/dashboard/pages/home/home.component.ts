import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../../components/dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare let alertify:any 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status=true

  constructor(private router:Router,private dialog:MatDialog) { }
  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
    alertify.alert("Has cerrado sesion","Sesion cerrada con exito")
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });
  }
}