import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-adm',
    loadChildren: () => import('./home-adm/home-adm.module').then( m => m.HomeAdmPageModule)
  },
  {
    path: 'home-student',
    loadChildren: () => import('./home-student/home-student.module').then( m => m.HomeStudentPageModule)
  },
  {
    path: 'add-certificate',
    loadChildren: () => import('./add-certificate/add-certificate.module').then( m => m.AddCertificatePageModule)
  },  {
    path: 'valid-certificate',
    loadChildren: () => import('./valid-certificate/valid-certificate.module').then( m => m.ValidCertificatePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
