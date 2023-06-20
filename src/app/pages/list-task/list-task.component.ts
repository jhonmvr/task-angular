import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Task{
  id:number,
  titulo:string,
  descripcion:string,
  idPadre:number,
  imagenBase64:string
}

@Component({
  selector: 'app-list-taks',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {

  listTask: Task[]=[{
    id:1,
    titulo:'Titulo 1',
    descripcion:'descripcion',
    idPadre:0,
    imagenBase64:''
  },
  {
    id:2,
    titulo:'Titulo 2',
    descripcion:'descripcion',
    idPadre:0,
    imagenBase64:''
  },
  {
    id:3,
    titulo:'Titulo 3',
    descripcion:'descripcion',
    idPadre:0,
    imagenBase64:''
  }]


  constructor(
    private router: Router,){

    }
  editar(item:Task){
    this.router.navigateByUrl('/pages/task/'+item.id);
  }
}
