import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidCertificatePage } from './valid-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: ValidCertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidCertificatePageRoutingModule {}
