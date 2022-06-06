import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListadoContactosComponent } from './components/listado-contactos/listado-contactos.component';
import { FromularioContactosComponent } from './components/fromulario-contactos/fromulario-contactos.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoContactosComponent,
    FromularioContactosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
