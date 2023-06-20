import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		children: [
			{
				path: 'pages',
				loadChildren: () => import('../app/pages/pages.module').then(m => m.PagesModule)
			}
    ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
