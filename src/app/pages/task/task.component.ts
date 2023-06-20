import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../list-task/list-task.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
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
  taks!: Task;
  public formTask: FormGroup = new FormGroup({});
  titulo = new FormControl('', []);

  constructor(
    private route: ActivatedRoute,){
      this.formTask.addControl("titulo", this.titulo);
      this.route.paramMap.subscribe((data: any) => {

        console.log("ruta",data)
        if(data.params.id){

          let tas =  this.listTask.find(p=>p.id==data.params.id);
          console.log("tas",tas)
          if(tas)
            this.taks = tas
        }
      })
    }

    guardar(){

    }
}
