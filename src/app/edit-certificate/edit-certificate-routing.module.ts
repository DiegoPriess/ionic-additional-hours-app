import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCertificatePage } from './edit-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: EditCertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCertificatePageRoutingModule {}
