import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAdmPageRoutingModule } from './home-adm-routing.module';

import { HomeAdmPage } from './home-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAdmPageRoutingModule
  ],
  declarations: [HomeAdmPage]
})
export class HomeAdmPageModule {}
