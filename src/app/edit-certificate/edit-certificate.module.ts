import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCertificatePageRoutingModule } from './edit-certificate-routing.module';

import { EditCertificatePage } from './edit-certificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCertificatePageRoutingModule
  ],
  declarations: [EditCertificatePage]
})
export class EditCertificatePageModule {}
