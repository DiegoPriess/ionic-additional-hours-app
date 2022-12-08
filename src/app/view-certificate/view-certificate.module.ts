import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCertificatePageRoutingModule } from './view-certificate-routing.module';

import { ViewCertificatePage } from './view-certificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCertificatePageRoutingModule
  ],
  declarations: [ViewCertificatePage]
})
export class ViewCertificatePageModule {}
