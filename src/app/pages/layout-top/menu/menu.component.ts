import { Component } from '@angular/core';


interface Menu{
  titulo: string,
  id:number,
  idPadre:number,
  icon:string,
  ruta:string
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu:Menu[] = [{titulo:'Task',id:1,idPadre:0,icon:'',ruta:'task'},{titulo:'Lista de tarreas',id:1,idPadre:0,icon:'',ruta:'list-task'},{titulo:'Perfiles',id:1,idPadre:0,icon:'',ruta:'task'}]
}
