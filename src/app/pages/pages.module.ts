import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LayoutTopComponent } from './layout-top/layout-top.component';
import { LayoutBodyComponent } from './layout-body/layout-body.component';
import { MenuComponent } from './layout-top/menu/menu.component';
import { PerfilComponent } from './layout-top/perfil/perfil.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [

      {
        path: 'task/:id',
        component: TaskComponent
      },
      {
        path: 'task',
        component: TaskComponent
      },
      {
        path: 'list-task',
        component: ListTaskComponent
      }
     ]
  }
]

@NgModule({
  declarations: [
    TaskComponent,
    PagesComponent,
    LayoutTopComponent,
    LayoutBodyComponent,
    MenuComponent,
    PerfilComponent,
    ListTaskComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
