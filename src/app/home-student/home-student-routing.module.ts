import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeStudentPage } from './home-student.page';

const routes: Routes = [
  {
    path: '',
    component: HomeStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeStudentPageRoutingModule {}
