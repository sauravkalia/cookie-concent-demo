import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentOneComponent } from './components/parent-one/parent-one.component';

const routes: Routes = [
  {
    path: '',
    component: ParentOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
