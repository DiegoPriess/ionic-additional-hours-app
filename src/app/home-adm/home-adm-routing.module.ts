import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAdmPage } from './home-adm.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAdmPageRoutingModule {}
