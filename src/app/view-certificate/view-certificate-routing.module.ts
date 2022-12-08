import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCertificatePage } from './view-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCertificatePageRoutingModule {}
