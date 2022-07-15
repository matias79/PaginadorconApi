import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { UsuarioService } from './usuario.service';
import { MaterialModule } from '../material/material.module';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    ListadoUsuariosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatPaginatorModule
  ],
  exports:[
    ListadoUsuariosComponent,
    MatPaginatorModule
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuariosModule { }
