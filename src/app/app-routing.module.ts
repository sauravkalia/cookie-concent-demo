import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent',
    loadChildren: () => import('./modules/parent/parent.module').then(m => m.ParentModule)
  },
  {
    path: 'child',
    loadChildren: () => import('./modules/child/child.module').then(m => m.ChildModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
