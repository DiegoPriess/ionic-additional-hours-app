import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCertificatePage } from './add-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: AddCertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCertificatePageRoutingModule {}
