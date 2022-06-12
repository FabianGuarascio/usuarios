import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {ReactiveFormsModule } from '@angular/forms';
import {DialogComponent } from './components/dialog/dialog.component'
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableComponent } from './components/table/table.component';
import {MatSortModule} from '@angular/material/sort'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    HomeComponent,
    DialogComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class DashboardModule { }
