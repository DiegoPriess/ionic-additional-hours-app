import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCertificatePageRoutingModule } from './add-certificate-routing.module';

import { AddCertificatePage } from './add-certificate.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCertificatePageRoutingModule,
    HttpClientModule
  ],
  declarations: [AddCertificatePage]
})
export class AddCertificatePageModule {}
