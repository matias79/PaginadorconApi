import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id','avatar','first_name','last_name','email'];
  constructor(private usarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usarioService.listarUsuarios();
  }

  get resultados(){
    return this.usarioService.resultados;
  }

  get totalRegistros(){
    return this.usarioService.totalRegistros;
  }

  get registrosPorPagina(){
    return this.usarioService.registrosPorPagina;
  }

  onPaginadoChange(event: PageEvent){
    let pagina = event.pageIndex;
    let size = event.pageSize;
    pagina++;
    this.usarioService.listarUsuarios(pagina, size);
  }

}
