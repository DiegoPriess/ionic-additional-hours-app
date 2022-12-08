import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidCertificatePageRoutingModule } from './valid-certificate-routing.module';

import { ValidCertificatePage } from './valid-certificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidCertificatePageRoutingModule
  ],
  declarations: [ValidCertificatePage]
})
export class ValidCertificatePageModule {}
