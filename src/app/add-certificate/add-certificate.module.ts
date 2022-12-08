import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCertificatePageRoutingModule } from './add-certificate-routing.module';

import { AddCertificatePage } from './add-certificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCertificatePageRoutingModule
  ],
  declarations: [AddCertificatePage]
})
export class AddCertificatePageModule {}
