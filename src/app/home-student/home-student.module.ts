import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeStudentPageRoutingModule } from './home-student-routing.module';

import { HomeStudentPage } from './home-student.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeStudentPageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomeStudentPage]
})
export class HomeStudentPageModule {}
