import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAdmPageRoutingModule } from './home-adm-routing.module';

import { HomeAdmPage } from './home-adm.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAdmPageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomeAdmPage]
})
export class HomeAdmPageModule {}
